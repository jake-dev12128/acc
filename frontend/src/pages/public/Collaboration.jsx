import {
  Box,
  Container,
  Heading,
  Image,
  SimpleGrid,
  Text,
  VStack,
} from "@chakra-ui/react";

import PageHero from "../../components/common/PageHero.jsx";

const partners = [
  {
    name: "Partner University",
    type: "University Partner",
    logo: "/img/c2.png",
    description:
      "Academic cooperation, knowledge sharing and educational development opportunities.",
  },
  {
    name: "Technology Company",
    type: "Industry Partner",
    logo: "/img/c1.webp",
    description:
      "Industry collaboration, technology innovation and practical learning opportunities.",
  },
  {
    name: "Training Organization",
    type: "Professional Partner",
    logo: "/img/c3.jpg",
    description:
      "Professional training, skill development and career-focused learning programs.",
  },
  {
    name: "International Institution",
    type: "International Partner",
    logo: "/img/c4.avif",
    description:
      "International knowledge exchange and opportunities for academic collaboration.",
  },
];

export default function Collaboration() {
  return (
    <>
      <PageHero
        title="Collaboration"
        description="University, industry and professional collaboration opportunities."
      />

      <Container maxW="1280px" py={{ base: 10, md: 16 }}>
        <SimpleGrid columns={{ base: 1, sm: 2 }} gap={8}>
          {partners.map((partner) => (
            <Box
              key={partner.name}
              p={{ base: 6, md: 8 }}
              borderWidth="1px"
              borderColor="gray.200"
              borderRadius="2xl"
              bg="white"
              textAlign="center"
              transition="all 0.3s ease"
              _hover={{
                transform: "translateY(-6px)",
                shadow: "xl",
                borderColor: "blue.300",
              }}
            >
              <VStack gap={5}>
                {/* Circular Partner Logo */}
<Box
  w={{ base: "150px", md: "170px" }}
  h={{ base: "150px", md: "170px" }}
  borderRadius="full"
  overflow="hidden"
  bg="white"
  border="3px solid"
  borderColor="blue.100"
  boxShadow="0 6px 20px rgba(37, 99, 235, 0.12)"
  transition="all 0.3s ease"
  _hover={{
    transform: "scale(1.05)",
    borderColor: "blue.400",
    boxShadow: "0 8px 28px rgba(37, 99, 235, 0.2)",
  }}
>
  <Image
    src={partner.logo}
    alt={`${partner.name} logo`}
    w="100%"
    h="100%"
    objectFit="cover"
    objectPosition="center"
    display="block"
    loading="lazy"
    fallbackSrc="https://placehold.co/240x240?text=Partner"
  />
</Box>



                {/* Partner Information */}
                <Box>
                  <Text
                    fontSize="sm"
                    fontWeight="semibold"
                    color="blue.600"
                    letterSpacing="wide"
                    textTransform="uppercase"
                  >
                    {partner.type}
                  </Text>

                  <Heading
                    size="md"
                    mt={2}
                    color="gray.800"
                  >
                    {partner.name}
                  </Heading>
                </Box>

                <Text
                  color="gray.600"
                  lineHeight="1.8"
                  fontSize="sm"
                >
                  {partner.description}
                </Text>
              </VStack>
            </Box>
          ))}
        </SimpleGrid>
      </Container>
    </>
  );
}

