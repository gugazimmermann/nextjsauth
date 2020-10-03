import React, { ReactNode, useState } from "react";
import Head from "next/head";
import { Box, Heading, Flex, Button } from "@chakra-ui/core";
// import MenuItems from "./menuItems";

type Props = {
  children?: ReactNode;
  title?: string;
};

const Layout = ({ children, title = "Guga Next.js" }: Props) => {
  const [show, setShow] = useState(false);
  const handleToggle = () => setShow(!show);

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <header>
        <Flex
          as="nav"
          align="center"
          justify="space-between"
          wrap="wrap"
          padding="1.5rem"
          bg="teal.500"
          color="white"
        >
          <Flex align="center" mr={5}>
            <Heading as="h1" size="lg">
              {title}
            </Heading>
          </Flex>
          {/* <Box display={{ sm: "block", md: "none" }} onClick={handleToggle}>
            <svg
              fill="white"
              width="12px"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </Box> */}
          {/* <Box
            display={{ sm: show ? "block" : "none", md: "flex" }}
            width={{ sm: "full", md: "auto" }}
            alignItems="center"
            flexGrow={1}
          >
            <MenuItems>Docs</MenuItems>
            <MenuItems>Examples</MenuItems>
            <MenuItems>Blog</MenuItems>
          </Box> */}
          <Box
            // display={{ sm: show ? "block" : "none", md: "block" }}
            mt={{ base: 4, md: 0 }}
          >
            <Button bg="transparent" border="1px">
              Create account
            </Button>
          </Box>
        </Flex>
      </header>
      <main>{children}</main>
    </>
  );
};

export default Layout;
