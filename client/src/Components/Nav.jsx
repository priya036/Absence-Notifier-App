import React from 'react'
import logo from '../assets/logom.png'
import profile from '../assets/demo_profile.png'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import ClassOutlinedIcon from '@mui/icons-material/ClassOutlined';
import SettingsIcon from '@mui/icons-material/Settings';
import SupportAgentRoundedIcon from '@mui/icons-material/SupportAgentRounded';
import ImageIcon from '@mui/icons-material/Image';
import TextFieldsIcon from '@mui/icons-material/TextFields'; 
import { Link } from 'react-router-dom';

function Nav() {
  return (
      <div className="xl:h-screen xl:w-20 w-screen mt-[-20px] h-10 fixed rounded-r-full" style={{borderTopRightRadius:"40px",borderBottomRightRadius:"40px",boxShadow: "0px 4px 30px 1px rgba(0, 0, 0, 0.25)"}}>
        <div className="xl:h-2/4 xl:w-full h-full w-2/4 flex xl:flex-col flex-row">
          <div className="h-10 w-10 xl:h-5 xl:w-20 my-10 mx-3">
            <img src={logo} alt="" />
          </div>
          <img src={profile} alt="" className="xl:h-12 xl:w-12 mx-3 p-5 xl:m-4 xl:my-4 xl:p-0 rounded:xl xl:rounded-lg" />
          <Link to='/home'>
            <HomeOutlinedIcon className="text-gray ml-5 mb-5 hover:text-primarygreen" fontSize='large' />
          </Link>
          <Link to='/sms'>
            <ClassOutlinedIcon className="text-gray  ml-5 mb-5 hover:text-primarygreen" fontSize='large' />
          </Link>
          <Link to='/studentinfo'>
            <AddOutlinedIcon className="text-gray ml-5 mb-5 hover:text-primarygreen" fontSize='large' />
          </Link>
          <Link to='/image'>
          <ImageIcon className="text-gray ml-5 mb-5 hover:text-primarygreen" fontSize='large' />
        </Link>
        <Link to='/imtxt'>
          <TextFieldsIcon className="text-gray ml-5 mb-5 hover:text-primarygreen" fontSize='large' />
        </Link>
        </div>
        
        <div className="h-2/4 w-full flex flex-col justify-end">
          <SupportAgentRoundedIcon className="text-gray ml-5 mb-5 hover:text-primarygreen" fontSize='large' />
          <SettingsIcon className="text-gray ml-5 mb-5 hover:text-primarygreen" fontSize='large' />
          <Link to='/'>
          <LogoutOutlinedIcon className="text-gray ml-5 mb-5 hover:text-primarygreen" fontSize='large' />
          </Link>
        </div>
      </div>
    )
  }

export default Nav