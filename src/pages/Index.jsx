import React from "react";
import { Box, Heading, Text, Stack, Image, Button, Grid, GridItem, Container, Divider, Icon } from "@chakra-ui/react";
import { FaPlane, FaHotel, FaCar, FaPhone } from "react-icons/fa";

const Index = () => {
  const tours = [
    {
      title: "Exotic Beach Getaway",
      description: "Relax on pristine beaches and indulge in luxury accommodations.",
      image: "https://images.unsplash.com/photo-1455240919365-564fd7e82731?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHx0cm9waWNhbCUyMGJlYWNoJTIwcmVzb3J0fGVufDB8fHx8MTcxMDY1NzY3Mnww&ixlib=rb-4.0.3&q=80&w=1080",
    },
    {
      title: "Mountain Adventure",
      description: "Explore breathtaking mountain landscapes and engage in thrilling activities.",
      image: "https://images.unsplash.com/photo-1463693396721-8ca0cfa2b3b5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxtb3VudGFpbiUyMGFkdmVudHVyZXxlbnwwfHx8fDE3MTA2NTc2NzJ8MA&ixlib=rb-4.0.3&q=80&w=1080",
    },
    {
      title: "City Explorer",
      description: "Discover the vibrant culture and iconic landmarks of famous cities.",
      image: "https://images.unsplash.com/photo-1493134799591-2c9eed26201a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxjaXR5JTIwc2t5bGluZXxlbnwwfHx8fDE3MTA0NzI1NzJ8MA&ixlib=rb-4.0.3&q=80&w=1080",
    },
  ];

  return (
    <Box>
      {/* Hero Section */}
      <Box bg="blue.500" color="white" py={20}>
        <Container maxW="container.lg">
          <Heading as="h1" size="2xl" mb={4}>
            Discover the World with Us
          </Heading>
          <Text fontSize="xl" mb={8}>
            Explore amazing destinations, create unforgettable memories.
          </Text>
          <Button colorScheme="white" size="lg">
            Book Now
          </Button>
        </Container>
      </Box>

      {/* Services Section */}
      <Box py={20}>
        <Container maxW="container.lg">
          <Heading as="h2" size="xl" mb={10}>
            Our Services
          </Heading>
          <Grid templateColumns="repeat(3, 1fr)" gap={8}>
            <GridItem>
              <Icon as={FaPlane} boxSize={12} color="blue.500" mb={4} />
              <Heading as="h3" size="lg" mb={2}>
                Flights
              </Heading>
              <Text>Book domestic and international flights at competitive prices.</Text>
            </GridItem>
            <GridItem>
              <Icon as={FaHotel} boxSize={12} color="blue.500" mb={4} />
              <Heading as="h3" size="lg" mb={2}>
                Hotels
              </Heading>
              <Text>Find the perfect accommodations for your stay.</Text>
            </GridItem>
            <GridItem>
              <Icon as={FaCar} boxSize={12} color="blue.500" mb={4} />
              <Heading as="h3" size="lg" mb={2}>
                Car Rentals
              </Heading>
              <Text>Rent a car and explore your destination at your own pace.</Text>
            </GridItem>
          </Grid>
        </Container>
      </Box>

      {/* Tours Section */}
      <Box py={20} bg="gray.100">
        <Container maxW="container.lg">
          <Heading as="h2" size="xl" mb={10}>
            Popular Tours
          </Heading>
          <Grid templateColumns="repeat(3, 1fr)" gap={8}>
            {tours.map((tour, index) => (
              <GridItem key={index}>
                <Box borderRadius="lg" overflow="hidden" bg="white" boxShadow="md">
                  <Image src={tour.image} alt={tour.title} />
                  <Box p={6}>
                    <Heading as="h3" size="lg" mb={2}>
                      {tour.title}
                    </Heading>
                    <Text mb={4}>{tour.description}</Text>
                    <Button colorScheme="blue">Learn More</Button>
                  </Box>
                </Box>
              </GridItem>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Contact Section */}
      <Box py={20}>
        <Container maxW="container.lg">
          <Heading as="h2" size="xl" mb={10}>
            Contact Us
          </Heading>
          <Stack direction={["column", "row"]} spacing={8}>
            <Box>
              <Icon as={FaPhone} boxSize={8} color="blue.500" mb={4} />
              <Heading as="h3" size="lg" mb={2}>
                Call Us
              </Heading>
              <Text>+1 123-456-7890</Text>
            </Box>
            <Divider orientation="vertical" />
            <Box>
              <Heading as="h3" size="lg" mb={2}>
                Email Us
              </Heading>
              <Text>info@toursandtravel.com</Text>
            </Box>
          </Stack>
        </Container>
      </Box>
    </Box>
  );
};

export default Index;
