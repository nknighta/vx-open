import HMeta from 'components/headmeta';
import Layout from 'layout/main';
export default function Test() {
    return (
        <div>
            <HMeta pageTitle="test" pageDescription="test" pageImg={"/api/og?title=test"} />
            <h1>test</h1>
            <br />
            <p>ETH test</p>
        </div>
    );
}

Test.getLayout = (page: any): JSX.Element => {
    return <Layout>{page}</Layout>;
};
