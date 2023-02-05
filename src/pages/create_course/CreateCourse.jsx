import React, { useContext, useEffect } from 'react'
import logo from '../../assets/logo2.png'
import Bg from '../../components/Bg_learner/Bg'
import './style.css'
import { useCreateAsset } from '@livepeer/react';
import { useCallback, useState, useMemo } from 'react';
import { useDropzone } from 'react-dropzone';
import Auth from '../../context/Auth';
import axios from 'axios';
import { ethers } from 'ethers';
import abi from '../../abi.json'

const contractAddress = "0x72C86E4C9f5da968093f3bB23D9fD8d028B6B965";

const CreateCourse = () => {

  const [video, setVideo] = useState();
  const [cName, setName] = useState('')
  const [cfield, setField] = useState('')
  const [cOut, setOut] = useState('')
  const [desc, setDesc] = useState('')
  const {address} = useContext(Auth)

  const {
    mutate: createAsset,
    data: asset,
    status,
    progress,
    error,
  } = useCreateAsset(
    video
      ? {
          sources: [{ name: video.name, file: video }]
        }
      : null,
  );
    
  const onDrop = useCallback(async (acceptedFiles) => {
    if (acceptedFiles && acceptedFiles.length > 0 && acceptedFiles?.[0]) {
      setVideo(acceptedFiles[0]);
    }
  }, []);

  const { getRootProps, getInputProps } = useDropzone({
    accept: {
      'video/*': ['*.mp4'],
    },
    maxFiles: 1,
    onDrop,
  });

  const progressFormatted = useMemo(
    () =>
      progress?.[0].phase === 'failed'
        ? 'Failed to process video.'
        : progress?.[0].phase === 'waiting'
        ? 'Waiting'
        : progress?.[0].phase === 'uploading'
        ? `Uploading: ${Math.round(progress?.[0]?.progress * 100)}%`
        : progress?.[0].phase === 'processing'
        ? `Processing: ${Math.round(progress?.[0].progress * 100)}%`
        : null,
    [progress],
  );

  const provider = new ethers.providers.JsonRpcProvider(
    "https://chain-node.5ire.network"
  );

  const wallet = new ethers.Wallet(
    "0x1165ce763fc573560f2132a5081abfe4e73a1212711a5a5126677f85ac3cd0f8",
    provider
  );

  const submit = async (e) => {
    e.preventDefault()

    let date = new Date()
    date = date.getFullYear()+'-'+(date.getMonth()+1)+'-'+date.getDate()
    const data2 = await axios.post('https://apisuperlearn.up.railway.app/api/create_course', {
      walletAddress: address,
      cName: cName,
      cDesc: desc,
      cField: cfield,
      cDate: date,
      cOutcomes: cOut
    }, {
      headers : {'content-type': 'application/x-www-form-urlencoded'}
    })
    console.log(data2);
    
  }
  
  const mint = async () => {
    if(asset?.[0]?.playbackId){
      const contractInstance = new ethers.Contract(contractAddress, abi, wallet);
      console.log("Minting!!");
      try {

        const data = await axios.get('https://apisuperlearn.up.railway.app/api/count')
        let counter = data.data[0].seq + 1

        await contractInstance
        .setCourseCreator(counter, asset[0].playbackId)
        .then((res) => {
          alert("Got videos");
          console.log(res);
        });

      } catch (err) {
        console.log(err);
      }
    }
  }

  useEffect(() => {
    mint()
  })

  return (
    <div className='create_co'>
        <div className="img-search">
            <img
            src={logo}
            alt=""
            />
        </div>
        <form className='co_form' onSubmit={submit}>
            <input type='text' placeholder='Course name' onChange={(e) => setName(e.target.value)} />
            <input type='text' placeholder='Select course Field' onChange={(e) => setField(e.target.value)} />
            <input type='text' placeholder='Course outcomes' onChange={(e) => setOut(e.target.value)} />
            <input type='text' placeholder='Description' onChange={(e) => setDesc(e.target.value)} />
            <>
              <div {...getRootProps()}>
                <input {...getInputProps()} />
                <p>Drag and drop or browse files</p>
              </div>
                {error?.message && <p>{error}</p>}
        
              {video ? <p>{video.name}</p> : <p>Select a video file to upload.</p>}
              {progressFormatted && <p>{progressFormatted}</p>}
        
              <h1>{asset?.[0]?.playbackId && asset[0].playbackId  }</h1>

              
            </>
            <div className="join">
              <button
                  onClick={() => {
                    createAsset?.();
                  }}
                  type='submit'
                  disabled={!createAsset || status === 'loading'}
                >
                Join
              </button>
            </div>
        </form>
        <Bg />
    </div>
  )
}

export default CreateCourse
