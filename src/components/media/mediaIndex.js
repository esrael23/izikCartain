import { useMediaQuery, useTheme } from '@mui/material'
import React from 'react'

import MediaDesktop from './MediaDesktop';
import MediaMobile from './MediaMobile';

const Mediaindex = () => {
  const theme = useTheme();
  const match = useMediaQuery(theme.breakpoints.down('md'))
  return (
    <>
     {match ? <MediaMobile/> : <MediaDesktop/>}
    </>
  )
}

export default Mediaindex