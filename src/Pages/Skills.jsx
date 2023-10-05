import { Box, Heading, Image, Text } from "@chakra-ui/react";
import React from "react";
import Marquee from "react-fast-marquee";

const skills = [
  {
    image: "https://img.icons8.com/plasticine/512/react.png",
    title: "React",
  },
  {
    image: "https://img.icons8.com/color/512/redux.png",
    title: "Redux",
  },
  {
    image: "https://img.icons8.com/fluency/512/node-js.png",
    title: "Node JS",
  },
  {
    image: "https://img.icons8.com/officel/512/express-js.png",
    title: "Express",
  },
  {
    image: "https://img.icons8.com/color/512/html-5.png",
    title: "HTML",
  },
  {
    image: "https://img.icons8.com/color/512/css3.png",
    title: "CSS",
  },
  {
    image: "https://img.icons8.com/color/512/javascript.png",
    title: "Javascript",
  },
];

const tools = [
  {
    image: "https://img.icons8.com/color/512/mongodb.png",
    title: "Mongo DB",
  },

  {
    image: "https://cdn-icons-png.flaticon.com/512/5968/5968381.png",
    title: "Typescript",
  },
  {
    image: "https://img.icons8.com/color/512/chakra-ui.png",
    title: "Chakra UI",
  },
  {
    image: "https://img.icons8.com/ios-glyphs/512/github.png",
    title: "Github",
  },
  {
    image: "netlifyIcon.png",
    title: "Netlify",
  },
  {
    image: "iconcanva.png",
    title: "Canva",
  },
];

const Skills = () => {
  return (
    <Box
      h={{ base: "390px", md: "500px", lg: "592px" }}
      w="100%"
      pt={{ base: "50px", md: "60px", lg: "75px" }}
      // border="1px solid red"
      borderBottom={{
        base: "1px dashed #0BC5EA",
        md: "1px dashed #0BC5EA",
        lg: "1px dashed #0BC5EA",
      }}
    >
      <Heading fontSize={{ base: "20px", md: "20px", lg: "30px" }}>
        Skills
      </Heading>

      <Marquee  autoFill direction="right" >
        {skills.map((elem) => (
          <Box
            shadow={{ base: "md", md: "lg", lg: "lg" }}
            m={{ base: "10px 10px", md: "20px 30px", lg: "20px 30px" }}
            mt={{ base: "10px", md: "40px", lg: "40px" }}
            p="20px"
            borderRadius="10px"
            fontWeight="500"
          >
            <Image
              src={elem.image}
              m="auto"
              w={{ base: "50px", md: "70px", lg: "70px" }}
            />
            <Text>{elem.title}</Text>
          </Box>
        ))}
      </Marquee>

      <Marquee marginTop="20px" style={{ marginTop: "20px" }} autoFill>
        {tools.map((elem) => (
          <Box
            shadow={{ base: "md", md: "lg", lg: "lg" }}
            m={{ base: "10px 10px", md: "20px 30px", lg: "20px 30px" }}
            mt={{ base: "10px", md: "40px", lg: "40px" }}
            p="20px"
            borderRadius="10px"
            fontWeight="500"
          >
            <Image
              src={elem.image}
              m="auto"
              w={{ base: "50px", md: "70px", lg: "70px" }}
            />
            <Text>{elem.title}</Text>
          </Box>
        ))}
      </Marquee>
    </Box>
  );
};

export default Skills;
