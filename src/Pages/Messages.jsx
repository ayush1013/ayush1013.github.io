import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import axios from "axios";
import React from "react";
import { useEffect, useState } from "react";

const Messages = () => {
  const [msgData, setMsgData] = useState([]);

  console.log("msgData: ", msgData);

  useEffect(() => {
    const getData = () => {
      axios
        .get("https://rich-lime-ray-coat.cyclic.app/api/messages")
        .then((res) => {
          console.log(res.data);
          setMsgData(res.data.data);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    getData();
  }, []);

  return (
    <Box>
      <Flex
        alignItems={"center"}
        w="100%"
        h="50px"
        shadow={"md"}
        justifyContent={"center"}
        bgColor="gray.500"
        zIndex="10"
        color="white"
      >
        <Text fontSize={"lg"} fontWeight={"500"}>
          Portfolio Feedback & Messages
        </Text>
      </Flex>
      <Flex w="100%" h="100vh" color="white">
        <Box w="20%" h="100%" bgColor="gray.800">
          <Flex
            justifyContent={"center"}
            alignItems={"center"}
            h="30px"
            bgColor="gray.700"
            shadow={"lg"}
          >
            <Text>Message Contacts</Text>
          </Flex>
          <Flex flexDirection={"column"}>
            {
                msgData.length>0 && msgData.map((elem)=>(
                    
                ))
            }
          </Flex>
        </Box>
        <Box w="80%" bgColor="gray.600" h="100%">
          <Flex
            justifyContent={"center"}
            alignItems={"center"}
            h="30px"
            bgColor="gray.600"
            shadow={"lg"}
          >
            <Text>Messaging History</Text>
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
};

export default Messages;
