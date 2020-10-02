// using  a more complex way but easy to understand
import { NextPage } from "next";
import NextLink from "next/link";
import { Heading, Link, Flex } from "@chakra-ui/core";

const IndexPage: NextPage = () => {
  return (
    <Flex direction="column" alignItems="center" margin={4}>
      <Heading as="h1" size="2xl" marginY="2rem">
        Just a single landing page
      </Heading>
      <NextLink href="./blog" passHref>
        <Link>
          <Heading as="h3" size="md" marginBottom={4}>
            Blog
          </Heading>
        </Link>
      </NextLink>
      <NextLink href="./about" passHref>
        <Link>
          <Heading as="h3" size="md" marginBottom={4}>
            About Us
          </Heading>
        </Link>
      </NextLink>
    </Flex>
  );
};

export default IndexPage;
