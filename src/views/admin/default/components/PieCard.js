// Chakra imports
import { Box, Flex, Text, Select, useColorModeValue, Icon, } from "@chakra-ui/react";
import { RiArrowUpSFill ,RiArrowDownSFill} from "react-icons/ri";
// Custom components
import Card from "components/card/Card.js";
import PieChart from "components/charts/PieChart";
import { pieChartData, pieChartOptions } from "variables/charts";
import { VSeparator } from "components/separator/Separator";
import React from "react";

export default function Conversion(props) {
  const { ...rest } = props;

  // Chakra Color Mode
  const textColor = useColorModeValue("secondaryGray.900", "white");
  const cardColor = useColorModeValue("white", "navy.700");
  const cardShadow = useColorModeValue(
    "0px 18px 40px rgba(112, 144, 176, 0.12)",
    "unset"
  );
  return (
    <Card p='30px' align='center' direction='column' w='100%' {...rest}>
      <Flex
        px={{ base: "0px", "2xl": "10px" }}
        justifyContent='space-between'
        alignItems='center'
        w='100%'
        mb='8px'>
        <Text color={textColor} fontSize='md' fontWeight='600' mt='4px'>
          Sales
        </Text>
      </Flex>

      <PieChart
        h='100%'
        w='100%'
        chartData={pieChartData}
        chartOptions={pieChartOptions}
      />
      <Card
        bg={cardColor}
        flexDirection='row'
        boxShadow={cardShadow}
        w='100%'
        p='15px'
        px='20px'
        mt='15px'
        mx='auto'>
        <Flex direction='column' py='5px' align='center' justify='center'>
  <Flex justify='space-between' px='20px' pt='5px' w='100%' align='center'>
    <Flex align='center' mb='20px'>
      <Text
        fontSize='sm'
        fontWeight='700'
        mt='4px'
        me='12px'
        color='secondaryGray.600'
        alignContent='center'
      >
        Current Week
      </Text>

        <Text color='secondaryGray.600' fontSize='sm' fontWeight='500'>
          2000
        </Text>

        <Icon as={RiArrowUpSFill} color='green.500' me='2px' mt='2px' />
        <Text color='green.500' fontSize='sm' fontWeight='700'>
          +0.3%
        </Text>

    </Flex>
  </Flex>

  <Flex justify='space-between' px='20px' pt='5px' w='100%' align='center'>
    <Flex align='center' mb='20px'>
      <Text
        fontSize='sm'
        fontWeight='700'
        mt='4px'
        me='12px'
        color='secondaryGray.600'
        alignContent='center'
      >
        Last Week
      </Text>

        <Text color='secondaryGray.600' fontSize='sm' fontWeight='500'>
          1500
        </Text>

        <Icon as={RiArrowDownSFill} color='red.500' me='2px' mt='2px' />
        <Text color='red.500' fontSize='sm' fontWeight='700'>
          -0.3%
        </Text>

    </Flex>
  </Flex>
</Flex>

      </Card>
    </Card>
  );
}
