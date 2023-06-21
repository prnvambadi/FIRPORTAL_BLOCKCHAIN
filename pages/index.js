import Head from 'next/head'
import { useAddress, useContract, useContractRead } from '@thirdweb-dev/react'
import Header from './components/Header';
import Complaint from './components/Complaint';
import Status from './components/Status';
import Admin from './components/Admin';


export default function Home() {
  const address = useAddress();
  const { contract } = useContract(process.env.NEXT_PUBLIC_SMART_CONTRACT);
  const { data: officer } = useContractRead(contract, "officer")
  return (
    <div>
      <Head>
      <title>Complaint Registration</title>
      <meta name ="description" content='This is a complaint filing dApp'/>
      <link rel="icon" href="/favicon.ico"/>
    </Head>
    <Header/>
    <Complaint/>
    <Status/>
    {officer === address && (
      <Admin/>
    )}
    </div>
   
  )
}
