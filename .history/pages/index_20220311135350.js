import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import { Flex, Box, Text, Button } from '@chakra-ui/react'

const Banner = ({ purpose, title1, title2, desc1, desc2, buttonText, linkName, imageurl}) => (
  <Flex flexWrap="wrap" justifyContent="center" alignItems="center" m="10">
    <Image src={imageurl} width={500} height={300} alt="banner" />
    <Box p="5">
      <Text color="gray.500" fontSize="sm" fontWeight="medium">{purpose}</Text>
      <Text fontSize="3xl" fontWeight="bold">{title1}<br/>{title2}</Text>
      <Text fontSize="lg" paddingTop="3"  paddingBottom="3" color="gray.700">{desc1}<br/>{desc2}</Text>
      <Button fontSize="xl" bg="blue.300" color="white">
        <Link href={linkName}>{buttonText}</Link>
      </Button>
    </Box>
  </Flex>
)

export default function Home() {
  return (
    <div className="">
        <title>Realtor-2.0</title>
        <link rel="icon" href="/favicon.ico" />
       <h1>Lets Get Cunty</h1>
       <Banner purpose={'For Sale'} />
       <Banner purpose={'For Rent'} />
    </div>
  )
}
