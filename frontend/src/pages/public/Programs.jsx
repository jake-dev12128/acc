import {
  Box,
  Button,
  Container,
  Heading,
  Image,
  SimpleGrid,
  Text,
  VStack,
} from "@chakra-ui/react";

import { Link as RouterLink } from "react-router-dom";
import PageHero from "../../components/common/PageHero.jsx";

const programs = [
  {
    title: "Computer Science",
    description:
      "Programming, algorithms, databases, systems and computer science fundamentals.",
    image: "/img/pro1.jpg",
  },
  {
    title: "Software Engineering",
    description:
      "Software architecture, development lifecycle, testing and project delivery.",
    image: "/img/pro2.webp",
  },
  {
    title: "Network & Security",
    description:
      "Networking, infrastructure, security concepts and practical administration.",
        image: "/img/pro3.webp",

  },
  {
    title: "Web Development",
    description:
      "Modern frontend, backend, API and full-stack web development.",
    image: "/img/pro4.webp",
  },
];

export default function Programs() {
  return (
    <>
      <PageHero
        title="Programs"
        description="Academic and professional programs designed for technology-focused learning."
      />

      <Container maxW="1280px" py={{ base: 8, md: 16 }}>
        <SimpleGrid columns={{ base: 1, md: 2 }} gap={6}>
          {programs.map((program) => (
            <Box
              key={program.title}
              borderWidth="1px"
              borderColor="gray.200"
              borderRadius="2xl"
              overflow="hidden"
              bg="white"
              transition="all 0.25s ease"
              _hover={{
                transform: "translateY(-4px)",
                shadow: "xl",
              }}
            >
              <Image
                src={program.image}
                alt={program.title}
                w="100%"
                h={{ base: "220px", md: "260px" }}
                objectFit="cover"
                loading="lazy"
                fallbackSrc="https://placehold.co/800x500?text=Academic+Program"
              />

              <VStack align="stretch" gap={4} p={{ base: 5, md: 7 }}>
                <Heading size="lg">{program.title}</Heading>

                <Text color="gray.600" lineHeight="1.8">
                  {program.description}
                </Text>

                <Box>
                  <Button
                    as={RouterLink}
                    to="/academic/courses"
                    variant="outline"
                    colorPalette="blue"
                  >
                    View Courses
                  </Button>
                </Box>
              </VStack>
            </Box>
          ))}
        </SimpleGrid>
      </Container>
    </>
  );
}

