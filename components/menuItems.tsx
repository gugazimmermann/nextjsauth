import { Text } from "@chakra-ui/core";

const MenuItems = ({ children = "" as string }) => (
  <Text mt={{ base: 4, md: 0 }} mr={6} display="block">
    {children}
  </Text>
);

export default MenuItems;
