import React, { useEffect, useState } from 'react'
import logo from '../../assets/logo.jpeg'
import { Link } from 'react-router-dom'
import { ethers } from 'ethers';
import abi from '../../abi.json'
import './style.css'
import {
  Player
} from "@livepeer/react";
import { ConnectButton } from "@rainbow-me/rainbowkit";

const contractAddress = "0x72C86E4C9f5da968093f3bB23D9fD8d028B6B965";

const CreatorDashboard = () => {

    const [cid, setCid] = useState()

    const provider = new ethers.providers.JsonRpcProvider(
        "https://chain-node.5ire.network"
    );

    const wallet = new ethers.Wallet(
        "0x1165ce763fc573560f2132a5081abfe4e73a1212711a5a5126677f85ac3cd0f8",
        provider
    );

    const getData = async() => {
    const contractInstance = new ethers.Contract(contractAddress, abi, wallet);
      try {
        await contractInstance
        .getVideos(1)
        .then((res) => {
            console.log(res);
            setCid(res)
        });
      } catch (err) {
        console.log(err);
      }
    }  

    useEffect(() => {
        getData()
    }, [])

  return (
    <div className='dash_cont'>
        <div className="dash_header">
            <div className="img-search">
                <img
                src={logo}
                alt=""
                />
            </div>

            <div className="nav">
                <ul>
                <li>
                    <Link to="/">
                        <p className="btn from-top">Home</p>
                    </Link>
                </li>
                <li>
                    <Link to="/create_course">
                        <p className="btn from-top">Create course</p>
                    </Link>
                </li>

                {/* { 
                    !walletAddress 
                    ? <li><button onClick={connectWallet}><p style={{padding:"7px 5px"}}>Connect wallet</p></button></li>
                    : <li><Link to="/account"><p className="metamask" title={walletAddress}><i class="fa-solid fa-user"></i></p></Link></li>
                }   */}
                
                </ul>
            </div>
            <ConnectButton accountStatus="avatar" chainStatus="none" showBalance={false} />
        </div>

        <div className='dash_sec_cont'>
            <div className='dash_vids_list'>
            </div>
            <div className='dash_vid'>
            {
                cid && cid.map((id) => (
                    <div className='vid_cont'>
                        <Player 
                            playbackId={id} 
                            showLoadingSpinner
                            showTitle
                            showPipButton
                            controls={false}
                        />
                    </div>
                ))
            }
            </div>
        </div>


    </div>
  )
}

export default CreatorDashboard
