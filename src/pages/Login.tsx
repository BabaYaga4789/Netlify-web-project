import { Flex, Heading, Container, Stack, HStack, FormControl, FormLabel, Input, FormErrorMessage, Button, Divider, Box } from "@chakra-ui/react";
import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import "../css/Registration.css";

export default function Login() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isEmailValid, setIsEmailValid] = useState(true);
  const [isPasswordValid, setIsPasswordValid] = useState(true);
  const navigate = useNavigate();
  const emailRegex = "testemail@dal.ca";
  const passwordRegex = "Test@123";
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (emailRegex === email || passwordRegex === password) {
      setIsEmailValid(true);
      setIsPasswordValid(true);
      fetch("https://express-t4.onrender.com/api/login", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          email: email,
          password: password
        })
      }).then(() => {
        navigate("/LoginProfile");
      }).catch((err) => {
        console.error(err);
      });
    }
    else {
      setIsEmailValid(false);
      setIsPasswordValid(false);
    }
  }

  return (
    <><Flex
      as="h1"
      color="gray.700"
      shadow={"lg"}
      bg={"blue.200"}
      fontWeight="bold"
      textAlign="center"
      borderBottom="1px solid"
      borderBottomColor="gray.300"
      py={4}
      justify="center"
    >
      <Heading p={"10px"} fontFamily={"heading"} fontSize={"5xl"}>
        Login
      </Heading>
    </Flex>
      <Flex>
        <Container maxW="lg" py={{ base: '12', md: '24' }} px={{ base: '0', sm: '8' }}>
          <Stack spacing="8">
            <Stack spacing="6">
              <Stack spacing={{ base: '2', md: '3' }} textAlign="center">
                <HStack spacing="1" justify="center">
                </HStack>
              </Stack>
            </Stack>
            <Box
              py={{ base: '0', sm: '8' }}
              px={{ base: '4', sm: '10' }}
              bg={{ base: 'transparent', sm: 'bg-surface' }}
              boxShadow={{ base: 'none', sm: 'md' }}
              borderRadius={{ base: 'none', sm: 'xl' }}
            >
              <Stack spacing="6">
                <Stack spacing="5">
                  <FormControl isInvalid={!isEmailValid}>
                    <FormLabel>Email</FormLabel>
                    <Input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    <FormErrorMessage>
                      Invalid Email, please enter a valid email address
                    </FormErrorMessage>
                  </FormControl>
                  <FormControl isInvalid={!isPasswordValid}>
                    <FormLabel>Password</FormLabel>
                    <Input id="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    <FormErrorMessage>
                      Invalid Password, please enter a valid password
                    </FormErrorMessage>
                  </FormControl>
                </Stack>
                <Stack spacing="6">
                  <Button bgColor={"blue.200"} variant="solid" onClick={handleSubmit}>Submit</Button>
                  <Divider />
                </Stack>
              </Stack>
            </Box>
          </Stack>
        </Container>
      </Flex></>
  );
}