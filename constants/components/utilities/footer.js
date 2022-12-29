import { Flex, SimpleGrid, HStack, Text, Box, VStack } from "@chakra-ui/react";
import { Link } from "react-scroll/modules";

import Image from "next/image";
import { useWindowSize } from "../../../custom_hooks";
import { MotionButton, MotionFlex } from "/constants/components/motion";
import { gcloading, bank, brain, agreement, mainlogo1 } from "/constants/data";
import { FaTwitter, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import { AiFillInstagram, AiFillFacebook } from "react-icons/ai";
import { BsArrowRightShort } from "react-icons/bs";
import { chakra } from "@chakra-ui/react";
import Router from "next/router";

export default function Footer() {
  const { height, width } = useWindowSize();

  return (
    <Flex
      w={"full"}
      id={"CON"}
      bg="#212121"
      flexDir={"column"}
      justifyContent={"center"}
      alignItems={"center"}
      position={"relative"}
    >
      <Flex
        flexDir={"column"}
        py={["10%", "3%", "3%", "3%", "3%", "3%"]}
        px={["5%", "3%", "3%", "3%", "3%", "3%"]}
        alignItems={"start"}
        justifyContent={"space-around"}
        width={[width, width - 14, width - 14, width - 14, width, width - 14]}
        bgColor={"#012400"}
      >
        <Flex
          w={"full"}
          flexDir={["column", "column", "row", "row", "row", "row"]}
          alignItems={"start"}
          alignSelf={"start"}
          justifyContent={"space-between"}
          alignContent={"space-between"}
          spacingY={"20px"}
        >
          <SimpleGrid
            pt={["60px"]}
            alignItems={"start"}
            alignSelf={"start"}
            justifyItems={"start"}
            spacingX={"50px"}
            spacingY={"30px"}
            columns={[1, 1, 1, 1, 3, 3]}
          >
            <VStack spacing={1} alignItems={"start"}>
              <Text
                fontSize={["15px", "12px", "12px", "12px", "20px", "20px"]}
                color={"white"}
                fontWeight={"black"}
                marginRight={"5"}
              >
                Our Office
              </Text>

              <Text
                fontSize={["12px", "12px", "12px", "12px", "13px", "13px"]}
                color={"white"}
                marginRight={"5"}
              >
                Midwaystraat 11 Almere, 1339NM, The Netherlands
              </Text>
            </VStack>
            <VStack spacing={1} alignItems={"start"}>
              <Text
                fontSize={["15px", "12px", "12px", "12px", "20px", "20px"]}
                color={"white"}
                fontWeight={"black"}
                marginRight={"5"}
              >
                You can reach us
              </Text>

              <Text
                fontSize={["12px", "12px", "12px", "12px", "13px", "13px"]}
                color={"white"}
                marginRight={"5"}
              >
                Email: info@amanahgroupholdings.com
              </Text>
              <Text
                fontSize={["12px", "12px", "12px", "12px", "13px", "13px"]}
                color={"white"}
                marginRight={"5"}
              >
                Mobile: +31 85107964
              </Text>
            </VStack>
            <VStack spacing={1} alignItems={"start"}>
              <Text
                fontSize={["15px", "12px", "12px", "12px", "20px", "20px"]}
                color={"white"}
                fontWeight={"black"}
                marginRight={"5"}
              >
                Office Hours
              </Text>

              <Text
                fontSize={["12px", "12px", "12px", "12px", "13px", "13px"]}
                color={"white"}
                marginRight={"5"}
              >
                Mon-Fri: 9am – 5pm
              </Text>
              <Text
                fontSize={["12px", "12px", "12px", "12px", "13px", "13px"]}
                color={"white"}
                marginRight={"5"}
              >
                Sat-Sun: Closed
              </Text>
            </VStack>
          </SimpleGrid>
        </Flex>
      </Flex>

      <chakra.p
        fontSize={["10px", "10px", "10px", "10px", "10px", "10px"]}
        color={"rgba(255, 255, 255, 0.8)"}
        fontFamily={"Poppins"}
        py={{
          base: "10px",
          sm: "10px",
        }}
      >
        © 2022 Amanah Group Holding, All Rights Reserved.
      </chakra.p>
    </Flex>
  );
}
