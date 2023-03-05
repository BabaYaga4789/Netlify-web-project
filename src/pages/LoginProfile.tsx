import { Box, Container, Flex, FormControl, FormLabel, Heading, HStack, Input, ListItem, Stack, UnorderedList } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

interface User {
  _id: string;
  name: string;
  picture: string;
}

export type UserListProps = {
    userId : any;
}

export default function ProfileListingPage() {
  const [users, setUsers] = useState<User[]>([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("https://express-t4.onrender.com/api/users")
      .then((res) => res.json())
      .then((data) => setUsers(data))
      .catch((err) => console.error(err));
  }, []);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const filteredUsers = users.filter((user) => {
    const fullName = `${user.name}`;
    return fullName.toLowerCase().includes(search.toLowerCase());
  });


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
          Profile
        </Heading>
      </Flex>
      <Flex>
        <Container maxW="lg" py={{ base: "12", md: "24" }} px={{ base: "0", sm: "8" }}>
          <Input placeholder="Search" value={search} onChange={handleSearch} />
          <Box
            py={{ base: "0", sm: "8" }}
            px={{ base: "4", sm: "10" }}
            bg={{ base: "transparent", sm: "bg-surface" }}
            boxShadow={{ base: "none", sm: "md" }}  
            borderRadius={{ base: "none", sm: "xl" }}
          >
            <UnorderedList>
              {filteredUsers.map((user) => (
                  <ListItem key={user._id} >
                      <Link to={`/userprofile/${user._id}`}>
                          <img src={user.picture} alt="" />
                          {`${user.name}`}
                      </Link>
                  </ListItem>
              ))}
            </UnorderedList>
          </Box>
        </Container>
      </Flex>
    </>
  );
}
