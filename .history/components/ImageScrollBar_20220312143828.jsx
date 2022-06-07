import { useContext } from 'react';
import Image from 'next/image';
import { Box, Icon, Flex } from "@chakra-ui/react"
import { ScrollMenu, VisbilityContext } from 'react-horizontal-scrolling-menu'
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from 'react-icons/fa';

const ImageScrollBar = () => (
    <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow} style="overflow-hidden">

    </ScrollMenu>
)
