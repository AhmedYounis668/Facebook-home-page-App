import { Box, Typography } from '@mui/material'
import React from 'react'
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

const LatestPhoto = () => {
    const itemData = [
        {
          img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
          title: 'Breakfast',
        },
        {
          img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
          title: 'Burger',
        },
        {
          img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
          title: 'Camera',
        },
    ]
  return (
    <Box width="100%" mt="30px">
            <Typography sx={{display:'flex',justifyContent:'flex-start'}} >Latest Photos</Typography>
            <ImageList sx={{ width:"100%", height: 210,overflow:'hidden' }}  cols={3} >
      {itemData.map((item) => (
        <ImageListItem key={item.img}>
          <img
            srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
            src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
            alt={item.title}
            loading="lazy"
            style={{borderRadius:'10px'}}
          />
        </ImageListItem>
      ))}
    </ImageList>
    </Box>
  )
}

export default LatestPhoto
