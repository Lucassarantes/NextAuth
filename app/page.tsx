import Image from 'next/image';
import SignIn from '@/components/SignIn';
import { SessionProvider } from 'next-auth/react';
import { AppProps } from 'next/app';
import { getServerSession } from 'next-auth';
import { authOptions } from './api/auth/[...nextauth]/route';

export default async function Home({ Component, pageProps }: AppProps) {

  return (
    <>
      <SignIn />
    </>
  )
}
