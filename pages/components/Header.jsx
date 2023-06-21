import React from 'react'
import { ConnectWallet } from "@thirdweb-dev/react";


const Header = () => {
  return (
    <div className='header-container'>
        <h1 className='header-logo'>FIR PORTAL</h1>
        <ConnectWallet theme="dark"/>
    </div>
  )
}

export default Header