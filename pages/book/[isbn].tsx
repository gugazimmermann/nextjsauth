import React from "react";
import { GetServerSideProps, NextPage } from "next";
import ErrorPage from "next/error";
import { Heading, Flex, Box } from "@chakra-ui/core";
import { BookProps } from "../../interfaces";
import Layout from "../../components/layout";

const BookPage: NextPage<BookProps> = ({ book }: BookProps) => {
  if (!book) {
    return <ErrorPage statusCode={404} />;
  }
  return (
    <Layout title="Home | Next.js + TypeScript Example">
      <Flex flexDirection="column" alignItems="center">
        <Heading as="h1" size="lg" marginTop="2rem">
          New York Times Best Sellers
        </Heading>
        <Heading as="h2" size="md" marginTop="2rem">
          {book.title}
        </Heading>
        <Heading as="h3" size="sm" marginTop="1rem">
          {book.author}
        </Heading>
        <Box marginTop="1rem">{book.description}</Box>
      </Flex>
    </Layout>
  );
};

export const getServerSideProps: GetServerSideProps = async ({
  params,
  res,
}) => {
  try {
    const { isbn } = params;
    const response = await fetch(
      `https://api.nytimes.com/svc/books/v3/lists/best-sellers/history.json?isbn=${isbn}&api-key=${process.env.NY_TIMES_KEY}`
    );
    const bookRes = await response.json();
    if (bookRes.num_results === 0) {
      res.statusCode = 404;
      return { props: {} };
    }
    const bookArr = bookRes.results;
    return {
      props: { book: bookArr[0] },
    };
  } catch {
    res.statusCode = 404;
    return { props: {} };
  }
};

export default BookPage;
