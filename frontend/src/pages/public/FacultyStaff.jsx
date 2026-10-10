import {
  Box,
  Container,
  Heading,
  SimpleGrid,
  Text,
  Image,
  VStack,
  HStack,
  Icon,
} from "@chakra-ui/react";

import {
  FaGraduationCap,
  FaCode,
  FaNetworkWired,
  FaBriefcase,
} from "react-icons/fa";

import PageHero from "../../components/common/PageHero.jsx";

const people = [
  {
    name: "Dr. Chit Su Aung",
    position: "Professor",
    department: "Computer Science",
    image: "/img/t1.jpg",
    icon: FaGraduationCap,
    
  },
  {
    name: "Dr Awng Kyaw",
    position: "Lecturer",
    department: "Software Engineering",
    image: "/img/t2.webp",
    icon: FaCode,
    
  },
  {
    name: "U Mg Mg",
    position: "Instructor",
    department: "Network & Security",
    image: "/img/t3.jpg",
    icon: FaNetworkWired,
    
  },
  {
    name: "Daw Mya Mya",
    position: "Administrative Officer",
    department: "Administration",
    image: "/img/t4.jpg",
    icon: FaBriefcase,
    
  },
];

export default function FacultyStaff() {
  return (
    <>
      <PageHero
        title="Faculties & Staff"
        description="Meet the academic and administrative team dedicated to excellence at ACC."
      />

      <Box bg="gray.50" py={{ base: 10, md: 16 }}>
        <Container maxW="1280px">
          {/* Section Heading */}
          <VStack gap={3} mb={10} textAlign="center">
            <Text
              color="blue.600"
              fontWeight="bold"
              fontSize="sm"
              letterSpacing="widest"
              textTransform="uppercase"
            >
              Our People
            </Text>

            <Heading
              size={{ base: "xl", md: "2xl" }}
              color="gray.800"
            >
              Meet Our Professional Team
            </Heading>

            <Text
              color="gray.600"
              maxW="650px"
              lineHeight="1.8"
            >
              Our dedicated educators and staff work together to
              provide quality education, practical knowledge and
              a supportive learning environment.
            </Text>
          </VStack>

          {/* Staff Cards */}
          <SimpleGrid
            columns={{ base: 1, sm: 2, lg: 4 }}
            gap={6}
          >
            {people.map((person) => (
              <Box
                key={person.name}
                bg="white"
                border="1px solid"
                borderColor="gray.200"
                borderRadius="2xl"
                overflow="hidden"
                transition="border-color 0.2s ease, box-shadow 0.2s ease"
                _hover={{
                  borderColor: "blue.200",
                  shadow: "md",
                }}
              >
                {/* Staff Photo */}
                <Box
                  h="220px"
                  bg="gray.100"
                  overflow="hidden"
                >
                  <Image
                    src={person.image}
                    alt={person.name}
                    w="100%"
                    h="100%"
                    objectFit="cover"
                    objectPosition="center 30%"
                    loading="lazy"
                  />
                </Box>

                {/* Staff Information */}
                <VStack
                  align="stretch"
                  gap={4}
                  p={5}
                >
                  <Box>
                    <Heading
                      size="md"
                      color="gray.800"
                      mb={3}
                    >
                      {person.name}
                    </Heading>

                    {/* Position Badge */}
                    <Box
                      display="inline-flex"
                      px={3}
                      py={1.5}
                      borderRadius="full"
                      bg="blue.50"
                      color="blue.700"
                      fontSize="sm"
                      fontWeight="semibold"
                    >
                      {person.position}
                    </Box>
                  </Box>

                  {/* Department */}
                  <HStack
                    align="start"
                    gap={3}
                    color="gray.600"
                  >
                    <Icon
                      as={person.icon}
                      color="blue.500"
                      boxSize={4}
                      mt={1}
                      flexShrink={0}
                    />

                    <Text
                      fontSize="sm"
                      fontWeight="medium"
                    >
                      {person.department}
                    </Text>
                  </HStack>

                 
                </VStack>
              </Box>
            ))}
          </SimpleGrid>
        </Container>
      </Box>
    </>
  );
}

