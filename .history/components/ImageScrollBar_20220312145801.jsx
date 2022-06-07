import { useContext } from 'react';
import Image from 'next/image';
import { Box, Icon, Flex } from "@chakra-ui/react"
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu'
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from 'react-icons/fa';

const LeftArrow = () => {
    const { scrollPrev } = useContext(VisibilityContext);

    return (
        <Flex justifyContent="center" alignItems="center" marginLeft="2">
            <Icon
              as={FaArrowAltCircleLeft}
              onClick={scrollPrev}
              fontSize="2xl"
              cursor="pointer"
            />
        </Flex>
    )
}

const RightArrow = () => {
    const { scrollNext } = useContext(VisibilityContext);

    return (
        <Flex justifyContent="center" alignItems="center" marginRight="2">
            <Icon
              as={FaArrowAltCircleRight}
              onClick={scrollNext}
              fontSize="2xl"
              cursor="pointer"
            />
        </Flex>
    )
}

const ImageScrollBar = ({ data }) => (
    <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow} style={{overflow: 'hidden'}}>
        {data.map((item) => (
            <Box key={item.id} w="910px" itemId={item.id} overflow="hidden" p="1">
                <Image
                  alt="property"
                  placeholder='blur'
                  blurDataURL={item.url} 
                  src={item.url} 
                  width={1000} 
                  height={500} />
            </Box>
        ))}
    </ScrollMenu>
)
