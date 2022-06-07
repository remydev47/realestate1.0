import { useContext } from 'react';
import Image from 'next/image';
import { Box, Icon, Flex } from "@chakra-ui/react"
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu'
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from 'react-icons/fa';

const LeftArrow = () => {
    const { scrollPrev } = useContext(VisibilityContext);

    return (
        <Flex justifyContent="center" alignItems="center" margi></Flex>
    )
}

const ImageScrollBar = () => (
    <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow} style={{overflow: 'hidden'}}>

    </ScrollMenu>
)
