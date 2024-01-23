import {useConnect, Connector} from "wagmi";
import * as React from 'react';

function WalletOptions() {
    const { connectors, connect } = useConnect()

    return connectors.map((connector) => (
        <WalletOption
            key={connector.uid}
            connector={connector}
            onClick={() => connect({ connector })}
        />
    ))
}



function WalletOption({
    connector,
    onClick,
}: {
    connector: Connector
    onClick: () => void
}) {
    const [ready, setReady] = React.useState(false)

    React.useEffect(() => {
        ; (async () => {
            const provider = await connector.getProvider()
            setReady(!!provider)
        })()
    }, [connector])

    return (
        <Box
            w={400}
            p={"20px 0px 20px 0px"}
        >
            <Center>
                <Button
                    w={200}
                    borderRadius={6}
                    disabled={!ready}
                    onClick={onClick}>
                    {connector.name}
                </Button>
            </Center>
        </Box>
    )
}

export default WalletOptions;
