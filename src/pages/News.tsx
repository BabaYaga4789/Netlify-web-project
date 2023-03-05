import {
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Flex,
  Heading,
  Image,
  Link,
  Spacer,
  Stack,
  Text,
  useToast,
  VStack,
} from "@chakra-ui/react";

const today = new Date();

export default function News() {
  const toast = useToast();

  const onClick = (event: any) => {
    event.preventDefault();
    toast({
      position: "bottom",
      render: () => (
        <Box color="white" p={3} bg="teal.500">
          Subscribed successfully!
        </Box>
      ),
    });
  };

  return (
    <>
      <Flex
        as="nav"
        bg={"teal.400"}
        boxShadow={"md"}
        justify="space-between"
        mx={"auto"}
      >
        <Heading p={"20px"} fontFamily={"heading"} fontSize="24" color={"white"}>
          CineScope
        </Heading>
        <Box p={"30px"} display="flex" flexDirection={"row"}>
          <Link href="#" color="white" mx="2">
            Home
          </Link>
          <Link href="#" color="white" mx="2">
            Watchlist
          </Link>
          <Link href="#" color="white" mx={"2"}>
            CLubs
          </Link>
          <Link href="#" color="white" mx={"2"}>
            News and updates
          </Link>
          <Spacer />
          <Link href="#" color="white" mx={"2"}>
            My profile
          </Link>
          <Spacer />
          <Link href="#" color="white">
            Search
          </Link>
        </Box>
      </Flex>
      <Flex as="nav" justify="space-between" paddingBottom={"4"}>
        <Box>
          <Heading
            p={"10px"}
            fontFamily={"heading"}
            color="teal.400"
            fontSize="5xl"
          >
            Top news
          </Heading>
        </Box>
        <Box p={"30px"} display="flex" flexDirection={"row"}>
          <Button
            colorScheme={"blue"}
            size="lg"
            variant="ghost"
            onClick={onClick}
          >
            Subscribe
          </Button>
        </Box>
      </Flex>
      <Spacer />
      <Flex
        pl="20px"
        pr={"20px"}
        display="flex"
        flexDirection={"column"}
      >

        <Box
         py={{ base: '0', sm: '8' }}
         px={{ base: '4', sm: '10' }}
         bg={{ base: 'transparent', sm: 'bg-surface' }}
         boxShadow={{ base: 'none', sm: 'md' }}
         borderRadius={{ base: 'none', sm: 'xl' }}
         >
          <Card>
              <Heading fontSize={"3xl"} fontStyle="bold" textAlign="left">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              </Heading>
            
            <Image
              objectFit={"cover"}
              maxW={{ base: "100%", sm: "300px" }}
              src="https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60"
              alt="image"
            />
            <Stack>
              <CardBody>
                <Text py="2">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero
                  fuga, non dolorem commodi eum sapiente accusantium dolorum
                  error nulla excepturi. Maxime corrupti et quo, aspernatur
                  fugiat quisquam nostrum placeat nobis! Lorem ipsum dolor sit
                  amet consectetur adipisicing elit. Vero fuga, non dolorem
                  commodi eum sapiente accusantium dolorum error nulla
                  excepturi. Maxime corrupti et quo, aspernatur fugiat quisquam
                  nostrum placeat nobis! Lorem ipsum dolor sit amet consectetur
                  adipisicing elit. Vero fuga, non dolorem commodi eum sapiente
                  accusantium dolorum error nulla excepturi. Maxime corrupti et
                  quo, aspernatur fugiat quisquam nostrum placeat nobis!
                </Text>
              </CardBody>

              <CardFooter>
                <Text>Today is {today.toLocaleDateString()}</Text>
              </CardFooter>
            </Stack>
          </Card>
        </Box>
  
        <Box
         py={{ base: '0', sm: '8' }}
         px={{ base: '4', sm: '10' }}
         bg={{ base: 'transparent', sm: 'bg-surface' }}
         boxShadow={{ base: 'none', sm: 'md' }}
         borderRadius={{ base: 'none', sm: 'xl' }} 
        pt={"10px"}>
          <Card
            border={"1px solid "}
            borderColor={"gray.200"}
            direction={{ base: "column" }}
            overflow="hidden"
            variant="outline"
          >
            <CardHeader>
              <Heading fontSize={"3xl"} fontStyle="bold" textAlign="left">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              </Heading>
            </CardHeader>
            <Image
              objectFit={"cover"}
              maxW={{ base: "100%", sm: "300px" }}
              src="https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60"
              alt="image"
            />
            <Stack>
              <CardBody>
                <Text py="2">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero
                  fuga, non dolorem commodi eum sapiente accusantium dolorum
                  error nulla excepturi. Maxime corrupti et quo, aspernatur
                  fugiat quisquam nostrum placeat nobis! Lorem ipsum dolor sit
                  amet consectetur adipisicing elit. Vero fuga, non dolorem
                  commodi eum sapiente accusantium dolorum error nulla
                  excepturi. Maxime corrupti et quo, aspernatur fugiat quisquam
                  nostrum placeat nobis! Lorem ipsum dolor sit amet consectetur
                  adipisicing elit. Vero fuga, non dolorem commodi eum sapiente
                  accusantium dolorum error nulla excepturi. Maxime corrupti et
                  quo, aspernatur fugiat quisquam nostrum placeat nobis!
                </Text>
              </CardBody>

              <CardFooter>
                <Text>Today is {today.toLocaleDateString()}</Text>
              </CardFooter>
            </Stack>
          </Card>
        </Box>
        
      </Flex>
    </>
  );
}
