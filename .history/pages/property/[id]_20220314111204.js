import { Box, Flex, Spacer, Text, Avatar } from "@chakra-ui/react"
import { FaBed, FaBath } from 'react-icons/fa';
import { BsGridFill } from 'react-icons/bs';
import { GoVerified } from 'react-icons/go';
import millify from 'millify';

import { baseUrl, fetchApi } from '../../utils/fetchApi'
import ImageScrollBar from "../../components/ImageScrollBar";

const PropertyDetails = ({ propertyDetails: { price, rentFrequency, rooms, title, baths, area, agency, isVerified, description, type, purpose, finishingStatus, amenities, photos } }) => (
    <Box maxWidth="1000px" margin="auto" p="4">
        {photos && <ImageScrollBar data={photos} />}
        <Box w="full" p="6">
        <Flex paddingTop="2" alignItems="center" justifyContent="space-between">
                <Flex alignItems="center">
                    <Box paddingRight="3" color="green.400">{isVerified && <GoVerified />}</Box>
                       <Text fontWeight="bold" fontSize="lg">AED{millify(price)}{rentFrequency && `/${rentFrequency}`}</Text>
                </Flex>
                   <Box>
                       <Avatar size="sm" src={agency?.logo?.url} />
                   </Box>
        </Flex>
        <Flex alignItems="center" p="1" justifyContent="space-between" w="250px" color="blue.200">
            {rooms} <FaBed /> | {baths} <FaBath /> | {millify(area)} sqft <BsGridFill />
        </Flex>
        <Box matginTop="2">
        <Text fontSize="lg" marginBottom="2" fontWeight="bold">
          {title}
        </Text>
        <Text lineHeight="2" color="gray.600">{description}</Text>
        </Box>
        <Flex flexWrap="wrap" textTransform="uppercase" justifyContent="space-between">
            <Flex justifyContent="space-between" w="400px" borderBottom="1px" borderColor="gray.100" p="3"></Flex>
        </Flex>
        </Box>
    </Box>
);

export default PropertyDetails;

export async function getServerSideProps({ params: { id }}) {
    const data = await fetchApi(`${baseUrl}/properties/detail?externalID=${id}`)

    return {
        props: {
            propertyDetails: data
        }
    }
}