import { Box, Container, Flex, FormControl, FormLabel, Heading, HStack, Stack } from "@chakra-ui/react";
import { useLocation } from "react-router-dom";

export default function Profile() {

    const {state} = useLocation();
    const {firstName, lastName, email} = state;
     

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
                Profile
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
                <FormControl>
                    <FormLabel>First Name</FormLabel>
                    <FormLabel>{firstName}</FormLabel>
                </FormControl>
                <FormControl>
                    <FormLabel>Last Name</FormLabel>
                    <FormLabel>{lastName}</FormLabel>
                </FormControl>
                <FormControl>
                    <FormLabel>Email</FormLabel>
                    <FormLabel>{email}</FormLabel>
                </FormControl>
            </Box>
            </Stack>
            </Container>
        </Flex></>    
    );
}