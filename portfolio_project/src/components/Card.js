import { Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  return (
    <VStack
      backgroundColor="white"
      borderRadius="md"
      boxShadow="lg"
      overflow="hidden"
      spacing={0}>
      <Image src={imageSrc} alt={title} />
      <VStack p={4} alignItems="flex-start">
        <Heading as="h3" size="md" color="black">
          {title}
        </Heading>
        <Text color="black">{description}</Text>
        <HStack spacing={2} mt={2}>
          <Text align="bottom" color="blue.500">
            Read more
          </Text>
          <FontAwesomeIcon icon={faArrowRight} />
        </HStack>
      </VStack>
    </VStack>
  );
};

export default Card;
