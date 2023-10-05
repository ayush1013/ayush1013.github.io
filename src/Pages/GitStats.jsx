import { Box, Flex, Heading, Image } from "@chakra-ui/react";
import React from "react";
import GithubCalendar from "../Components/GithubCalendar";

const GitStats = () => {
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
        Github Stats
      </Heading>

      <Flex
        w={{ base: "95%", md: "90%", lg: "80%" }}
        m="auto"
        justifyContent={"space-between"}
        alignItems={"center"}
        mt={{ base: "20px", md: "40px", lg: "40px" }}
        flexDirection={{ base: "column", md: "row", lg: "row" }}
        rowGap={"20px"}
      >
        <GithubCalendar />
        <Image
            w={{ base: "95%", md: "50%", lg: "50%" }}
            src="https://github-readme-stats.vercel.app/api?username=ayush1013&show_icons=true&locale=en"
          alt="image"
        />
      </Flex>
      <Flex
        w={{ base: "95%", md: "90%", lg: "80%" }}
        m="auto"
        justifyContent={"space-between"}
        alignItems={"center"}
        mt={{ base: "20px", md: "40px", lg: "40px" }}
        flexDirection={{ base: "column", md: "row", lg: "row" }}
        rowGap={"20px"}
      >
        <Image
            w={{ base: "95%", md: "50%", lg: "50%" }}
          src="https://github-readme-streak-stats.herokuapp.com/?user=ayush1013&"
          alt="image"
        />
        <Image
        w={{ base: "95%", md: "40%", lg: "40%" }}
          src="https://github-readme-stats.vercel.app/api/top-langs?username=ayush1013&show_icons=true&locale=en&layout=compact"
          alt="image"
        />
      </Flex>
    </Box>
  );
};

export default GitStats;
