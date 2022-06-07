import  Head from "next/head";
import { Box } from "@chakra-ui/react";
import Footer from '../components/Footer'
const Layout = ({ children }) => (
    <>
      <Head>
          <title>Real Estate</title>
      </Head>
      <Box>
          <header>
              Navbar
          </header>
          <main>
              {children}
          </main>
          <footer>
              <Footer></Footer>
          </footer>
      </Box>
    </>
);

export default Layout;