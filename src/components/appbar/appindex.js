import { useMediaQuery, useTheme } from '@mui/material'
import React from 'react'
import Appbardesktop from './Appbardesktop';
import Appbarmobile from './Appbarmobile';

const Appindex = () => {
  const theme = useTheme();
  const match = useMediaQuery(theme.breakpoints.down('md'))
  return (
    <>
     {match ? <Appbarmobile/> : <Appbardesktop/>}
    </>
  )
}

export default Appindex