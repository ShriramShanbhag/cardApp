import { useEffect, useState } from "react";
import "./App.css";
import { CardComponent } from "./components/CardComponent";
import { fetchCards, deleteCard, addCard } from "./services/cardAPIService";
import { Box, HStack, useToast } from "@chakra-ui/react";
import { Header } from "./components/Header";
import { Loader } from "./components/Loader";

function App() {
  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(false);
  const toast = useToast();

  const loadCards = async () => {
    try {
      setLoading(true);
      const cards = await fetchCards();
      setCards(cards);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  const handleAddCard = async (title, description) => {
    try {
      setLoading(true);
      const newCard = { title, description };
      const res = await addCard(title, description);
      loadCards();
      setLoading(false);
      toast({
        title: "Card Added.",
        description: "Card added successfully.",
        status: "success",
        duration: 2000,
        isClosable: true,
      });
    } catch (error) {
      setLoading(false);
      console.error("Error adding card:", error);
      toast({
        title: "Failed.",
        description: "Failed to add card.",
        status: "error",
        duration: 2000,
        isClosable: true,
      });
    }
  };

  const handleDeleteCard = async (id) => {
    try {
      setLoading(true);
      await deleteCard(id);
      setCards(cards.filter((card) => card.id !== id));
      setLoading(false);
      toast({
        title: "Deleted.",
        description: "Card deleted successfully.",
        status: "success",
        duration: 2000,
        isClosable: true,
      });
    } catch (e) {
      setLoading(false);
      console.log(error);
      toast({
        title: "Failed.",
        description: "Failed to delete card.",
        status: "error",
        duration: 2000,
        isClosable: true,
      });
    }
  };

  useEffect(() => {
    loadCards();
  }, []);
  return (
    <>
      <Box w={"100%"}>
        <Header onAdd={handleAddCard} />
        {loading ? (
          <Loader />
        ) : (
          <HStack spacing={4} flexWrap={"wrap"} m={5}>
            {cards?.map((c, i) => (
              <CardComponent
                key={i}
                title={c.title}
                description={c.description}
                onDelete={() => handleDeleteCard(c.id)}
              />
            ))}
          </HStack>
        )}
      </Box>
    </>
  );
}

export default App;
