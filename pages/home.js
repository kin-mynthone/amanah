import {
  Box,
  Flex,
  IconButton,
  Text,
  Spacer,
  Image,
  VStack,
  HStack,
  Icon,
  SimpleGrid,
} from "@chakra-ui/react";
import React from "react";
import "@fontsource/baskervville";
import { MotionButton, MotionFlex } from "../constants/components/motion";
import { chakra } from "@chakra-ui/react";

import { startUpStore } from "../store/start_up";
import { useState, useEffect } from "react";

import { useWindowSize } from "../custom_hooks";

import "@fontsource/poppins";
export default function Home() {
  const setshowStartup = startUpStore((state) => state.set_show_startup);

  useEffect(() => {
    setshowStartup(false);
  });
  const { height, width } = useWindowSize();

  function CallToAction() {
    return (
      <Flex
        flexDir={["row", "column", "row", "row", "row", "row"]}
        height={["30vh", "30vh", "30vh", "30vh", "50vh", "50vh"]}
        bgColor={"#16365F"}
        alignItems={"end"}
        justifyContent={"center"}
      >
        <Image
          src={
            "https://images.unsplash.com/photo-1518005020951-eccb494ad742?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=755&q=80"
          }
          alt="amanah"
          objectFit={"cover"}
          boxSize={"full"}
        />{" "}
        <Box
          position={"absolute"}
          boxSize="full"
          objectFit="cover"
          left={0}
          bgColor={"rgba(51, 51, 51, 0.8) "}
        ></Box>
        <VStack position={"absolute"} px={"5%"} alignSelf={"center"}>
          <chakra.p
            fontSize={["14px", "14px", "15px", "15px", "20px", "25px"]}
            bgGradient="linear(to-b, #FFD600, #98742F)"
            bgClip="text"
            fontWeight={"bold"}
            whiteSpace={["normal", "normal", "pre-line", "pre-line"]}
            letterSpacing={{ base: "normal", md: "10px" }}
            fontFamily={"Poppins"}
          >
            {`THE INVESTMENT GROUP OF TOMORROW`}
          </chakra.p>
        </VStack>
      </Flex>
    );
  }

  function AmanahGroup() {
    return (
      <Flex
        flexDir={["column", "column", "row", "row", "row", "row"]}
        alignItems={"center"}
        w={width}
      >
        <Box
          px={["7%", "7%", "7%", "7%", "7%", "7%"]}
          pb={["7%", "7%", "7%", "7%", "7%", "7%"]}
          w={"full"}
        >
          <Flex
            alignItems={"center"}
            width={"full"}
            pt={["10", "10", "10", "10", "40", "40"]}
            justifyContent={"space-between"}
            flexDir={["column", "column", "row", "row", "row", "row"]}
          >
            <Box
              display={{
                base: "flex",
                md: "none",
              }}
              draggable={"false"}
              style={{
                userSelect: "none",
              }}
            >
              <Image
                w={"2xl"}
                src={
                  "https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx2aXN1YWwtc2VhcmNofDF8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                }
                alt="ms"
              />
            </Box>

            <VStack
              alignItems={"start"}
              id={"AG"}
              width={["100%", "100%", "62%", "62%", "40%", "40%"]}
            >
              <VStack
                spacing={["-5px", "-10px", "-10px", "-10px", "-10px", "-20px"]}
                alignItems={"start"}
              >
                <chakra.h3
                  fontFamily={"Poppins.black"}
                  fontSize={["28px", "40px", "40px", "40px", "45px", "60px"]}
                  fontWeight="black"
                  letterSpacing={{
                    base: "normal",
                    md: "normal",
                  }}
                  color="#E6B85E"
                  whiteSpace={["normal", "normal", "pre-line", "pre-line"]}
                >
                  {`Who we are`}
                </chakra.h3>
              </VStack>

              <VStack alignItems={"start"} spacing={"30px"}>
                <Text
                  mb={6}
                  fontSize={["14px", "14px", "15px", "15px", "15px", "15px"]}
                  color="#FFFFFF"
                  whiteSpace={["normal", "normal", "pre-line", "pre-line"]}
                  fontFamily={"Poppins"}
                >
                  {` Amanah Group Holdings B.V. is a European based, Shariah
                  compliant, Digital investment bank. The bank acts as the
                  investment branch of the first and oldest Islamic Government
                  Bank of the world, Al-Amanah Islamic investment Bank situated
                  in the Republic of the Philippines. 
                  
                  Amanah is the Arabic word for TRUST and more so fulfilling and upholding TRUST from
                  a moral viewpoint and a word we have institutionalized into
                  our system.`}
                </Text>
              </VStack>
            </VStack>
            <Spacer />
            <Box
              display={{
                base: "none",
                md: "flex",
              }}
              draggable={"false"}
              style={{
                userSelect: "none",
              }}
            >
              <Image
                w={"2xl"}
                src={
                  "https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx2aXN1YWwtc2VhcmNofDF8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                }
                alt="ms"
              />
            </Box>
          </Flex>

          <Flex
            alignItems={"center"}
            width={"full"}
            pt={["20", "60", "60", "60", "40", "40"]}
            justifyContent={"space-between"}
            flexDir={["column", "column", "row", "row", "row", "row"]}
          >
            <Box
              draggable={"false"}
              style={{
                userSelect: "none",
              }}
            >
              <Image
                w={"2xl"}
                src={
                  "https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx2aXN1YWwtc2VhcmNofDF8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                }
                alt="ms"
              />
            </Box>

            <Spacer />
            <VStack
              alignItems={"start"}
              width={["100%", "100%", "62%", "62%", "40%", "40%"]}
            >
              <VStack
                spacing={["-5px", "-10px", "-10px", "-10px", "-10px", "-20px"]}
                alignItems={"start"}
              >
                <chakra.h3
                  fontFamily={"Poppins.black"}
                  fontSize={["28px", "40px", "40px", "40px", "45px", "60px"]}
                  fontWeight="black"
                  letterSpacing={{
                    base: "normal",
                    md: "normal",
                  }}
                  color="#E6B85E"
                  whiteSpace={["normal", "normal", "pre-line", "pre-line"]}
                >
                  {`What we do`}
                </chakra.h3>
              </VStack>

              <VStack alignItems={"start"} spacing={"30px"}>
                <Text
                  mb={6}
                  fontSize={["14px", "14px", "15px", "15px", "15px", "15px"]}
                  color="#FFFFFF"
                  whiteSpace={["normal", "normal", "pre-line", "pre-line"]}
                  fontFamily={"Poppins"}
                >
                  {` Amanah Group has the aim to become the world’s largest Islamic bank and intends to access the western Market to achieve that. So far, there have been several attempts to roll out the Islamic banking model in the west without any significant success. Most efforts have only targeted specific components of the banking system.

We, Amanah Group Holding B.V., as the investment branch, offer a wide variety of financial services and products to ensure the sustainable future for banking.

Amanah Holding B.V. offers both traditional and Islamic financial services that follow the rule of law under Sharia compliance.`}
                </Text>
              </VStack>
            </VStack>
          </Flex>

          <Flex
            alignItems={"center"}
            width={"full"}
            pt={["20", "60", "60", "60", "40", "40"]}
            justifyContent={"space-between"}
            flexDir={["column", "column", "row", "row", "row", "row"]}
          >
            <VStack
              alignItems={"start"}
              width={["100%", "100%", "62%", "62%", "40%", "40%"]}
            >
              <VStack
                spacing={["-5px", "-10px", "-10px", "-10px", "-10px", "-20px"]}
                alignItems={"start"}
              >
                <chakra.h3
                  fontFamily={"Poppins.black"}
                  fontSize={["28px", "40px", "40px", "40px", "45px", "60px"]}
                  fontWeight="black"
                  letterSpacing={{
                    base: "normal",
                    md: "normal",
                  }}
                  color="#E6B85E"
                  whiteSpace={["normal", "normal", "pre-line", "pre-line"]}
                >
                  {`How we do it`}
                </chakra.h3>
              </VStack>

              <VStack alignItems={"start"} spacing={"30px"}>
                <Text
                  mb={6}
                  fontSize={["14px", "14px", "15px", "15px", "15px", "15px"]}
                  color="#FFFFFF"
                  whiteSpace={["normal", "normal", "pre-line", "pre-line"]}
                  fontFamily={"Poppins"}
                >
                  {` Unlike most financial service providers, we are a self-sufficient company with no aim of going public. We believe that the future belongs to going back to basic in the form of trader banking. To achieve this, we focus on Shariah compliant Digital Investment banking.

We furthermore differentiate our services by being active in three types of money; commodity money, fiat money and representative money. This supports our moral obligation as well as that of our clients to engage in ethical and sustainable banking.`}
                </Text>
              </VStack>
            </VStack>

            <Spacer />
            <VStack
              alignItems={"start"}
              width={["100%", "100%", "62%", "62%", "40%", "40%"]}
            >
              <VStack
                spacing={["-5px", "-10px", "-10px", "-10px", "-10px", "-20px"]}
                alignItems={"start"}
              >
                <chakra.h3
                  fontFamily={"Poppins.black"}
                  fontSize={["28px", "40px", "40px", "40px", "45px", "60px"]}
                  fontWeight="black"
                  letterSpacing={{
                    base: "normal",
                    md: "normal",
                  }}
                  color="#E6B85E"
                  whiteSpace={["normal", "normal", "pre-line", "pre-line"]}
                >
                  {`Who we cater to`}
                </chakra.h3>
              </VStack>

              <VStack alignItems={"start"} spacing={"30px"}>
                <Text
                  mb={6}
                  fontSize={["14px", "14px", "15px", "15px", "15px", "15px"]}
                  color="#FFFFFF"
                  whiteSpace={["normal", "normal", "pre-line", "pre-line"]}
                  fontFamily={"Poppins"}
                >
                  {`As a Digital Investment bank, we are not limited to geographical borders and therefore cater to the whole world. We have the expertise and knowledge in-house to serve private persons, businesses and Institutional clients.

Furthermore, we have experience investment in the following industries:
Financial Services, Agriculture, Technology, Real Estate, Infrastructure, Culinary & Commodity Markets.`}
                </Text>
              </VStack>
            </VStack>
          </Flex>
        </Box>
      </Flex>
    );
  }

  function Stats() {
    return (
      <Flex
        flexDir={["column", "column", "row", "row", "row", "row"]}
        alignItems={"center"}
        bgColor={"#414141"}
        w={width}
      >
        <Box
          px={["7%", "7%", "7%", "7%", "7%", "7%"]}
          pb={["7%", "7%", "7%", "7%", "7%", "7%"]}
          w={"full"}
        >
          <Flex
            alignItems={"start"}
            justifyContent={"center"}
            width={"full"}
            pt={["10", "10", "10", "10", "40", "40"]}
            flexDir={["column", "column", "row", "row", "row", "row"]}
          >
            <VStack
              alignItems={"center"}
              spacing={[10, 20, 20, 20, 20, 20]}
              width={"full"}
            >
              <VStack alignItems={"center"}>
                <chakra.h3
                  fontFamily={"Poppins.black"}
                  fontSize={["28px", "40px", "40px", "40px", "45px", "50px"]}
                  fontWeight="black"
                  letterSpacing={{
                    base: "normal",
                    md: "normal",
                  }}
                  id={"STAT"}
                  color="#E6B85E"
                  whiteSpace={["normal", "normal", "pre-line", "pre-line"]}
                >
                  {`THE NUMBERS ADD UP`}
                </chakra.h3>

                <Text
                  mb={6}
                  fontSize={["14px", "14px", "15px", "15px", "15px", "15px"]}
                  color="#FFFFFF"
                  whiteSpace={["normal", "normal", "pre-line", "pre-line"]}
                  fontFamily={"Poppins"}
                  textAlign={"center"}
                  letterSpacing={{ base: "normal", md: "5px" }}
                >
                  {`As an investors bank we are determined to achieve the greatest profit for our clients.
 We let the numbers do the talking while Amanah Groups Holdings does the walking.`}
                </Text>
              </VStack>

              <SimpleGrid
                alignItems={"center"}
                spacingX={"100px"}
                spacingY={"50px"}
                columns={[1, 1, 1, 1, 4, 4]}
              >
                <Flex
                  flexDir={"column"}
                  alignItems={"end"}
                  w={["150px", "200px", "200px", "200px", "180px", "200px"]}
                >
                  <VStack
                    alignItems={"start"}
                    justifyContent={"end"}
                    h={["150px", "200px", "200px", "200px", "180px", "200px"]}
                    position={"absolute"}
                    alignSelf={"start"}
                    spacing={-3}
                    ml={-10}
                    pb={5}
                    zIndex={2}
                  >
                    <chakra.h3
                      fontFamily={"Poppins.black"}
                      fontSize={[
                        "40px",
                        "40px",
                        "40px",
                        "40px",
                        "45px",
                        "50px",
                      ]}
                      fontWeight="black"
                      letterSpacing={{
                        base: "normal",
                        md: "normal",
                      }}
                      color="#FFFFFF"
                      whiteSpace={["normal", "normal", "pre-line", "pre-line"]}
                    >
                      {`1.3`}
                    </chakra.h3>
                    <Text
                      mb={6}
                      fontSize={[
                        "15px",
                        "15px",
                        "15px",
                        "15px",
                        "15px",
                        "15px",
                      ]}
                      color="#FFFFFF"
                      whiteSpace={["normal", "normal", "pre-line", "pre-line"]}
                      fontFamily={"Poppins"}
                      textAlign={"center"}
                    >
                      {`$B Invested`}
                    </Text>
                  </VStack>
                  <Box
                    draggable={"false"}
                    style={{
                      userSelect: "none",
                    }}
                    filter={"auto"}
                    brightness={"50%"}
                  >
                    <Image
                      w={["150px", "200px", "200px", "200px", "180px", "200px"]}
                      h={["150px", "200px", "200px", "200px", "180px", "200px"]}
                      src={
                        "https://images.unsplash.com/photo-1589666564459-93cdd3ab856a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8aW52ZXN0bWVudHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
                      }
                      alt="ms"
                    />
                  </Box>
                </Flex>
                <Flex
                  flexDir={"column"}
                  alignItems={"end"}
                  w={["150px", "200px", "200px", "200px", "180px", "200px"]}
                >
                  <VStack
                    alignItems={"start"}
                    justifyContent={"end"}
                    h={["150px", "200px", "200px", "200px", "180px", "200px"]}
                    position={"absolute"}
                    alignSelf={"start"}
                    spacing={-3}
                    ml={-10}
                    pb={5}
                    zIndex={2}
                  >
                    <chakra.h3
                      fontFamily={"Poppins.black"}
                      fontSize={[
                        "40px",
                        "40px",
                        "40px",
                        "40px",
                        "45px",
                        "50px",
                      ]}
                      fontWeight="black"
                      letterSpacing={{
                        base: "normal",
                        md: "normal",
                      }}
                      color="#FFFFFF"
                      whiteSpace={["normal", "normal", "pre-line", "pre-line"]}
                    >
                      {`250`}
                    </chakra.h3>
                    <Text
                      mb={6}
                      fontSize={[
                        "15px",
                        "15px",
                        "15px",
                        "15px",
                        "15px",
                        "15px",
                      ]}
                      color="#FFFFFF"
                      whiteSpace={["normal", "normal", "pre-line", "pre-line"]}
                      fontFamily={"Poppins"}
                      textAlign={"center"}
                    >
                      {`Companies Financed`}
                    </Text>
                  </VStack>
                  <Box
                    draggable={"false"}
                    style={{
                      userSelect: "none",
                    }}
                    filter={"auto"}
                    brightness={"50%"}
                  >
                    <Image
                      w={["150px", "200px", "200px", "200px", "180px", "200px"]}
                      h={["150px", "200px", "200px", "200px", "180px", "200px"]}
                      src={
                        "https://images.unsplash.com/photo-1560179707-f14e90ef3623?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1173&q=80"
                      }
                      alt="ms"
                    />
                  </Box>
                </Flex>

                <Flex
                  flexDir={"column"}
                  alignItems={"end"}
                  w={["150px", "200px", "200px", "200px", "180px", "200px"]}
                >
                  <VStack
                    alignItems={"start"}
                    justifyContent={"end"}
                    h={["150px", "200px", "200px", "200px", "180px", "200px"]}
                    position={"absolute"}
                    alignSelf={"start"}
                    spacing={-3}
                    ml={-10}
                    pb={5}
                    zIndex={2}
                  >
                    <chakra.h3
                      fontFamily={"Poppins.black"}
                      fontSize={[
                        "40px",
                        "40px",
                        "40px",
                        "40px",
                        "45px",
                        "50px",
                      ]}
                      fontWeight="black"
                      letterSpacing={{
                        base: "normal",
                        md: "normal",
                      }}
                      color="#FFFFFF"
                      whiteSpace={["normal", "normal", "pre-line", "pre-line"]}
                    >
                      {`8`}
                    </chakra.h3>
                    <Text
                      mb={6}
                      fontSize={[
                        "15px",
                        "15px",
                        "15px",
                        "15px",
                        "15px",
                        "15px",
                      ]}
                      color="#FFFFFF"
                      whiteSpace={["normal", "normal", "pre-line", "pre-line"]}
                      fontFamily={"Poppins"}
                      textAlign={"center"}
                    >
                      {`Managed Funds`}
                    </Text>
                  </VStack>
                  <Box
                    draggable={"false"}
                    style={{
                      userSelect: "none",
                    }}
                    filter={"auto"}
                    brightness={"50%"}
                  >
                    <Image
                      w={["150px", "200px", "200px", "200px", "180px", "200px"]}
                      h={["150px", "200px", "200px", "200px", "180px", "200px"]}
                      src={
                        "https://images.unsplash.com/photo-1591696205602-2f950c417cb9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                      }
                      alt="ms"
                    />
                  </Box>
                </Flex>

                <Flex
                  flexDir={"column"}
                  alignItems={"end"}
                  w={["150px", "200px", "200px", "200px", "180px", "200px"]}
                >
                  <VStack
                    alignItems={"start"}
                    justifyContent={"end"}
                    h={["150px", "200px", "200px", "200px", "180px", "200px"]}
                    position={"absolute"}
                    alignSelf={"start"}
                    spacing={-3}
                    ml={-10}
                    pb={5}
                    zIndex={2}
                  >
                    <chakra.h3
                      fontFamily={"Poppins.black"}
                      fontSize={[
                        "40px",
                        "40px",
                        "40px",
                        "40px",
                        "45px",
                        "50px",
                      ]}
                      fontWeight="black"
                      letterSpacing={{
                        base: "normal",
                        md: "normal",
                      }}
                      color="#FFFFFF"
                      whiteSpace={["normal", "normal", "pre-line", "pre-line"]}
                    >
                      {`35`}
                    </chakra.h3>
                    <Text
                      mb={6}
                      fontSize={[
                        "15px",
                        "15px",
                        "15px",
                        "15px",
                        "13px",
                        "13px",
                      ]}
                      color="#FFFFFF"
                      whiteSpace={["normal", "normal", "pre-line", "pre-line"]}
                      fontFamily={"Poppins"}
                      textAlign={"center"}
                    >
                      {`Years Of Experience`}
                    </Text>
                  </VStack>
                  <Box
                    draggable={"false"}
                    style={{
                      userSelect: "none",
                    }}
                    filter={"auto"}
                    brightness={"50%"}
                  >
                    <Image
                      w={["150px", "200px", "200px", "200px", "180px", "200px"]}
                      h={["150px", "200px", "200px", "200px", "180px", "200px"]}
                      src={
                        "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                      }
                      alt="ms"
                    />
                  </Box>
                </Flex>
              </SimpleGrid>
            </VStack>
          </Flex>
        </Box>
      </Flex>
    );
  }

  function AboutUs() {
    return (
      <Flex
        flexDir={["column", "column", "row", "row", "row", "row"]}
        alignItems={"center"}
        bgColor={"#085C00"}
        w={width}
      >
        <Box
          px={["7%", "7%", "7%", "7%", "7%", "7%"]}
          pb={["7%", "7%", "7%", "7%", "7%", "7%"]}
          w={"full"}
        >
          <Flex
            alignItems={"start"}
            justifyContent={"center"}
            width={"full"}
            pt={["10", "10", "10", "10", "40", "40"]}
            flexDir={["column", "column", "row", "row", "row", "row"]}
          >
            <VStack
              alignItems={"center"}
              spacing={[10, 20, 20, 20, 20, 20]}
              width={"full"}
            >
              <VStack alignItems={"center"}>
                <chakra.h3
                  fontFamily={"Poppins.black"}
                  fontSize={["28px", "40px", "40px", "40px", "45px", "50px"]}
                  fontWeight="black"
                  letterSpacing={{
                    base: "normal",
                    md: "normal",
                  }}
                  id={"AU"}
                  color="#E6B85E"
                  whiteSpace={["normal", "normal", "pre-line", "pre-line"]}
                >
                  {`About Amanah Group`}
                </chakra.h3>

                <Text
                  mb={6}
                  fontSize={["14px", "14px", "15px", "15px", "15px", "15px"]}
                  color="#FFFFFF"
                  whiteSpace={["normal", "normal", "pre-line", "pre-line"]}
                  fontFamily={"Poppins"}
                  textAlign={"center"}
                  letterSpacing={{ base: "normal", md: "5px" }}
                >
                  {`Amanah Group Holdings B.V. is a European based, Shariah compliant, Digital investment bank. The bank acts as the investment branch of the first and oldest Islamic Government Bank of the world, Al-Amanah Islamic investment Bank situated in the Republic of the Philippines.`}
                </Text>
              </VStack>
            </VStack>
          </Flex>
        </Box>
      </Flex>
    );
  }

  function Fund() {
    return (
      <Flex
        flexDir={["column", "column", "row", "row", "row", "row"]}
        alignItems={"center"}
        w={width}
      >
        <Box
          px={["7%", "7%", "7%", "7%", "7%", "7%"]}
          pb={["7%", "7%", "7%", "7%", "7%", "7%"]}
          pt={["10", "10", "10", "10", "40", "40"]}
          w={"full"}
        >
          <SimpleGrid
            id="FUND"
            alignItems={"center"}
            spacingX={"100px"}
            spacingY={"50px"}
            columns={[1, 1, 1, 1, 1, 1]}
          >
            <Flex
              alignItems={"end"}
              width={"full"}
              flexDir={["row", "row", "row", "row", "row", "row"]}
            >
              <Box
                draggable={"false"}
                style={{
                  userSelect: "none",
                }}
                filter={"auto"}
                brightness={"20%"}
              >
                <Image
                  w={[width, "200px", "200px", "200px", width, width]}
                  h={["400px", "200px", "200px", "200px", "500px", "500px"]}
                  objectFit={"cover"}
                  src={
                    "https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx2aXN1YWwtc2VhcmNofDF8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                  }
                  alt="ms"
                />
              </Box>

              <VStack
                pl={["5", "10", "10", "10", "10", "10"]}
                pb={["10", "10", "10", "10", "20", "20"]}
                alignItems={"start"}
                width={["80%", "80%", "80%", "80%", "80%", "80%"]}
                position={"absolute"}
              >
                <VStack
                  spacing={[
                    "-5px",
                    "-10px",
                    "-10px",
                    "-10px",
                    "-10px",
                    "-20px",
                  ]}
                  alignItems={"start"}
                >
                  <chakra.h3
                    fontFamily={"Poppins.black"}
                    fontSize={["28px", "40px", "40px", "40px", "45px", "60px"]}
                    fontWeight="black"
                    letterSpacing={{
                      base: "normal",
                      md: "normal",
                    }}
                    color="#E6B85E"
                    whiteSpace={["normal", "normal", "pre-line", "pre-line"]}
                  >
                    {`Amanah Management`}
                  </chakra.h3>
                </VStack>

                <VStack alignItems={"start"} spacing={"30px"}>
                  <Text
                    fontSize={["14px", "14px", "15px", "15px", "15px", "15px"]}
                    color="#FFFFFF"
                    whiteSpace={["normal", "normal", "pre-line", "pre-line"]}
                    fontFamily={"Poppins"}
                  >
                    {`Concepts are the first glimpse of ideas becoming reality. Through research and development we optimise the ROI on all sorts of projects. We help making businesses, institutions and world regions to become sustainable and durable.`}
                  </Text>
                </VStack>
              </VStack>
            </Flex>

            <Flex
              alignItems={"end"}
              width={"full"}
              flexDir={["row", "row", "row", "row", "row", "row"]}
            >
              <Box
                draggable={"false"}
                style={{
                  userSelect: "none",
                }}
                filter={"auto"}
                brightness={"20%"}
              >
                <Image
                  w={[width, "200px", "200px", "200px", width, width]}
                  h={["400px", "200px", "200px", "200px", "500px", "500px"]}
                  objectFit={"cover"}
                  src={
                    "https://images.unsplash.com/photo-1603466183710-70b84997a93f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                  }
                  alt="ms"
                />
              </Box>

              <VStack
                pl={["5", "10", "10", "10", "10", "10"]}
                pb={["10", "10", "10", "10", "20", "20"]}
                alignItems={"end"}
                width={["80%", "80%", "80%", "80%", "80%", "80%"]}
                position={"absolute"}
              >
                <VStack
                  spacing={[
                    "-5px",
                    "-10px",
                    "-10px",
                    "-10px",
                    "-10px",
                    "-20px",
                  ]}
                  alignItems={"start"}
                >
                  <chakra.h3
                    fontFamily={"Poppins.black"}
                    fontSize={["28px", "40px", "40px", "40px", "45px", "60px"]}
                    fontWeight="black"
                    letterSpacing={{
                      base: "normal",
                      md: "normal",
                    }}
                    color="#E6B85E"
                    whiteSpace={["normal", "normal", "pre-line", "pre-line"]}
                  >
                    {`Amanah Estate`}
                  </chakra.h3>
                </VStack>

                <VStack alignItems={"start"} spacing={"30px"}>
                  <Text
                    fontSize={["14px", "14px", "15px", "15px", "15px", "15px"]}
                    color="#FFFFFF"
                    textAlign={"end"}
                    whiteSpace={["normal", "normal", "pre-line", "pre-line"]}
                    fontFamily={"Poppins"}
                  >
                    {`First class properties around the globe with requisite development plans. Our programmes add direct value to the lives of citizens and businesses around the area of the real estate. We make sure that our investment is making an impact.`}
                  </Text>
                </VStack>
              </VStack>
            </Flex>

            <Flex
              alignItems={"end"}
              width={"full"}
              flexDir={["row", "row", "row", "row", "row", "row"]}
            >
              <Box
                draggable={"false"}
                style={{
                  userSelect: "none",
                }}
                filter={"auto"}
                brightness={"20%"}
              >
                <Image
                  w={[width, "200px", "200px", "200px", width, width]}
                  h={["400px", "200px", "200px", "200px", "500px", "500px"]}
                  objectFit={"cover"}
                  src={
                    "https://images.unsplash.com/photo-1592478411213-6153e4ebc07d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1112&q=80"
                  }
                  alt="ms"
                />
              </Box>

              <VStack
                pl={["5", "10", "10", "10", "10", "10"]}
                pb={["10", "10", "10", "10", "20", "20"]}
                alignItems={"start"}
                width={["80%", "80%", "80%", "80%", "80%", "80%"]}
                position={"absolute"}
              >
                <VStack
                  spacing={[
                    "-5px",
                    "-10px",
                    "-10px",
                    "-10px",
                    "-10px",
                    "-20px",
                  ]}
                  alignItems={"start"}
                >
                  <chakra.h3
                    fontFamily={"Poppins.black"}
                    fontSize={["28px", "40px", "40px", "40px", "45px", "60px"]}
                    fontWeight="black"
                    letterSpacing={{
                      base: "normal",
                      md: "normal",
                    }}
                    color="#E6B85E"
                    whiteSpace={["normal", "normal", "pre-line", "pre-line"]}
                  >
                    {`Amanah Tech`}
                  </chakra.h3>
                </VStack>

                <VStack alignItems={"start"} spacing={"30px"}>
                  <Text
                    fontSize={["14px", "14px", "15px", "15px", "15px", "15px"]}
                    color="#FFFFFF"
                    whiteSpace={["normal", "normal", "pre-line", "pre-line"]}
                    fontFamily={"Poppins"}
                  >
                    {`The world thrives on Technology and Innovation. It is unthinkable to imagine a world without it. We invest in companies that have the ability to improve our quality of life. Technology from AI to High-end security, Super performance and the most advanced innovations in various type of segments.`}
                  </Text>
                </VStack>
              </VStack>
            </Flex>
          </SimpleGrid>
        </Box>
      </Flex>
    );
  }

  return (
    <MotionFlex
      initial={{ opacity: 0 }}
      animate={{ opacity: 100, delay: 1 }}
      transition={{ ease: "easeIn", duration: 10, delay: 1 }}
    >
      <Box bgColor={"#212121"}>
        <CallToAction />

        <AmanahGroup />
        <Stats />
        <AboutUs />
        <Fund />
      </Box>
    </MotionFlex>
  );
}
