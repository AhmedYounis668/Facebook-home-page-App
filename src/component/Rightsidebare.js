import { Box } from '@mui/material'
import React from 'react'
import OnlineFreinds from './OnlineFreinds'
import LatestPhoto from './LatestPhoto'
import LatestConversition from './LatestConversition'

const Rightsidebare = () => {
  return (
    <Box sx={{position:'fixed',minWidth:'400px'}}>
      <OnlineFreinds/>
      <LatestPhoto/>
      <LatestConversition/>
    </Box>
  )
}

export default Rightsidebare
