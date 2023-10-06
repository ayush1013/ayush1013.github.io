import {
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  Link,
  Grid,
  Image,
  Input,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useEffect, useRef, useState } from "react";
import Home from "../Pages/Home";
import About from "../Pages/About";
import Skills from "../Pages/Skills";
import Projects from "../Pages/Projects";
import Contact from "../Pages/Contact";
import GitStats from "../Pages/GitStats";

const initialMode = JSON.parse(localStorage.getItem("darkMode")) || false;

const Navbar = () => {
  const [section, setSection] = useState("");
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();
  const [darkMode, setDarkMode] = useState(initialMode);

  const handleDarkMode = () => {
    setDarkMode(!darkMode);
    // window.location.reload();
  };

  useEffect(() => {
    localStorage.setItem("darkMode", JSON.stringify(darkMode));
    
  }, [darkMode]);

  const handleSection = (sec) => {
    setSection(sec);
    onClose();
  };

  return (
    <Box position="relative" bgColor={darkMode?"#03182D":"white"} >
      <Flex
        h={{ base: "50px", md: "60px", lg: "65px" }}
        w="100%"
        alignItems={"center"}
        pl={{ base: "10px", md: "40px", lg: "80px" }}
        pr={{ base: "10px", md: "40px", lg: "80px" }}
        bgColor={darkMode?"#13446F":"white"} 
        boxShadow="rgba(0, 0, 0, 0.16) 0px 1px 4px"
        zIndex={10}
        position={"fixed"}
        top="0"
        justifyContent={"space-between"}
      >
        <a style={{ textDecoration: "none" }} href="#home">
          <Flex
            alignItems={"center"}
            letterSpacing={"5px"}
            href="#home"
            fontWeight="500"
            fontSize={{ base: "md", md: "sm", lg: "lg" }}
            cursor="pointer"
          >
            <Text p="1px 2px 1px 6px" bgColor={"#0BC5EA"} color="white">
              AYUSH
            </Text>

            <Text
              p="0px 2px 0px 8px"
              border="1px solid #0BC5EA"
              borderLeft={"none"}
              color="#0BC5EA"
            >
              VERMA
            </Text>
          </Flex>
        </a>
        <Flex
          display={{ base: "none", md: "flex", lg: "flex" }}
          justifyContent={"space-between"}
          ml={{ base: "10%", md: "10%", lg: "16%" }}
          cursor={"pointer"}
          w={{ base: "40%", md: "55%", lg: "55%" }}
          fontWeight="500"
          // border="1px solid black"
          alignItems={"center"}
          fontSize={{ base: "40%", md: "13px", lg: "15px" }}
        >
          <Link
            href="#home"
            color={section === "sec1" ? "#0BC5EA" : "#081822"}
            onClick={() => handleSection("sec1")}
          >
            Home
          </Link>
          <Link
            href="#about"
            color={section === "sec2" ? "#0BC5EA" : "#081822"}
            onClick={() => handleSection("sec2")}
          >
            About
          </Link>
          <Link
            href="#skills"
            color={section === "sec3" ? "#0BC5EA" : "#081822"}
            onClick={() => handleSection("sec3")}
          >
            Skills
          </Link>
          <Link
            href="#projects"
            color={section === "sec4" ? "#0BC5EA" : "#081822"}
            onClick={() => handleSection("sec4")}
          >
            Projects
          </Link>
          <Link
            href="#github"
            color={section === "sec6" ? "#0BC5EA" : "#081822"}
            onClick={() => handleSection("sec6")}
          >
            Github
          </Link>
          <Link
            href="#contact"
            color={section === "sec5" ? "#0BC5EA" : "#081822"}
            onClick={() => handleSection("sec5")}
          >
            Contact
          </Link>
          <Link to="https://drive.google.com/u/0/uc?id=1wmufWjrLaIsUqdE_0nBDweoFlVvtq_as&export=download">
            <Button
              p="0px"
              m="0px"
              color="#081822"
              fontSize={{ base: "40%", md: "13px", lg: "15px" }}
              variant={"none"}
              onClick={() =>
                window.open(
                  "https://drive.google.com/file/d/1wmufWjrLaIsUqdE_0nBDweoFlVvtq_as/view?usp=sharing",
                  "_blank",
                  "noreferrer"
                )
              }
            >
              Resume
            </Button>
          </Link>
        </Flex>

        <Box
          ref={btnRef}
          onClick={onOpen}
          display={{ base: "box", md: "none", lg: "none" }}
          ml="5px"
        >
          <Image src="icons8-menu-50.png" w="26px" />
        </Box>

        <Drawer
          isOpen={isOpen}
          placement="right"
          onClose={onClose}
          finalFocusRef={btnRef}
        >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />

            <DrawerBody>
              <Flex
                display={{ base: "flex", md: "none", lg: "none" }}
                flexDirection="column"
                justifyContent={"space-between"}
                ml={{ base: "10%", md: "10%", lg: "16%" }}
                mt="50px"
                cursor={"pointer"}
                fontWeight="500"
                // border="1px solid black"
                alignItems={"left"}
                fontSize={{ base: "18px", md: "14px", lg: "md" }}
                gap="50px"
              >
                <Link
                  href="#home"
                  color={section === "sec1" ? (darkMode? "#0BC5EA":"#F0F3F7") : "#081822"}
                  onClick={() => handleSection("sec1")}
                >
                  Home
                </Link>
                <Link
                  href="#about"
                  color={section === "sec2" ? "#0BC5EA" : "#081822"}
                  onClick={() => handleSection("sec2")}
                >
                  About
                </Link>
                <Link
                  href="#skills"
                  color={section === "sec3" ? "#0BC5EA" : "#081822"}
                  onClick={() => handleSection("sec3")}
                >
                  Skills
                </Link>
                <Link
                  href="#projects"
                  color={section === "sec4" ? "#0BC5EA" : "#081822"}
                  onClick={() => handleSection("sec4")}
                >
                  Projects
                </Link>
                <Link
                  href="#github"
                  color={section === "sec6" ? "#0BC5EA" : "#081822"}
                  onClick={() => handleSection("sec6")}
                >
                  Github
                </Link>
                <Link
                  href="#contact"
                  color={section === "sec5" ? "#0BC5EA" : "#081822"}
                  onClick={() => handleSection("sec5")}
                >
                  Contact
                </Link>
              </Flex>
            </DrawerBody>

            <DrawerFooter>
              <Link to="https://drive.google.com/u/0/uc?id=1wmufWjrLaIsUqdE_0nBDweoFlVvtq_as&export=download">
                <Button
                  w="100%"
                  size="sm"
                  colorScheme="cyan"
                  shadow={"md"}
                  onClick={() =>
                    window.open(
                      "https://drive.google.com/file/d/1wmufWjrLaIsUqdE_0nBDweoFlVvtq_as/view?usp=sharing",
                      "_blank",
                      "noreferrer"
                    )
                  }
                >
                  RESUME →
                </Button>
              </Link>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </Flex>

      <Box>
        <section id="home">
          <Home darkMode={darkMode} />
        </section>
        <section id="about">
          <About darkMode={darkMode} />
        </section>
        <section id="skills">
          <Skills darkMode={darkMode} />
        </section>
        <section id="projects">
          <Projects darkMode={darkMode} />
        </section>
        <section id="github">
          <GitStats darkMode={darkMode} />
        </section>
        <section id="contact">
          <Contact darkMode={darkMode} />
        </section>
      </Box>

      <Box
        p="2px"
        borderRadius="50%"
        bgColor={darkMode ? "cyan.400" : "gray.800"}
        cursor="pointer"
        position={"fixed"}
        zIndex={"10"}
        top={{ base: "60px", md: "80px", lg: "90px" }}
        right={{ base: "10px", md: "20px", lg: "20px" }}
        onClick={handleDarkMode}
      >
        <Image
          w={{ base: "28px", md: "35px", lg: "35px" }}
          src={darkMode ? "icons8-sun-96.png" : "icons8-moon-96.png"}
        />
      </Box>
    </Box>
  );
};

export default Navbar;
