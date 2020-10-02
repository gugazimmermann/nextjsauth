// using  a more easy way but hard to understand
import NextLink from "next/link";
import { Heading, Link, Flex } from "@chakra-ui/core";

const AboutPage = () => {
  return (
    <Flex direction="column" alignItems="center" margin={4}>
      <Heading as="h1" size="2xl" marginY="2rem">
        About Us
      </Heading>
      <NextLink href="/about/employees" passHref>
        <Link>
          <Heading as="h3" size="md" marginBottom={8}>
            See the List of Employees
          </Heading>
        </Link>
      </NextLink>
      <NextLink href="/" passHref>
        <Link>
          <Heading as="h3" size="md" marginBottom={2}>
            Return to Home
          </Heading>
        </Link>
      </NextLink>
    </Flex>
  );
};

export default AboutPage;
