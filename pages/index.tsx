import React from "react";
import { GetServerSideProps, NextPage } from "next";
import NextLink from "next/link";
import { Heading, Flex, Link, Divider, List, ListItem } from "@chakra-ui/core";
import { ListsProps, ListsData } from "../interfaces";
import Layout from "../components/layout";

const sortBy = (key) => {
  return (a, b) => (a[key] > b[key] ? 1 : b[key] > a[key] ? -1 : 0);
};

const upperFirst = (string) => {
  return string ? string.charAt(0).toUpperCase() + string.slice(1) : "";
};

const IndexPage: NextPage<{ lists: ListsData[] }> = ({ lists }: ListsProps) => {
  return (
    <Layout title="Home | Next.js + TypeScript Example">
      <Flex flexDirection="column" alignItems="center">
        <Heading as="h1" size="lg" marginY="2rem">
          Select a New York Times Best Sellers List
        </Heading>
        <List styleType="none">
          {lists.map((x, i) => {
            return (
              <div key={i}>
                <ListItem key={x.list_name_encoded}>
                  <NextLink
                    as={`/list/${x.list_name_encoded}`}
                    href={`/list/[slug]`}
                    passHref
                    key={`/list/${x.list_name_encoded}`}
                  >
                    <Link>
                      {x.list_name} |{" "}
                      <small>
                        Updated: {upperFirst(x.updated.toLowerCase())}
                      </small>
                    </Link>
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

export const getServerSideProps: GetServerSideProps = async () => {
  const res = await fetch(
    `https://api.nytimes.com/svc/books/v3/lists/names.json?api-key=${process.env.NY_TIMES_KEY}`
  );
  const listsRes = await res.json();
  const { results } = listsRes;
  const grouped = results.reduce(
    (r, v, i, a, k = v.updated) => ((r[k] || (r[k] = [])).push(v), r),
    {}
  );

  const lists = [];
  for (const key in grouped) {
    if (grouped.hasOwnProperty(key)) {
      const group = grouped[key].concat().sort(sortBy("list_name"));
      for (const k in group) {
        lists.push(group[k]);
      }
    }
  }

  return {
    props: { lists },
  };
};

export default IndexPage;
