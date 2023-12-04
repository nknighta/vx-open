import Layout from '../../layout/main';

export default function Test() {
    return (
        <div>
            <h1>test</h1>
            <br />
            <p>ETH test</p>
        </div>
    );
}

Test.getLayout = (page: any): JSX.Element => {
    return <Layout>{page}</Layout>;
};
