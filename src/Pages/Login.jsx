import { useContext } from "react";
import { AuthContext } from "../Context/AuthContext";
import { Navigate } from "react-router-dom";
import { Box, Button, Heading, Input, useToast } from "@chakra-ui/react";
import { useState } from "react";

function Login() {
  const { isAuth, toggleAuth } = useContext(AuthContext);
  const [data, setData] = useState({ email: "", pass: "" });
  const toast = useToast();

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleLogin = () => {
    console.log(data);
    if (data.email !== "" && data.pass !== "") {
      if (
        data.email === "ayush98277@gmail.com" &&
        data.pass === "Avenger$AV098123"
      ) {
        toast({
          title: "Loged in successfully",
          status: "success",
          duration: 2000,
          position: "top",
          isClosable: true,
        });
        toggleAuth();
      } else {
        toast({
          title: "Wrong Email or Password please try again",
          status: "error",
          duration: 2000,
          position: "top",
          isClosable: true,
        });
      }
    } else {
      toast({
        title: "Please fill all the required fields.",
        status: "info",
        duration: 2000,
        position: "top",
        isClosable: true,
      });
    }
  };

  if (isAuth) {
    return <Navigate to="/messages" />;
  }

  return (
    <Box
      bgColor={"#0BC5EA"}
      w="400px"
      m="auto"
      p="20px"
      shadow={"lg"}
      borderRadius="10px"
      mt="100px"
    >
      <Heading>Login</Heading>
      <Box mt="20px">
        <Input
          type="email"
          value={data.email}
          name="email"
          onChange={handleChange}
        />
        <Input
          mt="20px"
          type="password"
          value={data.password}
          name="pass"
          onChange={handleChange}
        />
        <Button onClick={handleLogin} mt="20px" colorScheme="whiteAlpha">
          LOGIN
        </Button>
      </Box>
    </Box>
  );
}

export default Login;
