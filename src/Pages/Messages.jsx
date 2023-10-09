import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import axios from "axios";
import React from "react";
import { useEffect, useState } from "react";

const Messages = () => {
  const [msgData, setMsgData] = useState([]);
  const [singleMessage, setSingleMessage] = useState([]);

  // console.log("msgData: ", msgData);

  const handleSigleMessage = (id) => {
    const initialMessage =
      msgData.length > 0 && msgData.filter((elem) => elem._id === id);
    console.log("initialMessage",initialMessage);
    if (initialMessage.length > 0) {
      setSingleMessage(initialMessage[0].content);
    }
    console.log("singleMessage", singleMessage);
  };

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
          <Flex
            flexDirection={"column"}
            gap="10px"
            fontSize={"sm"}
            p="10px"
            pr="20px"
            pt="20px"
          >
            {msgData.length > 0 &&
              msgData.map((elem) => (
                <Box
                  key={elem._id}
                  textAlign={"left"}
                  borderBottom="1px solid gray"
                  pb="5px"
                  cursor={"pointer"}
                  onClick={() => handleSigleMessage(elem._id)}
                >
                  <Text>{elem.name}</Text>
                  <Text fontSize={"xs"} color={"gray.400"}>
                    {elem.email}
                  </Text>
                </Box>
              ))}
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
