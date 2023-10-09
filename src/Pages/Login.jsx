import { useContext } from "react";
import { AuthContext } from "../Context/AuthContext";
import { Navigate } from "react-router-dom";
import { Box, Button, Heading, Input } from "@chakra-ui/react";

function Login() {
  const { isAuth, toggleAuth } = useContext(AuthContext);
  const [data, setData] = useState({ email: "", pass: "" });

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleLogin = () => {
    console.log(data);
    if (data.email !== "" && data.pass !== "") {
      if (
        data.email !== "ayush98277@gmail.com" &&
        data.pass !== "Avenger$AV098123"
      ) {
        
      }
    }
  };

  if (isAuth) {
    return <Navigate to="/products" />;
  }

  return (
    <Box>
      <Heading>Login</Heading>
      <Input
        type="email"
        value={data.email}
        name="email"
        onChange={handleChange}
      />
      <Input
        type="password"
        value={data.password}
        name="pass"
        onChange={handleChange}
      />
      <Button onClick={handleLogin}>LOGIN</Button>
    </Box>
  );
}

export default Login;
