import { Flex, Heading, Container, UnorderedList, ListItem, Box } from "@chakra-ui/react";
import { useState, useEffect, Key } from "react";
import { useParams } from "react-router-dom";

interface UserProfile {
    _id: string;
    name: {
        first: string;
        last: string;
    };
    picture: string;
    email: string;
    phone: string;
    location: {
        city: string;
        state: string;
        country: string;
    };
}

export default function UserProfile() {
    const { userid } = useParams();
    console.log(userid);
    const [userProfile, setUserProfile] = useState([]);


    useEffect(() => {
        fetch(`https://express-t4.onrender.com/api/users/${userid}`)
            .then((res) => res.json())
            .then((data) => setUserProfile(data))
            .catch((err) => console.error(err));
    }, [userid]);

    if (!userProfile) {
        return (
            <Box textAlign="center" mt="10">
                <Heading size="lg">Loading user profile...</Heading>
            </Box>
        );
    }

    let data = Array.from(userProfile);
    return (
        <>
            <Flex
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
                    User Profile
                </Heading>
            </Flex>
            <Flex>
                <Container maxW="lg" py={{ base: '12', md: '24' }} px={{ base: '0', sm: '8' }}>
                    <Box
                        py={{ base: '0', sm: '8' }}
                        px={{ base: '4', sm: '10' }}
                        bg={{ base: 'transparent', sm: 'bg-surface' }}
                        boxShadow={{ base: 'none', sm: 'md' }}
                        borderRadius={{ base: 'none', sm: 'xl' }}
                    >
                        <UnorderedList>
                            <ListItem>
                                <Heading size="md">Name: {userProfile.name}</Heading>
                                <Heading size="md">Age: {userProfile.age}</Heading>
                                <Heading size="md">Gender: {userProfile.gender}</Heading>
                                <Heading size="md">Email: {userProfile.email}</Heading>
                                <Heading size="md">Phone: {userProfile.phone}</Heading>
                                <Heading size="md">Address: {userProfile.address}</Heading>
                            </ListItem>
                        </UnorderedList>
                    </Box>
                </Container>
            </Flex>
        </>
    );
} 
