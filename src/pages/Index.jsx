import React from "react";
import { Box, Button, Container, Heading, VStack, Text, Link, Image, useDisclosure, Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, FormControl, FormLabel, Input, Select, RadioGroup, Radio, Stack } from "@chakra-ui/react";
import { FaGoogle, FaMapMarkerAlt } from "react-icons/fa";

const Index = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleSignUp = () => {
    // Placeholder for sign up integration
  };

  const handleMemberLogin = () => {
    // Placeholder for member login integration
  };

  const handleFreeBrowsing = () => {
    // Placeholder for free browsing functionality
  };

  return (
    <Container centerContent>
      <VStack spacing={4} align="stretch">
        <Box>
          <Heading as="h1" size="xl" textAlign="center" mt={10} mb={5}>
            Welcome to Meet & Date!
          </Heading>
          <Text textAlign="center" mb={5}>
            Connect and discover events in your city.
          </Text>
        </Box>
        <Button leftIcon={<FaGoogle />} colorScheme="red" onClick={handleSignUp}>
          Sign-Up with Google
        </Button>
        <Button leftIcon={<FaGoogle />} colorScheme="blue" onClick={handleMemberLogin}>
          Member Login with Google
        </Button>
        <Button leftIcon={<FaMapMarkerAlt />} colorScheme="teal" onClick={handleFreeBrowsing}>
          Free Browsing
        </Button>
      </VStack>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Create New Event</ModalHeader>
          <ModalCloseButton />
          <ModalBody>{/* Form fields for creating a new event would go here */}</ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
            <Button variant="ghost">Create Event</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Container>
  );
};

export default Index;
