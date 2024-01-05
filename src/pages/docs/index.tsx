import { ReactNode } from "react"
import Layout from "layout/main"
import HMeta from "components/headmeta"
import {Box, Text } from "@chakra-ui/react"
export default function Docs () {
  return (
    <div>
    <HMeta pageTitle="Docs" pageDescription="" pageImg={"/api/og=Docs"} />
      <Text fontSize={30}>Docs</Text>
      <Box>
        hey this is docs
      </Box>
    </div>
  )
}

Docs.getLayout = (page: ReactNode) => {
  return (
    <Layout>
      {page}
    </Layout>
  )
}
