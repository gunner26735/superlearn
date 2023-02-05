import React from 'react'
import logo from '../../assets/logo2.png'
import { Link } from "react-router-dom";
import './style.css'
import { ConnectButton } from "@rainbow-me/rainbowkit";
import Bg from '../../components/Bg_learner/Bg';
import poster from '../../assets/poster.jpg'
const ExploreCourse = () => {
  return (
    <div className='e_cont'>
        <div className="e_header">
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
                    <Link>
                    <p className="btn from-top">My courses</p>
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

        <div className='sec_cont'>
            <div className='e_menu'>
                <h1>Explore menu</h1>
                <br />
                <h6>Art & Huminity</h6>
                <h6>Business</h6>
                <h6>Computer science</h6>
                <h6>Health</h6>
                <h6>Math & logic</h6>
                <h6>Personal Development</h6>
                <br />
                <h2 className='text-blue'>Explore All</h2>
            </div>
            <div className='e_vids_list'>

                <div className='vid_cont'>
                    <div className='poster'>
                        <img src={poster} />
                    </div>
                    <div className='vid_desc'>
                        <p className='title'>Learn solidity</p>
                        <p className='desc'>in-depth</p>
                    </div>
                </div>
                
                <div className='vid_cont'>
                    <div className='poster'>
                        <img src={poster} />
                    </div>
                    <div className='vid_desc'>
                        <p className='title'>Learn solidity</p>
                        <p className='desc'>in-depth</p>
                    </div>
                </div>
                
                <div className='vid_cont'>
                    <div className='poster'>
                        <img src={poster} />
                    </div>
                    <div className='vid_desc'>
                        <p className='title'>Learn solidity</p>
                        <p className='desc'>in-depth</p>
                    </div>
                </div>
                
                <div className='vid_cont'>
                    <div className='poster'>
                        <img src={poster} />
                    </div>
                    <div className='vid_desc'>
                        <p className='title'>Learn solidity</p>
                        <p className='desc'>in-depth</p>
                    </div>
                </div>

            </div>
            <div className='e_vid'>
                <p>vid</p>
            </div>
        </div>


    </div>
  )
}

export default ExploreCourse
