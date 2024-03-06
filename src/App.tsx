import { useEffect, useState } from 'react'
import './App.css'

import { styled } from '@mui/material/styles';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import Button from './components/button';
import { FaGithub, FaHeart, FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa';
import Avatar from './assets/avatar.jpg'

const MaterialUISwitch = styled(Switch)(({ theme }) => ({
  width: 62,
  height: 34,
  padding: 7,
  '& .MuiSwitch-switchBase': {
    margin: 1,
    padding: 0,
    transform: 'translateX(6px)',
    '&.Mui-checked': {
      color: '#fff',
      transform: 'translateX(22px)',
      '& .MuiSwitch-thumb:before': {
        backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
          '#fff',
        )}" d="M4.2 2.5l-.7 1.8-1.8.7 1.8.7.7 1.8.6-1.8L6.7 5l-1.9-.7-.6-1.8zm15 8.3a6.7 6.7 0 11-6.6-6.6 5.8 5.8 0 006.6 6.6z"/></svg>')`,
      },
      '& + .MuiSwitch-track': {
        opacity: 1,
        backgroundColor: theme.palette.mode === 'dark' ? '#8796A5' : '#aab4be',
      },
    },
  },
  '& .MuiSwitch-thumb': {
    backgroundColor: theme.palette.mode === 'dark' ? '#003892' : '#001e3c',
    width: 32,
    height: 32,
    '&::before': {
      content: "''",
      position: 'absolute',
      width: '100%',
      height: '100%',
      left: 0,
      top: 0,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
        '#fff',
      )}" d="M9.305 1.667V3.75h1.389V1.667h-1.39zm-4.707 1.95l-.982.982L5.09 6.072l.982-.982-1.473-1.473zm10.802 0L13.927 5.09l.982.982 1.473-1.473-.982-.982zM10 5.139a4.872 4.872 0 00-4.862 4.86A4.872 4.872 0 0010 14.862 4.872 4.872 0 0014.86 10 4.872 4.872 0 0010 5.139zm0 1.389A3.462 3.462 0 0113.471 10a3.462 3.462 0 01-3.473 3.472A3.462 3.462 0 016.527 10 3.462 3.462 0 0110 6.528zM1.665 9.305v1.39h2.083v-1.39H1.666zm14.583 0v1.39h2.084v-1.39h-2.084zM5.09 13.928L3.616 15.4l.982.982 1.473-1.473-.982-.982zm9.82 0l-.982.982 1.473 1.473.982-.982-1.473-1.473zM9.305 16.25v2.083h1.389V16.25h-1.39z"/></svg>')`,
    },
  },
  '& .MuiSwitch-track': {
    opacity: 1,
    backgroundColor: theme.palette.mode === 'dark' ? '#8796A5' : '#aab4be',
    borderRadius: 20 / 2,
  },
}));

function App() {
  const [count, setCount] = useState(0)

  useEffect(() => {
   
  }, [])

  function handleTheme(){
    console.log(document.documentElement.classList)
    if(document.documentElement.classList.contains('dark')){
      localStorage.theme = 'light'
      document.documentElement.classList.remove('dark')
    }else{
      localStorage.theme = 'dark'
      document.documentElement.classList.add('dark')
    }
  }

  return (
    <main className='container mx-auto w-full md:w-[50%] flex flex-col gap-4 items-center'>

      <div className='flex flex-col gap-2'>
        <img src={Avatar} alt="avatar" className='bg-white dark:bg-red-500 rounded-full object-cover w-28 h-28' />
        <p>@MayckL2</p>
      </div>

      <FormGroup className='ml-8'>
        <FormControlLabel
          onClick={handleTheme}
          control={<MaterialUISwitch sx={{ m: 1 }} defaultChecked />}
          label=""
        />
      </FormGroup>

      <Button text={'Inscreva-se no NLW'}/>
      <Button text={'Baixe meu e-book'}/>
      <Button text={'Veja meu portifólio'}/>
      <Button text={'Conheça o Explorer'}/>

      <div className='flex gap-8 text-2xl my-8'>
        <FaGithub/>
        <FaInstagram/>
        <FaLinkedin/>
        <FaYoutube/>
      </div>

      <p className='flex'>Feito com <FaHeart className='mx-2'/> pela <span className='ml-2 underline'>Rocketseat</span></p>

    </main>
  )
}


export default App
