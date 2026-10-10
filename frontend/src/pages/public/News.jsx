import {
  Badge,
  Box,
  Container,
  Heading,
  Image,
  SimpleGrid,
  Text,
  VStack,
} from "@chakra-ui/react";

import PageHero from "../../components/common/PageHero.jsx";

const news = [
  {
    title: "2026 Academic Year Announcement",
    category: "Academic",
    description:
      "Important information for the upcoming academic year.",
    image: "/img/acdemic.jpg",
    date: "October 2026",
  },
  {
    title: "New Computer Science Program",
    category: "Programs",
    description:
      "Explore the latest academic opportunities at ACC.",
    image: "/img/program.jpg",
    date: "October 2026",
  },
  {
    title: "Entrance Information",
    category: "Admission",
    description:
      "Entrance-related announcements and information.",
    image: "/img/infor.jpg",
    date: "October 2026",
  },
  {
    title: "Technology Workshop",
    category: "Events",
    description:
      "A practical workshop for students and technology enthusiasts.",
    image: "/img/workshop.jpg",
    date: "October 2026",
  },
  {
    title: "Collaboration Update",
    category: "Collaboration",
    description:
      "New partnership and collaboration information.",
    image: "/img/coll.jpg",
    date: "October 2026",
  },
  {
    title: "Student Activities",
    category: "Student Life",
    description:
      "Highlights from recent student activities.",
    image: "/img/activies.jpg",
    date: "October 2026",
  },
];

export default function News() {
  return (
    <>
      <PageHero
        title="News & Announcements"
        description="Latest news, announcements and important college updates."
      />

      <Container maxW="1280px" py={{ base: 8, md: 16 }}>
        <SimpleGrid
          columns={{ base: 1, md: 2, lg: 3 }}
          gap={{ base: 5, md: 6 }}
        >
          {news.map((item) => (
            <Box
              key={item.title}
              borderWidth="1px"
              borderColor="gray.200"
              borderRadius="2xl"
              overflow="hidden"
              bg="white"
              transition="all 0.25s ease"
              _hover={{
                transform: "translateY(-5px)",
                shadow: "xl",
              }}
            >
              {/* News Image */}
              <Image
                src={item.image}
                alt={item.title}
                w="100%"
                h={{ base: "220px", md: "230px" }}
                objectFit="cover"
                loading="lazy"
                fallbackSrc="https://placehold.co/800x500?text=ACC+News"
              />

              {/* News Content */}
              <VStack align="stretch" gap={3} p={6}>
                <Box>
                  <Badge colorPalette="blue">
                    {item.category}
                  </Badge>
                </Box>

                <Heading size="md" lineHeight="1.5">
                  {item.title}
                </Heading>

                <Text
                  color="gray.600"
                  lineHeight="1.8"
                  flex="1"
                >
                  {item.description}
                </Text>

                <Text
                  fontSize="sm"
                  color="gray.400"
                  pt={2}
                  borderTopWidth="1px"
                  borderColor="gray.100"
                >
                  Published: {item.date}
                </Text>
              </VStack>
            </Box>
          ))}
        </SimpleGrid>
      </Container>
    </>
  );
}

