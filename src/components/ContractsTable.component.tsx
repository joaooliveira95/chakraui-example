import {
    Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Badge, Box, chakra,
    Container, Fade, Flex, List, ListItem, SimpleGrid, SlideFade, Tab, TabList, TabPanel, TabPanels,
    Tabs, Text, useColorModeValue
} from '@chakra-ui/react';

export default function ContractsTable({}) {
  const boxBg = useColorModeValue("white", "gray.800");
  const borderBottomColor = useColorModeValue("gray.200", "gray.700");
  return (
    <Container maxW={"8xl"} py="4" px="2">
      <Tabs>
        <TabList mb="2" mx="4">
          <Tab>Contracts</Tab>
          <Tab>Two</Tab>
          <Tab>Three</Tab>
        </TabList>

        <TabPanels>
          <TabPanel>
            <Fade in>
              <Box>
                <List spacing={2}>
                  <ListItem>
                    {Array.from(Array(10)).map((_, i) => (
                      <SlideFade in={true} delay={i * 0.25} offsetY="20px">
                        <Box
                          bg={boxBg}
                          py="3"
                          px="2"
                          mb="3"
                          rounded={"lg"}
                          shadow="md"
                        >
                          <Accordion allowMultiple>
                            <AccordionItem border={"none"}>
                              <AccordionButton>
                                <Box flex="1" textAlign="left">
                                  <Flex
                                    alignItems={"center"}
                                    gap="4"
                                    flexWrap={"wrap"}
                                  >
                                    <Text fontSize="lg">K0000109</Text>
                                    <Text fontSize="lg">
                                      Financial Leasing test
                                    </Text>
                                    <Badge
                                      colorScheme="blue"
                                      py="1"
                                      px="2"
                                      rounded="lg"
                                      textTransform={"capitalize"}
                                    >
                                      Offer
                                    </Badge>
                                  </Flex>
                                </Box>
                                <AccordionIcon />
                              </AccordionButton>
                              <AccordionPanel pb={4}>
                                <SimpleGrid columns={{ md: 2, lg: 4 }}>
                                  <chakra.div mb="2">
                                    <Text
                                      fontSize="md"
                                      fontWeight={"medium"}
                                      mb="2"
                                    >
                                      Customer
                                    </Text>
                                    <Text fontSize="sm" mb="1">
                                      39764873
                                    </Text>
                                    <Text fontSize="sm" mb="1">
                                      Haps
                                    </Text>
                                  </chakra.div>
                                  <chakra.div mb="2">
                                    <Text
                                      fontSize="md"
                                      fontWeight={"medium"}
                                      mb="2"
                                    >
                                      Advisor
                                    </Text>
                                    <Text fontSize="sm" mb="1">
                                      Joao Miguel
                                    </Text>
                                    <Text fontSize="sm" mb="1">
                                      LENEO
                                    </Text>
                                  </chakra.div>
                                  <chakra.div mb="2">
                                    <Text
                                      fontSize="md"
                                      fontWeight={"medium"}
                                      mb="1"
                                    >
                                      End Date
                                    </Text>
                                    <Text fontSize="sm">12/01/2022</Text>
                                  </chakra.div>
                                  <chakra.div mb="2">
                                    <Text
                                      fontSize="md"
                                      fontWeight={"medium"}
                                      mb="1"
                                    >
                                      Created By
                                    </Text>
                                    <Text fontSize="sm">João Oliveira</Text>
                                  </chakra.div>
                                </SimpleGrid>
                              </AccordionPanel>
                            </AccordionItem>
                          </Accordion>
                        </Box>
                      </SlideFade>
                    ))}
                  </ListItem>
                </List>
              </Box>
            </Fade>
          </TabPanel>
          <TabPanel>
            <p>two!</p>
          </TabPanel>
          <TabPanel>
            <p>three!</p>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Container>
  );
}
