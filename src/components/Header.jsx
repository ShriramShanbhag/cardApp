import React from "react";
import { Flex, Heading } from "@chakra-ui/react";
import { AddCardModal } from "./AddCardModal";

export const Header = ({ onAdd }) => {
  return (
    <Flex
      justifyContent="space-between"
      flex={1}
      mb={4}
      backgroundColor={"#f2f2f2"}
      padding={4}
    >
      <Heading fontFamily={"cursive"} fontSize={"32px"}>
        Card App
      </Heading>
      <AddCardModal onAdd={onAdd} />
    </Flex>
  );
};
