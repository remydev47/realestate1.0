import { useState } from 'react';
import { useRouter } from 'next/router'
import Image from 'next/image';
import { Flex, Box, Text, Icon } from "@chakra-ui/react"
import { BsFilter } from "react-icons/bs"

const Search = () => {
    const [searchFilters, setSearchFilters] = useState(false);
    const router = useRouter();

    return (
        <Box>
            <Flex
              cursor="pointer"
              bg="gray.100"
              borderBottom="1px"
            >
                
            </Flex>
        </Box>
    )
}

export default Search;