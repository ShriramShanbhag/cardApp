import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Heading,
  Text,
  Flex,
  Box,
} from "@chakra-ui/react";
import { ConfirmDeleteModal } from "./ConfirmModal";
import { useState } from "react";

export const CardComponent = ({ title, description, onDelete }) => {
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  const handleDelete = () => {
    setIsDeleteModalOpen(true);
  };

  const confirmDelete = () => {
    onDelete();
    setIsDeleteModalOpen(false);
  };

  return (
    <Box>
      <Card
        variant="outline"
        borderWidth="1px"
        borderRadius="lg"
        overflow="hidden"
        width={"250px"}
      >
        <CardHeader>
          <Heading size="md">{title}</Heading>
        </CardHeader>
        <CardBody>
          <Text>{description}</Text>
        </CardBody>
        <CardFooter>
          <Flex justify="flex-end" width="100%">
            <Button colorScheme="red" onClick={() => handleDelete()}>
              Delete
            </Button>
          </Flex>
        </CardFooter>
      </Card>
      <ConfirmDeleteModal
        isOpen={isDeleteModalOpen}
        onClose={() => setIsDeleteModalOpen(false)}
        onConfirm={confirmDelete}
      />
    </Box>
  );
};
