import { Grid, Heading } from "@chakra-ui/react";
import City from "./City";

export default function Cities() {
    return (
        <>
            <Heading fontWeight="500" fontSize={["2xl", "4xl"]} mb="10">
                Cidades +100
            </Heading>
            <Grid templateColumns={["1fr", "2fr", "repeat(3, 1fr)", "repeat(4, 1fr)"]} gap={["20px", "45px"]} alignItems="center" justifyContent="center" px={["30px", "0"]}>
                <City name="Londres" desc="Reino Unido" banner="/city.png" flag="/bandeira.png"/>
                <City name="Paris" desc="França" banner="/Paris.png" flag="/flagP.png"/>
                <City name="Roma" desc="Itália" banner="/roma.png" flag="/flagR.png"/>
                <City name="Praga" desc="República Tcheca" banner="/praga.png" flag="/flagPr.png"/>
                <City name="Amsterdã" desc="Holanda" banner="/amsterda.png" flag="/flagA.png"/>
            </Grid>
        </>
    )
}