import { useRouter } from 'next/router'
import type { InferGetStaticPropsType } from 'next';

export const getPath = () => {
    const router = useRouter()
    const name = router.query.name;
    return name
}

export default function Page( api ) {
    console.log(api)
    const urls = getPath();
    return <>{urls},</>
}


export async function getStaticsProps(context) {
    const urls = getPath();
    try {
        const res = await fetch(`http://localhost:3001/v1/users/id/${urls}`);
        const data = await res.json();
        const api = { api: data, code: 0 };
        return api
    } catch (e) {
        const data = { msg: 'faild fetch from api serever!' };
        const api = { api: data, code: 1 };
        return api
    }
}
