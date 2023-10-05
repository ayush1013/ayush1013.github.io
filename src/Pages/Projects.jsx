import { Box, Flex, Grid, Heading, Image, Link, Text } from "@chakra-ui/react";
import React from "react";

const projects = [
  {
    title: "Tech World",
    discription:
      "The TechWorld is an details oriented website. Through this website, user can process orders, accept payments and logistics, and provide customer services. User Friendly UI ....",
    techStacks: [
      "React",
      "Redux",
      "Chakra UI",
      "Node JS",
      "Express JS",
      "MongoDB",
    ],
    image: "techworld.png",
    githubLink: "https://github.com/Raj-1313/TechWorld",
    liveLink: "https://techworld-tau.vercel.app/",
  },
  {
    title: "KFC Clone",
    discription:
      "KFC (Kentucky Fried Chicken) is an American fast food restaurant chain headquartered in Louisville, Kentucky, that specializes in fried chicken.",
    techStacks: ["HTML", "CSS", "Javascript"],
    image: "kfc.png",
    githubLink: "https://github.com/naveenSaini1/KFC-2.O",
    liveLink: "https://clever-kitsune-a5635e.netlify.app/",
  },
  {
    title: "Medicine Store",
    discription:
      "Medicine store is an e-commerce website. The site is focused on providing a market place mainly for medicines and other hygiene related products.",
    techStacks: [
      "HTML",
      "CSS",
      "Javascript",
      "React",
      "Chakra UI",
      "JSON Server",
    ],
    image: "medicinestore.png",
    githubLink: "https://github.com/Adii1707/medicine-store-project",
    liveLink: "https://ephemeral-quokka-680438.netlify.app/",
  },
  {
    title: "Kimaye Clone",
    discription:
      "Hassle free online fruit ordering platform in Mumbai, Kimaye is a promise of consistently delivering the safest and superior quality fruits.",
    techStacks: ["HTML", "CSS", "Javascript"],
    image: "kimaye.png",
    githubLink: "https://github.com/Ajay470/Team-squalid-wire",
    liveLink: "https://boisterous-hotteok-75bc34.netlify.app/index.html",
  },
];

const Projects = () => {
  return (
    <Box
      h={{ base: "fit-content", md: "fit-content", lg: "fit-content" }}
      w="100%"
      pt={{ base: "50px", md: "60px", lg: "75px" }}
      pb={{ base: "30px", md: "50px", lg: "50px" }}
      // border="1px solid red"
      borderBottom={{
        base: "1px dashed #0BC5EA",
        md: "1px dashed #0BC5EA",
        lg: "1px dashed #0BC5EA",
      }}
    >
      <Heading fontSize={{ base: "20px", md: "20px", lg: "30px" }}>
        Projects
      </Heading>

      <Grid
        w={{ base: "95%", md: "90%", lg: "80%" }}
        gap={{ base: "30px", md: "40px", lg: "50px" }}
        rowGap={{ base: "20px", md: "40px", lg: "40px" }}
        gridTemplateColumns={{ base: "repeat(1,1fr)", md: "repeat(2,1fr)", lg: "repeat(2,1fr)" }}
        m="auto"
        mt={{ base: "20px", md: "40px", lg: "40px" }}
      >
        {projects.map((elem, index) => (
          <Box
            key={index}
            shadow={"md"}
            p="10px"
            pb="50px"
            borderRadius={"10px"}
            bgColor="#E2EAEE"
            color="#2E353B"
            position={"relative"}
          >
            <Link href={elem.liveLink} target="_blank" >
            <Image w="100%" m="auto" src={elem.image} shadow={"md"} borderTopRadius={"10px"} />
            </Link>
            <Box mt="10px" textAlign={"left"}>
              <Text
                fontWeight="500"
                fontSize={{ base: "16px", md: "20px", lg: "20px" }}
                color="#2E353B"
              >
                {elem.title}
              </Text>
              <Text color="#2E353B" fontSize="14px">
                {elem.discription}
              </Text>

              <Flex fontSize="14px" mt="10px" alignItems="baseline" gap="10px">
                <Text
                  display={"inline-block"}
                  whiteSpace={"nowrap"}
                  fontWeight={"500"}
                >
                  Tech Stack:
                </Text>
                <Box>
                  {elem.techStacks?.map((el, i) => (
                    <span key={i}>
                      {" "}
                      {el} {i != elem.techStacks.length - 1 && "|"}
                    </span>
                  ))}
                </Box>
              </Flex>
            </Box>
            <Flex gap="20px" position={"absolute"} zindex="1" bottom={"10px"} right="10px"  >
              <Link href={elem.githubLink} target="_blank" >
              <Image src="icons8-github-100.png" w="32px" />
              </Link>
              <Link href={elem.liveLink} target="_blank" >
              <Image src="icons8-share-64.png" w="32px" />
              </Link>
            </Flex>
          </Box>
        ))}
      </Grid>
    </Box>
  );
};

export default Projects;
