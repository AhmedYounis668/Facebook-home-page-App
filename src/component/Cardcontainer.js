import React from 'react'
import Carddetails from './Carddetails'
import { Box } from '@mui/material'

const Cardcontainer = () => {
    
const posts=[
    {username:'Ahmed Younis',content:'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',img:'./images/person1.jpg',imgcontent:'./images/nature1.jpg'},
    {username:'Farouk Elmasry',content:'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',img:'./images/person2.jpg',imgcontent:'./images/nature2.jpg'},
    {username:'Mohamed Ashraf',content:'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',img:'./images/person3.jpg',imgcontent:'./images/nature3.jpg'},
    {username:'Shrouq Abdelrhman',content:'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',img:'./images/person4.jpg',imgcontent:'./images/nature4.jpg'},


]
  return (
    <Box>
{
    posts.map((item)=>{
        return(
            <Carddetails postname={item.username} content={item.content} img={item.img} imgcontent={item.imgcontent}/>

    )})
}
    </Box>
  )
}

export default Cardcontainer
