import {
  Box,
  Button,
  Flex,
  Heading,
  Image,
  Input,
  Link,
  Text,
  Textarea,
  useToast,
} from "@chakra-ui/react";
import axios from "axios";
import React, { useState } from "react";

const connections = [
  {
    title: "ayush98277@gmail.com",
    image: "icons8-email-48.png",
    redirect: "mailto:ayush98277@gmail.com",
  },
  {
    title: "+91 8103313529",
    image: "icons8-contact-58.png",
    redirect: "tel:8103313529",
  },
  {
    title: "Follow me on Github",
    image: "https://img.icons8.com/ios-glyphs/512/github.png",
    redirect: "https://github.com/ayush1013",
  },
  {
    title: "Let's connect on Linkedin",
    image: "https://img.icons8.com/fluency/512/linkedin.png",
    redirect: "https://www.linkedin.com/in/ayush-verma-4a3291224/",
  },
  {
    title: "Follow me on Twiter",
    image: "https://img.icons8.com/fluency/512/twitter.png",
    redirect: "https://twitter.com/Ayush_Verma_13",
  },
];

const initialMessage = {
  name: "",
  email: "",
  content: "",
};

const postMessage = (payload) => {
  axios
    .post("https://rich-lime-ray-coat.cyclic.app/api/message", payload)
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
};

