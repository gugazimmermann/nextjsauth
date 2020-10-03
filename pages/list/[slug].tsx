import React from "react";
import { GetServerSideProps, NextPage } from "next";
import ErrorPage from "next/error";
import NextLink from "next/link";
import { Heading, Flex, Link, Divider, List, ListItem } from "@chakra-ui/core";
import { ListProps } from "../../interfaces";
import Layout from "../../components/layout";

const ListPage: NextPage<ListProps> = ({ list, title }: ListProps) => {
  if (!list) {
    return <ErrorPage statusCode={404} />;
  }
  return (
    <Layout title="Home | Next.js + TypeScript Example">
      <Flex flexDirection="column" alignItems="center">
        <Heading as="h1" size="lg" marginTop="2rem">
          New York Times Best Sellers
        </Heading>
        <Heading as="h2" size="md" marginY="2rem">
          {title}
        </Heading>
        <List as="ol" styleType="decimal">
          {list.map((x, i) => {
            return (
              <div key={i}>
                <ListItem>
                  <NextLink
                    as={`/book/${x.isbns[0].isbn10}`}
                    href={`/book/[isbn]`}
                    passHref
                    key={`/book/${x.isbns[0].isbn10}`}
                  >
                    <Link>{x.book_details[0].title}</Link>
                  </NextLink>
                </ListItem>
                <Divider borderColor="teal.200" />
              </div>
            );
          })}
        </List>
      </Flex>
    </Layout>
  );
};

export const getServerSideProps: GetServerSideProps = async ({
  params,
  res,
}) => {
  try {
    const { slug } = params;
    const response = await fetch(
      `https://api.nytimes.com/svc/books/v3/lists.json?list=${slug}&api-key=${process.env.NY_TIMES_KEY}`
    );
    const listRes = await response.json();
    if (listRes.num_results === 0) {
      res.statusCode = 404;
      return { props: {} };
    }
    const list = listRes.results;
    return {
      props: { list, title: list[0].list_name },
    };
  } catch {
    res.statusCode = 404;
    return { props: {} };
  }
};

export default ListPage;
