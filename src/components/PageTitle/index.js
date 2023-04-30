import Head from 'next/head';

export default function PageTitle ({Title}){
    return (
        <Head>
            <title>{Title}</title>
        </Head>
    )
}