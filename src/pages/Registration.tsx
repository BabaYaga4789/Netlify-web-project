import { Box, Button, chakra, Checkbox, Container, Divider, Flex, FormControl, FormErrorMessage, FormLabel, Heading, HStack, Input, Stack } from "@chakra-ui/react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../css/Registration.css";

export default function Registration() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");

    const [isFirstNameValid, setIsFirstNameValid] = useState(true);
    const [isLastNameValid, setIsLastNameValid] = useState(true);
    const [isEmailValid, setIsEmailValid] = useState(true);
    const [isPasswordValid, setIsPasswordValid] = useState(true);
    const [isConfirmPasswordValid, setIsConfirmPasswordValid] = useState(true);

    const navigate = useNavigate();



    const validateEmail = () =>{
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    const validatePassword = () =>{
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        return passwordRegex.test(password);
    }

    const validateConfirmPassword = () =>{
        return password === confirmPassword;
    }

    const validateFirstName = () =>{
        const nameRegex = /^[a-zA-Z]+$/;
        return nameRegex.test(firstName);
    }

    const validateLastName = () =>{
        const nameRegex = /^[a-zA-Z]+$/;
        return nameRegex.test(lastName);
    }

    const handleSubmit = (e: React.FormEvent) =>{
        e.preventDefault();
        if(validateFirstName()){
            setIsFirstNameValid(true);
        }else{
            setIsFirstNameValid(false);
        }
        if(validateLastName()){
            setIsLastNameValid(true);
        }else{
            setIsLastNameValid(false);
        }
        if(validateEmail()){
            setIsEmailValid(true);
        }else{
            setIsEmailValid(false);
        }
        if(validatePassword()){
            setIsPasswordValid(true);
        }else{
            setIsPasswordValid(false);
        }
        if(validateConfirmPassword()){
            setIsConfirmPasswordValid(true);
        }else{
            setIsConfirmPasswordValid(false);
        }
        if(validateFirstName() && validateLastName() && validateEmail() && validatePassword() && validateConfirmPassword()){
            navigate("/RegisterProfile", {state: {email: email, password: password, firstName: firstName, lastName: lastName}});
        }

    }
    

    return(
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
                Registration
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
            <FormControl isInvalid={!isFirstNameValid}>
              <FormLabel>First Name</FormLabel>
              <Input id="firstname" type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
              <FormErrorMessage>
                Invalid First Name, please enter only letters
              </FormErrorMessage>
            </FormControl>
            <FormControl isInvalid={!isLastNameValid}>
              <FormLabel>Last Name</FormLabel>
              <Input id="lastname" type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} />
              <FormErrorMessage>
                Invalid Last Name, please enter only letters
              </FormErrorMessage>
            </FormControl>
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
                    Invalid Password, must contain 8 characters, 1 uppercase, 1 lowercase, 1 number
                </FormErrorMessage>
            </FormControl>
            <FormControl isInvalid={!isConfirmPasswordValid}>
              <FormLabel>Confirm Password</FormLabel>
              <Input id="confirmPassword" type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)}/>
                <FormErrorMessage>
                    Passwords do not match
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
