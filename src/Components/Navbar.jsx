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
import React, { useRef, useState } from "react";
import Home from "../Pages/Home";
import About from "../Pages/About";
import Skills from "../Pages/Skills";
import Projects from "../Pages/Projects";
import Contact from "../Pages/Contact";
import GitStats from "../Pages/GitStats";

const Navbar = () => {
  const [section, setSection] = useState("");
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();

  const handleSection = (sec) => {
    setSection(sec);
    onClose();
  };

  return (
    <Box position="relative">
      <Flex
        h={{ base: "50px", md: "60px", lg: "65px" }}
        w="100%"
        alignItems={"center"}
        pl={{ base: "10px", md: "40px", lg: "80px" }}
        pr={{ base: "10px", md: "40px", lg: "80px" }}
        bgColor="white"
        boxShadow="rgba(0, 0, 0, 0.16) 0px 1px 4px"
        zIndex={10}
        position={"fixed"}
        top="0"
        justifyContent={"space-between"}
      >
        <Link href="#home" fontWeight="500" fontSize={"lg"} color="#081822" >
          Ayush Verma
        </Link>
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
            color={section === "sec1" ? "red" : "#081822"}
            onClick={() => handleSection("sec1")}
          >
            Home
          </Link>
          <Link
            href="#about"
            color={section === "sec2" ? "red" : "#081822"}
            onClick={() => handleSection("sec2")}
          >
            About
          </Link>
          <Link
            href="#skills"
            color={section === "sec3" ? "red" : "#081822"}
            onClick={() => handleSection("sec3")}
          >
            Skills
          </Link>
          <Link
            href="#projects"
            color={section === "sec4" ? "red" : "#081822"}
            onClick={() => handleSection("sec4")}
          >
            Projects
          </Link>
          <Link
            href="#github"
            color={section === "sec6" ? "red" : "#081822"}
            onClick={() => handleSection("sec6")}
          >
            Github
          </Link>
          <Link
            href="#contact"
            color={section === "sec5" ? "red" : "#081822"}
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
          <Image src="icons8-menu-50.png" w="32px" />
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
                cursor={"pointer"}
                fontWeight="500"
                // border="1px solid black"
                alignItems={"left"}
                fontSize={{ base: "18px", md: "14px", lg: "md" }}
                gap="50px"
              >
                <Link
                  href="#home"
                  color={section === "sec1" ? "teal" : "black"}
                  onClick={() => handleSection("sec1")}
                >
                  Home
                </Link>
                <Link
                  href="#about"
                  color={section === "sec2" ? "teal" : "black"}
                  onClick={() => handleSection("sec2")}
                >
                  About
                </Link>
                <Link
                  href="#skills"
                  color={section === "sec3" ? "teal" : "black"}
                  onClick={() => handleSection("sec3")}
                >
                  Skills
                </Link>
                <Link
                  href="#projects"
                  color={section === "sec4" ? "teal" : "black"}
                  onClick={() => handleSection("sec4")}
                >
                  Projects
                </Link>
                <Link
                  href="#contact"
                  color={section === "sec5" ? "teal" : "black"}
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
          <Home />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="skills">
          <Skills />
        </section>
        <section id="projects">
          <Projects />
        </section>
        <section id="github">
          <GitStats />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </Box>
    </Box>
  );
};

export default Navbar;
