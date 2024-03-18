import expres, { Response, Request } from 'express';

export const ethapi = expres.Router();

const apiKey = 'b47f8049fa274d2d97b7624e6f81207c'; // replace with your API key
const apiKeySecret = 'a2f8572652744a10a6c953372b8711cd'; // replace with your API key secret

const chainId = 1;
// curl https://mainnet.infura.io/v3/b47f8049fa274d2d97b7624e6f81207c -X POST -H "Content-Type: application/json"   -d '{"jsonrpc":"2.0","method":"eth_getBalance","params": ["0x00000000219ab540356cBB839Cbe05303d7705Fa", "latest"],"id":1}'
ethapi.get("/eth", async ({ req, res }: { req: Request, res: Response }) => {
    try {
        const data = await fetch(`https://gas.api.infura.io/networks/${chainId}/baseFeeHistory`, {
            method: "GET",
            headers: {
                'Authorization': 'Basic ' + Buffer.from(apiKey + ":" + apiKeySecret).toString('base64')
            },
        })
        const result = await data.json();
        res.json({ result : result});
    } catch (error) {
        res.json({ error: error.message });
    }
});