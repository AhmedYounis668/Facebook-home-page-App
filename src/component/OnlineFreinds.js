import { Box, Typography } from '@mui/material'
import React from 'react'
import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';

const OnlineFreinds = () => {
  return (
    <Box width="100%" mt="10px">
      <Typography sx={{display:'flex',justifyContent:'flex-start'}} >Online Friends</Typography>
      <AvatarGroup total={24} sx={{justifyContent:'center'}}>
      <Avatar alt="Remy Sharp" src="./images/person1.jpg" />
      <Avatar alt="Travis Howard" src="./images/person3.jpg" />
      <Avatar alt="Agnes Walker" src="./images/person2.jpg" />
      <Avatar sx={{display:{xs:'none',md:'block'}}} alt="Agnes Walker" src="./images/person4.jpg" />

    </AvatarGroup>
    </Box>
  )
}

export default OnlineFreinds
