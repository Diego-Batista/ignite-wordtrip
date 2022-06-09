import { Flex, Heading, Image, Text } from "@chakra-ui/react";
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Autoplay, Pagination, Navigation } from "swiper";
import Link from "next/link";

export default function Slider() {
    return (
        <Flex w="100%" maxW="1240px" mx="auto" mb={["5", "10"]} h={["250px", "450px"]}>
            <Swiper
                slidesPerView={1}
                pagination={{clickable: true}} 
                modules={[Autoplay, Pagination, Navigation]}
                navigation={true}
                autoplay={{
                    delay: 4000,
                    disableOnInteraction: false,
                }}
                style={{width: '100%', flex: '1'}}
            >
                <SwiperSlide>
                    <Flex w="100%" h="100%" align="center" justify="center" direction="column" bgImage="url(/europe.png)" bgRepeat="no-repeat" bgSize="cover" textAlign="center">
                        <Link href="/continent/europe">
                            <a>
                                <Heading fontSize={["3xl", "4xl", "5xl"]} color="gray.100" fontWeight="bold" >Europa</Heading>
                                <Text fontWeight="bold" color="gray.300" fontSize={["0.8rem", "1xl", "3xl"]} mt={["2", "4"]}>O continente mais antigo.</Text>
                            </a>
                        </Link>
                    </Flex>
                </SwiperSlide>
                <SwiperSlide>
                    <Flex w="100%" h="100%" align="center" justify="center" direction="column" bgImage="url(/europe.png)" bgRepeat="no-repeat" bgSize="cover" textAlign="center">
                        <Link href="/continent/europe">
                            <a>
                                <Heading fontSize={["3xl", "4xl", "5xl"]} color="gray.100" fontWeight="bold" >Europa</Heading>
                                <Text fontWeight="bold" color="gray.300" fontSize={["0.8rem", "1xl", "3xl"]} mt={["2", "4"]}>O continente mais antigo.</Text>
                            </a>
                        </Link>
                    </Flex>
                </SwiperSlide>
                <SwiperSlide>
                    <Flex w="100%" h="100%" align="center" justify="center" direction="column" bgImage="url(/europe.png)" bgRepeat="no-repeat" bgSize="cover" textAlign="center">
                        <Link href="/continent/europe">
                            <a>
                                <Heading fontSize={["3xl", "4xl", "5xl"]} color="gray.100" fontWeight="bold" >Europa</Heading>
                                <Text fontWeight="bold" color="gray.300" fontSize={["0.8rem", "1xl", "3xl"]} mt={["2", "4"]}>O continente mais antigo.</Text>
                            </a>
                        </Link>
                    </Flex>
                </SwiperSlide>
            </Swiper>
        </Flex>
    );
}