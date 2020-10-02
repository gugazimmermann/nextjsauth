import NextLink from "next/link";
import { Heading, Link, Flex } from "@chakra-ui/core";
import { GetStaticProps, NextPage } from "next";

type UsersData = {
  id: number;
  name: string;
  email: string;
};

const EmployeesPage: NextPage<{
  users: UsersData[];
}> = (props) => {
  return (
    <Flex direction="column" alignItems="center" margin={4}>
      <Heading as="h1" size="2xl" marginY="2rem">
        About Employees
      </Heading>
      {props.users.map((user) => {
        return (
          <NextLink
            as={`/about/employee/${user.id}`}
            href={`/about/employee/[id]`}
            passHref
            key={`/about/employee/${user.id}`}
          >
            <Link>
              <Heading as="h3" size="md" marginBottom={2}>
                {user.name}
              </Heading>
            </Link>
          </NextLink>
        );
      })}
      <NextLink href="/about" passHref>
        <Link>
          <Heading as="h3" size="md" marginTop={6}>
            Return to About Us
          </Heading>
        </Link>
      </NextLink>
    </Flex>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const users = (await import("../../lib/data.json")).default;
  return {
    props: { users },
  };
};

export default EmployeesPage;
