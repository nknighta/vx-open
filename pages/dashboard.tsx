import Layout from "../layout/main";
import { ReactNode } from "react";
export default function Dashboard() {
    return (
        <>
            <h1>Dashboard</h1>
        </>
    )
}

Dashboard.getLayout = (page: ReactNode) => {
    return (
        <Layout>
            {page}
        </Layout>
    )
}