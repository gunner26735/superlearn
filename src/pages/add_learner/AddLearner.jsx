import React, {useContext,useState} from 'react'
import logo from '../../assets/logo2.png'
import Bg from '../../components/Bg_learner/Bg'
import './style.css'
import Auth from '../../context/Auth'
import axios from 'axios'

const AddLearner = () => {

  const {address} = useContext(Auth)
  const [name, setName] = useState('')
  const [iName, setIname] = useState('')
  const [bio, setBio] = useState('')
  const [img, setImg] = useState('')

  const submit = async (e) => {
    e.preventDefault()
    const data = await axios.post('https://apisuperlearn.up.railway.app/api/reg_student', {
      walletAddress: address,
      sName: name,
      sUniName: iName,
      sBio: bio,
      tPhoto: img
    }, {
      headers : {'content-type': 'application/x-www-form-urlencoded'}
    })
    console.log(data);
  }

  return (
    <div className='add_leaner'>
        <div className="img-search">
            <img
            src={logo}
            alt=""
            />
        </div>
        <form className='learner_form' onSubmit={submit}>
            <input type='text' placeholder='Student name' onChange={(e) => setName(e.target.value)} />
            <input type='text' placeholder='University name' onChange={(e) => setIname(e.target.value)} />
            <textarea type='text' placeholder='Bio' onChange={(e) => setBio(e.target.value)} />
            <div className="join">
                <button type='submit'>Join</button>
            </div>
        </form>
      <Bg />
    </div>
  )
}

export default AddLearner
