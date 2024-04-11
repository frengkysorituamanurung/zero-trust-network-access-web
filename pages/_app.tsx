import '@/styles/globals.css'
import type {AppProps} from 'next/app'
import Head from "next/head";
import {Poppins} from "@next/font/google";
import {Toaster} from "react-hot-toast";

const poppins = Poppins({
    weight: '300',
    subsets: ['latin']
})

export default function App({Component, pageProps}: AppProps) {
    return (
        <>
            <Head>
                <title>ZTNA</title>
                <meta name="description" content="Generated by create next app"/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <div className={`${poppins.className} flex items-center justify-center bg-gray-200 h-screen w-screen`}>
                <Component {...pageProps} />
                <Toaster />
            </div>
        </>
    )
}
