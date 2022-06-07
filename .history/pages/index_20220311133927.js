import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import { Flex, Box, Text, Button } from '@chakra-ui/react'

const Banner = ({purpose}) => (
  <Flex flexWrap="wrap" justifyContent="center" alignItems="center" m="10">
    {purpose}
  </Flex>
)

export default function Home() {
  return (
    <div className="">
        <title>Realtor-2.0</title>
        <link rel="icon" href="/favicon.ico" />
       <h1>Lets Get Cunty</h1>
       <Banner purpose={'For Sale'} />
    </div>
  )
}
