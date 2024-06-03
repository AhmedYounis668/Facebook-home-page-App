import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import React from 'react'
import { useTheme } from '@emotion/react';
import Cardcontainer from './Cardcontainer';
import Rightsidebare from './Rightsidebare';
import { Avatar, Divider, Fab, IconButton, TextField, Tooltip } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import Drawerr from './Drawerr';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Typography from '@mui/material/Typography';
import ImageIcon from '@mui/icons-material/Image';                     
import TagFacesIcon from '@mui/icons-material/TagFaces';
import VideoCameraFrontIcon from '@mui/icons-material/VideoCameraFront';
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';
import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';


const Mainpage = ({setmode,mode,opendrawer,setopendrawer}) => {

  const theme=useTheme();


  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };
  
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);




  const fabStyle = {
    position: 'absolute',
    bottom: 16,
    right:'16',
  };

  const fab = [
    {
      color: 'primary',
      sx: fabStyle,
      icon: <AddIcon />,
      label: 'Add',
    },
    
  ];


  
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));


 

      
  return (
    <Stack   divider={<Divider orientation="vertical" flexItem />}  direction="row"  marginTop="60px" >
  <Item   sx={{flexGrow:'3.5',backgroundColor:theme.palette.mode==="light"?'#f7f7f7':''}}  >
  
<Drawerr opendrawer={opendrawer} setopendrawer={setopendrawer} setmode={setmode} mode={mode} />


  </Item>
  
  
  
  
  
  
  
  <Item sx={{flexGrow:'2'}}>
<Cardcontainer/>
  </Item>




  <Item sx={{flexGrow:'6.5',display:{xs:'none',md:'block',backgroundColor:theme.palette.mode==="light"?'#f7f7f7':''}}}>
  
  <Rightsidebare/>
  
  </Item>




  <Tooltip title="Add Post">

  <Fab onClick={handleOpen} sx={{position:'fixed',right:'10px',bottom:'20px',}} aria-label={fab.label} color="primary">
          <AddIcon/>
          </Fab>
          </Tooltip>



      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}

        sx={{width:{xs:'97%'}}}
      >
        <Fade in={open}>
          <Box sx={style}>
            <Typography mt="0" textAlign="center" id="transition-modal-title" variant="h6" component="h2">
            Create Post
            </Typography>
            <Box sx={{display:'flex',mx:'3px'}}>
            <Avatar sx={{mx:'3px'}} alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
            <Typography  id="transition-modal-description" sx={{ mt: 1 }}>
            Ahmed younis
            </Typography>
            </Box>
            <TextField mt="3px" fullWidth multiline rows={4} id="standard-basic" label="Write the post here" variant="standard" />
         
<Box sx={{display:'flex'}}>


<IconButton>
  <ImageIcon color='primary'/>
</IconButton>

<IconButton>
  <TagFacesIcon color='secondary'/>
</IconButton>


<IconButton>
  <VideoCameraFrontIcon color='success'/>
</IconButton>


<IconButton>
  <PersonAddAlt1Icon color='error'/>
</IconButton>

</Box>

<Stack direction="row" sx={{marginTop:'5px'}}>
<ButtonGroup
      disableElevation
      variant="contained"
      aria-label="Disabled button group"
      sx={{width:'100%'}}
    >
      <Button sx={{flexGrow:1}}>Post</Button>
      <Button>
<CalendarMonthIcon/>
      </Button>
    </ButtonGroup>
</Stack>
    
          </Box>
        </Fade>
      </Modal>



</Stack>
  )
}

export default Mainpage
