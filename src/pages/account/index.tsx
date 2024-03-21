import React, { ReactNode } from 'react';
import HMeta from 'components/headmeta';
import Layout from 'layout/main';
import type { InferGetStaticPropsType } from 'next';

export default function Account({ api }: InferGetStaticPropsType<typeof getServerSideProps>) {
    return (
        <>
            <HMeta pageTitle='dash' />
            {/* error handler */}
            {!api ? (
                'loading..'
            ) : api.code == 0 ? (
                <>
                    <div>{api.api.name}</div>
                    <div>{api.api.state}</div>
                    <div>{api.api.provider}</div>
                    <div>{api.api.accounts}</div>
                </>
            ) : (
                'NG'
            )}
            <code>
                <pre>{JSON.stringify(api, null, 2)}</pre>
            </code>
            <p>code meta</p>
            <code>
                <pre>{JSON.stringify(api.api.accounts, null, 2)}</pre>
            </code>
        </>
    );
}

Account.getLayout = (page: ReactNode) => {
    return <Layout>{page}</Layout>;
};

export async function getServerSideProps(context) {
    try {
        const res = await fetch(`http://localhost:3000/api/v1/vx`);
        const data = await res.json();
        const api = { api: data, code: 0 };
        return {
            props: {
                api: api,
            },
        };
    } catch (e) {
        const data = { msg: 'faild fetch from api serever!' };
        const api = { api: data, code: 1 };
        return {
            props: {
                api: api,
            }, // will be passed to the page component as props
        };
    }
}
