import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import { Flex, Box, Text, Button } from '@chakra-ui/react'

import Property from '../components/Property'
import { baseUrl, fetchApi } from '../utils/fetchApi'

const Banner = ({ purpose, title1, title2, desc1, desc2, buttonText, linkName, imageurl}) => (
  <Flex flexWrap="wrap" justifyContent="center" alignItems="center" m="10">
    <Image src={imageurl} width={500} height={300} alt="banner" />
    <Box p="5">
      <Text color="gray.500" fontSize="sm" fontWeight="medium">{purpose}</Text>
      <Text fontSize="3xl" fontWeight="bold">{title1}<br/>{title2}</Text>
      <Text fontSize="lg" paddingTop="3"  paddingBottom="3" color="gray.700">{desc1}<br/>{desc2}</Text>
      <Button fontSize="xl" >
        <Link href={linkName}>{buttonText}</Link>
      </Button>
    </Box>
  </Flex>
)

export default function Home({ propertiesForSale, propertyForRent }) {
 
  return (
    <Box>
        <title>Realtor-2.0</title>
       <h1>Next Door</h1>
       <Banner 
         purpose="RENT A HOME"
         title1="Rental Homes for"
         title2="EveryOne"
         desc1="Explore Apartments, Villas, Homes"
         desc2="and more"
         buttonText="Explore Renting"
         linkName="/search?explore=for-rent-rent"
         imageurl="https://bayut-production.s3.eu-central-1.amazonaws.com/image/145426814/33973352624c48628e41f2ec460faba4"
       />
       <Flex flexWrap="wrap">
         {propertiesForRent.map((property) => <Property property={property} key={property.id} />)}
       </Flex>
       <Banner 
           purpose="BUY A HOME"
           title1="Find, Buy & Own your"
           title2="Dream Home"
           desc1="Explore Apartments, Villas, Homes"
           desc2="and more"
           buttonText="Explore Buying"
           linkName="/search?explore=for-sale"
           imageurl="https://bayut-production.s3.eu-central-1.amazonaws.com/image/110993385/6a070e8e1bae4f7d8c1429bc303d2008"
       />
          {propertiesForSale.map((property) => <Property property={property} key={property.id} />)}
    </Box>
  )
}

export async function getStaticProps() {
  const propertyForSale = await fetchApi(`${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-sale&hitsPerPage=6`)
  const propertyForRent = await fetchApi(`${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-rent&hitsPerPage=6`)

  return {
    props: {
      propertyForSale: propertyForSale?.hits,
      propertyForRent: propertyForRent?.hits,
    }
  }
}