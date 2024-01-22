import Footer from "components/footer";
import TestLayout from "layout/testlayout";
import { ReactNode } from "react";

export default function IndexPage() {
    return (
        <div>
            <h1>Index Page</h1>
        </div>
    );
}

IndexPage.getLayout = function getLayout(page: ReactNode) {
    return <TestLayout>{page}</TestLayout>;
}    