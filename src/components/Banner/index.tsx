import { Flex, Heading, Image, Text } from "@chakra-ui/react";

export default function Banner() {
    return (
        <Flex 
            w="100¨%" 
            h={["163px", "250px", "335px"]} 
            bgImage="/banner.jpg" 
            bgRepeat="no-repeat" 
            bgSize="cover" 
            bgPosition={["100% 20%", "100% 20%", "100% 30%"]}
        >
            <Flex w="100%" mx="auto" justify={["center", "space-between"]} align="center" px={["4", "10", "15", "20", "36"]}>
                <div>
                    <Heading color="gray.100" fontWeight="500" lineHeight={["30px", "35px", "40px", "54px"]} fontSize={["xl", "2l", "2xl", "2xl", "4xl"]} mb="5">
                        5 Continentes,<br/>
                        infinitas possibilidades.
                    </Heading>
                    <Text maxW={["100%", "100%", "100%", "550px",]} color="gray.300" fontSize={["0.8rem", "xl"]} fontWeight="400" lineHeight={["21px", "30px"]}>
                        Chegou a hora de tirar do papel a viagem que você sempre sonhou. 
                    </Text>
                </div>

                <Image
                    src="/Airplane.svg"
                    alt="Avião amarelo voando com nuvens ao redor"
                    w={["300px", "300px", "300px", "430px"]}
                    display={["none", "none", "block"]}
                    transform="translateY(50px)"
                    ml="8"
                />
            </Flex>
        </Flex>
    );
}