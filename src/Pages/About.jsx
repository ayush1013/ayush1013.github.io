import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";
import React from "react";

const About = () => {
  return (
    <Box
      h={{ base: "780px", md: "450px", lg: "592px" }}
      w="100%"
      pt={{ base: "50px", md: "60px", lg: "75px" }}
      // border="1px solid red"
      borderBottom={{
        base: "none",
        md: "1px dashed #0BC5EA",
        lg: "1px dashed #0BC5EA",
      }}
    >
      <Heading fontSize={{ base: "20px", md: "20px", lg: "30px" }}>
        {" "}
        About Me{" "}
      </Heading>
      <Flex
        w={{ base: "100%", md: "90%", lg: "90%" }}
        m="auto"
        // border="1px solid black"
        p={{ base: "20px", md: "20px 0px", lg: "50px 0px" }}
        justifyContent={"space-between"}
        alignItems={"center"}
        flexDirection={{ base: "column", md: "row", lg: "row" }}
      >
        <Box
          bgColor="#0BC5EA"
          w={{ base: "70%", md: "28%", lg: "28%" }}
          h="fit-content"
          borderRadius="50%"
          shadow="lg"
        >
          <Image w="100%" borderRadius="50%" src="AyushVerma2.png" />
        </Box>
        <Flex
          flexDirection={"column"}
          // border="1px solid black"
          mt={{ base: "20px", md: "0", lg: "0" }}
          gap="15px"
          fontSize={{ base: "14px", md: "14px", lg: "18px" }}
          fontWeight={"500"}
          justifyContent={"center"}
          textAlign={"left"}
          w={{ base: "100%", md: "65%", lg: "65%" }}
          p="10px"
          // shadow={"lg"}
          border="1px dashed #0BC5EA"
          borderRadius="5px"
        >
          <Text>Greetings,</Text>
          <Text>
            I am Ayush Verma, a dedicated and aspiring full-stack web developer
            proficient in Data Structures and Algorithms, as well as a range of
            technologies including HTML, CSS, JavaScript, React, Redux, Node.js,
            Express, and MongoDB.
          </Text>
          <Text>
            Known for my proficiency in problem-solving and a penchant for
            overcoming challenges, I am consistently driven to expand my
            knowledge and embrace new technologies.
          </Text>
          <Text>
            I am eager to contribute my skills to an organization that not only
            leverages my capabilities but also fosters a stimulating and
            competitive environment for continual learning and professional
            growth.
          </Text>
        </Flex>
      </Flex>
    </Box>
  );
};

export default About;
