import Link from "next/link";
import {GithubLogo, YoutubeLogo} from "phosphor-react";

export default function Home() {
  return (
    <div className='flex flex-col gap-y-6 h-screen md:w-screen px-5 sm:px-20 lg:px-80 py-24 bg-white'>
        <header className='flex justify-between mb-40'>
            <p className='text-xl font-bold'>Tugas Akhir Kel 14</p>
            <nav className='flex gap-x-8'>
                <Link className='hover:underline hover:text-sm' href='/login'>Login</Link>
                <Link className='hover:underline hover:text-sm' href='/sign-up'>Sign Up</Link>
            </nav>
        </header>
        <h1 className='text-3xl'>Build Firebase MultiFactor Authentication with Zero Trust Network Access (ZTNA) incorporating Multi-Factor Authentication (MFA)</h1>
        <p>This project is showcased in a video tutorial illustrating the implementation of multi-factor authentication with zero trust network access (ZTNA) using Firebase on the dummy website <a href="https://cis.del.ac.id" className= 'hover:underline text-base'style={{backgroundColor: 'lightgray'}} target="_blank" rel="noopener noreferrer">cis.del.ac.id</a></p>

        <div className='flex flex-col gap-y-2 mb-5'>
            <h2 className='pb-4'>Demo Applications Coming Soon 👇</h2>
            <Link className='flex items-center gap-x-4 hover:underline text-base' href='https://www.youtube.com/@frengkykozeks'>
                <YoutubeLogo weight='fill' width={26} height={26} />
                <span>The YouTube Channel</span>
            </Link>
        </div>
        <p>You can find the project on Github</p>
        <Link className='flex items-center gap-x-4 hover:underline text-base' href='https://github.com/frengkysorituamanurung'>
            <GithubLogo weight='fill' width={26} height={26} />
            <span>Frengky Soritua Manurung</span>
        </Link>
    </div>
  )
}
