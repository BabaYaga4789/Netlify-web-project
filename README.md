#Tutorial 3

Date Created: 16-02-2023
Last Modified Date: 16-02-2023
Netlify URL: https://extraordinary-profiterole-a72144.netlify.app/
Gitlab URL: https://git.cs.dal.ca/shubhamp/csci-5709.git
GitHub URL: https://github.com/BabaYaga4789/Netlify-web-project.git

#Authors 

Shubham Patel (sh739846@dal.ca)


### Installing

1) First install nodejs in your local machine
2) Check the version of nodejs
3) Run the command "npm install" to install the nodejs
4) Run the command "npm start" to start the project.


## Build with 

*[React](https://reactjs.org/)- Javascript library
*[Typescript](https://www.typescriptlang.org/) -  Javascript enviroment
*[Chakra UI](https://chakra-ui.com/)- UI library for React


##Sources used

### Profile.tsx

Lines 29-43


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

The code above was created by adapting the code in https://pro.chakra-ui.com/components/application/authentication as shown below:

<Container maxW="lg" py={{ base: '12', md: '24' }} px={{ base: '0', sm: '8' }}>
    <Stack spacing="8">
      <Stack spacing="6">
        <Logo />
        <Stack spacing={{ base: '2', md: '3' }} textAlign="center">
          <Heading size={{ base: 'xs', md: 'sm' }}>Log in to your account</Heading>
          <HStack spacing="1" justify="center">
            <Text color="muted">Don't have an account?</Text>
            <Button variant="link" colorScheme="blue">
              Sign up
            </Button>
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

- The code in link was used for the CSS purpose to create a box inside a container.
- The code was modified by implementing it into the container and the information of the register user is shown inside the box.
