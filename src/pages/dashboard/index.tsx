import HMeta from "components/headmeta";
import Layout from "layout/main";
import React from "react";
import {Box, Button,} from "@chakra-ui/react";
import {useRouter} from "next/router";
import type {
    GetServerSidePropsContext,
    InferGetServerSidePropsType,
} from "next"
import {getProviders, useSession, signIn, signOut} from "next-auth/react"


export default function Dash({
                                 providers,
                             }: InferGetServerSidePropsType<typeof getServerSideProps>) {
    const {data: session} = useSession();
    if (session) {
        return (
            <Layout>
                <Box display={["block", "block", "block", "flex"]} h={[1500, 500]}>
                    <Box
                        w={["100%", "40%"]}
                    >
                        <p>{session?.user?.name}</p>
                        <Box p={"3vh 0"}>
                            <p>{session?.user?.email}</p>
                        </Box>
                        <Box>
                            latest sign in
                            <code>
                            <pre>
                                {session.expires}
                            </pre>
                            </code>
                        </Box>
                        <Button onClick={() => signOut()}>
                            Sign out
                        </Button>
                    </Box>
                </Box>
            </Layout>
        )
    }
    return (
        <Layout>
            <Box display={["block", "block", "block", "flex"]} h={[1500, 500]}>
                <Box>
                    <>
                        {Object.values(providers).map((provider) => (
                            <div key={provider.name}>
                                <Button
                                    onClick={() => signIn(provider.id)}
                                    bg={"#000"}
                                    color={"#fff"}
                                    w={150}>
                                    {provider.name}
                                </Button>
                            </div>
                        ))}
                    </>
                </Box>
            </Box>
        </Layout>
    )
}


export async function getServerSideProps(context: GetServerSidePropsContext) {

    const providers = await getProviders()

    return {
        props: {providers: providers ?? []},
    }
}
