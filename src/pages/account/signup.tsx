import { ReactNode } from "react";
import Layout from "layout/main";

export default function Signin() {
    return (
        <div>
            <h1>Sign Up</h1>
        </div>
    );
}

Signin.getLayout = (page: ReactNode) => {
    return (
        <Layout>
            {page}
        </Layout>
    );
};