const Contact = ({ darkMode }) => {
  const [hide, setHide] = useState({ number: false, email: false });
  const [copied, setCopied] = useState({ number: false, email: false });
  const [message, setMessage] = useState(initialMessage);
  const toast = useToast();

  const handleChange = (e) => {
    setMessage({ ...message, [e.targer.name]: e.targer.value });
  };

  const handleMessage = (e) => {
    e.preventDefault();
    postMessage(message).then((res) => {
      toast({
        title: "Your message has been sent",
        status: "success",
        colorScheme: "success",
        duration: 3000,
      });
    });
  };

  const handleCopyClick = (title) => {
    navigator.clipboard.writeText(title);
    if (title === "ayush98277@gmail.com") {
      setCopied({ ...copied, email: true });
    } else if (title === "+91 8103313529") {
      setCopied({ ...copied, number: true });
    }
    setTimeout(() => {
      setCopied({ number: false, email: false });
    }, 1000); // Reset the copied state after 2 seconds
  };

  const handleHover = (t) => {
    if (t === "+91 8103313529") {
      setHide({ ...hide, number: true });
    } else if (t === "ayush98277@gmail.com") {
      setHide({ ...hide, email: true });
    }
  };

  const handleMouseOut = () => {
    setHide({ ...hide, email: false, number: false });
  };

  return (
    <Box
      h={{ base: "fit-content", md: "fit-content", lg: "fit-content" }}
      w="100%"
      pt={{ base: "50px", md: "60px", lg: "75px" }}
      pb={{ base: "10px", md: "10px", lg: "10px" }}
      // border="1px solid red"
      borderBottom={{
        base: "1px dashed #0BC5EA",
        md: "1px dashed #0BC5EA",
        lg: "1px dashed #0BC5EA",
      }}
    >
      <Heading
        fontSize={{ base: "20px", md: "20px", lg: "30px" }}
        color={darkMode ? "#F0F3F7" : "black"}
      >
        Contact Me
      </Heading>

      <Flex
        w="80%"
        m="auto"
        mt={{ base: "20px", md: "40px", lg: "40px" }}
        justifyContent={"space-between"}
        alignItems="center"
        flexDirection={{ base: "column", md: "row", lg: "row" }}
        rowGap={"20px"}
      >
        <Image
          src="Contact-Us-Vector.jpg"
          w={{ base: "100%", md: "45%", lg: "45%" }}
        />
        <Box w={{ base: "100%", md: "42%", lg: "42%" }}>
          <form
            onSubmit={handleMessage}
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "10px",
              width: "98%",
              margin: "auto",
            }}
          >
            <Input
              onChange={handleChange}
              name="name"
              value={message.name}
              placeholder="Your Name"
              shadow={"md"}
              fontSize={"sm"}
              variant={"unstyled"}
              p="7px 10px"
              border={{
                base: "1px dashed violet",
                md: "1px dashed violet",
                lg: "1px dashed violet",
              }}
            />
            <Input
              onChange={handleChange}
              name="email"
              value={message.email}
              placeholder="Your Email"
              shadow={"md"}
              fontSize={"sm"}
              variant={"unstyled"}
              type="email"
              p="7px 10px"
              border={{
                base: "1px dashed violet",
                md: "1px dashed violet",
                lg: "1px dashed violet",
              }}
            />
            <Textarea
              onChange={handleChange}
              name="content"
              value={message.content}
              variant={"unstyled"}
              shadow={"md"}
              fontSize={"sm"}
              p="7px 10px"
              placeholder="Your Message"
              h="150px"
              // focusBorderColor="none"
              border={{
                base: "1px dashed violet",
                md: "1px dashed violet",
                lg: "1px dashed violet",
              }}
            />
            <Button
              type="submit"
              // w="fit-content"
              size="sm"
              colorScheme="purple"
              shadow={"md"}
            >
              Send
            </Button>
          </form>
        </Box>
      </Flex>
      <Box
        w="90%"
        // border="1px dashed violet"
        p="10px"
        borderRadius="7px"
        // shadow="md"
        m="auto"
        mt="40px"
      >
        <Flex
          justifyContent={"space-between"}
          mt="10px"
          flexWrap="wrap"
          color={darkMode ? "#F0F3F7" : "grey.400"}
        >
          <Flex
            w="fit-content"
            gap={{ base: "0px", md: "10px", lg: "10px" }}
            alignItems={"center"}
            color="grey.400"
            fontSize={"sm"}
            fontWeight={"500"}
            cursor={"pointer"}
            // border="1px solid black"
          >
            <Image
              src={connections[0].image}
              w={"24px"}
              onMouseOver={() => handleHover(connections[0].title)}
              onMouseOut={handleMouseOut}
            />
            <Text
              display={{ base: "none", md: "block", lg: "block" }}
              onClick={() => handleCopyClick(connections[0].title)}
            >
              {copied.email ? "Copied!" : connections[0].title}
            </Text>
            <Text
              display={{
                base: hide.email ? "block" : "none",
                md: "none",
                lg: "none",
              }}
              onMouseOver={() => handleHover(connections[0].title)}
              onMouseOut={handleMouseOut}
              onClick={() => handleCopyClick(connections[0].title)}
            >
              {copied.email ? "Copied!" : connections[0].title}
            </Text>
          </Flex>

          <Flex
            w="fit-content"
            gap={{ base: "0px", md: "10px", lg: "10px" }}
            alignItems={"center"}
            color="grey.400"
            fontSize={"sm"}
            fontWeight={"500"}
            cursor={"pointer"}
            // border="1px solid black"
            pl={"2px"}
          >
            <Image
              src={connections[1].image}
              w={"18px"}
              onMouseOver={() => handleHover(connections[1].title)}
              onMouseOut={handleMouseOut}
            />
            <Text
              display={{ base: "none", md: "block", lg: "block" }}
              onClick={() => handleCopyClick(connections[1].title)}
            >
              {copied.number ? "Copied" : connections[1].title}
            </Text>
            <Text
              display={{
                base: hide.number ? "block" : "none",
                md: "none",
                lg: "none",
              }}
              onMouseOver={() => handleHover(connections[1].title)}
              onMouseOut={handleMouseOut}
              onClick={() => handleCopyClick(connections[1].title)}
            >
              {copied.number ? "Copied" : connections[1].title}
            </Text>
          </Flex>

          {connections.map((elem, i) => (
            <Link
              key={i}
              href={elem.redirect && elem.redirect}
              target={elem.redirect && "_blank"}
              w="fit-content"
              display={i == 0 || i == 1 ? "none" : "block"}
            >
              <Flex
                w="fit-content"
                gap="10px"
                alignItems={"center"}
                color={darkMode ? "#F0F3F7" : "grey.400"}
                fontSize={"sm"}
                fontWeight={"500"}
                // border="1px solid black"
              >
                <Image src={elem.image} w={"24px"} />
                <Text display={{ base: "none", md: "block", lg: "block" }}>
                  {elem.title}{" "}
                </Text>
              </Flex>
            </Link>
          ))}
        </Flex>
      </Box>
    </Box>
  );
};

export default Contact;
