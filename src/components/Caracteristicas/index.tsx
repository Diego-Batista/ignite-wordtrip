import { Flex, Grid, GridItem, Image, Text,  } from "@chakra-ui/react";
import Caracteristica from "./Caracteristica";

interface CaracteristicaProps {
    icon: string;
    text: string;
}

export default function Caracteristicas() {

    return (
        <Grid
            templateColumns={["1fr 1fr","1fr 1fr","1fr 1fr","repeat(5, 1fr)"]}
            w="100%"
            justifyContent="space-between"
            alignItems="center"
            mt={["10", "32"]}
            mx="auto"
            maxW="1160px"
            flexWrap="wrap"
            gap={[1, 5]}
        >
            <GridItem>
                <Caracteristica icon="Nightlife" text="vida notruna"/>
            </GridItem>
            <GridItem>
                <Caracteristica icon="Beach" text="praia"/>
            </GridItem>
            <GridItem>
                <Caracteristica icon="Modern" text="moderno"/>
            </GridItem>
            <GridItem>
                <Caracteristica icon="Classic" text="clássico"/>
            </GridItem>
            <GridItem colSpan={[2, 2, 2, 1]}>
                <Caracteristica icon="More" text="e mais..."/>
            </GridItem>
        </Grid>
    );
}