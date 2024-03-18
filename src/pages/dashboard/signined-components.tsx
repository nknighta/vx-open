import { Box, Button } from "@chakra-ui/react";
import { useSession,  signOut} from "next-auth/react"

export default function SigninedComponents() {
    const {data: session} = useSession();
    if (session) {
        return (
            <>
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
            </>
        )
    } else {
        return (
            <>
                <p>loading...</p>
            </>
        )
    }
}