import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";

interface CityProps {
    name: string;
    desc: string;
    banner: string;
    flag: string;
}
export default function City({name, desc, banner, flag}: CityProps) {
    return (
        <Box borderRadius="4px" overflow="hidden">
            <Image src={banner} h="170px" w="100%"/>
            <Flex p="6" align="center" justify="space-between" bg="white" border="1px" borderColor="yellow.300" borderTop="0">
                <Flex direction="column">
                    <Heading fontSize="xl" fontWeight="500">
                        {name}
                    </Heading>
                    <Text mt="3" fontSize="md" color="gray.500" fontWeight="500">{desc}</Text>
                </Flex>
                <Image src={flag}/>
            </Flex>
        </Box>
    );
}