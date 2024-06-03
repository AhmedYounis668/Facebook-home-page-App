import React, { useRef, useState } from 'react'
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import Badge from '@mui/material/Badge';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MoreIcon from '@mui/icons-material/MoreVert';
import { Avatar } from '@mui/material';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import { convertLength } from '@mui/material/styles/cssUtils';

const AppBarr = ({setmode,mode,opendrawer,setopendrawer}) => {

  const[mobilemenueisopen,setmobilemenueisopen]=useState(false);

  const[menueweb,setmenueweb]=useState(false);


  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('md')]: {
        width: '20ch',
      },
    },
  }));



  const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }));
  



  const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  }));

const menueelement=useRef(null);
  const renderMenu = (
    <Menu
       anchorEl={menueelement.current}

      
      open={menueweb}
       onClose={()=>{
        setmenueweb(false)
       }}
    >
      <MenuItem >Profile</MenuItem>
      <MenuItem >My account</MenuItem>
    </Menu>
  );


const menueelementmobile=useRef(null);
  const renderMobileMenu = (
    <Menu
      anchorEl={menueelementmobile.current}
      
      
      open={mobilemenueisopen}
       onClose={()=>{
        setmobilemenueisopen(false)
       }}
    >
      <MenuItem>
        <IconButton size="large" aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={4} color="error">
            <MailIcon />
          </Badge>
        </IconButton>
        <p>Messages</p>
      </MenuItem>
      <MenuItem>
        <IconButton
          size="large"
          aria-label="show 17 new notifications"
          color="inherit"
        >
          <Badge badgeContent={17} color="error">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem >
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
          
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );


  return (

    <Box sx={{ flexGrow: 1 ,position:'fixed',top:'0',right:'0',left:'0',zIndex:'2000'}}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2}}
            onClick={()=>{
              if(opendrawer==="none")
              {
              setopendrawer("block")

              }
              else
              {
                setopendrawer("none")

              }
console.log(opendrawer)
            }}
          >
            <MenuIcon />
          </IconButton>
          


{/* //dark mode icon */}
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            sx={{ mr: 2 }}

            onClick={()=>{
              {
              mode=="light"?setmode("dark"):setmode("light")
              }
            }}
          >
            <DarkModeIcon />
          </IconButton>
          



          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ display: { xs: 'none', sm: 'block' } }}
          >
            Ahmed Younis
          </Typography>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            <IconButton   size="large" aria-label="show 4 new mails" color="inherit">
              <Badge badgeContent={4} color="error">
                <MailIcon />
              </Badge>
            </IconButton>
            <IconButton
              size="large"
              aria-label="show 17 new notifications"
              color="inherit"
            >
              <Badge  badgeContent={17} color="error">
                <NotificationsIcon />
              </Badge>
            </IconButton>
            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-haspopup="true"
              // onClick={handleProfileMenuOpen}
              color="inherit"
              ref={menueelement}

          onClick={()=>{
            setmenueweb(!menueweb)
          }}
            >
              {/* <AccountCircle /> */}
              <Avatar alt="Travis Howard" src=".\images\img.jpg" />
            </IconButton>
          </Box>
          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="show more"
              color="inherit"
              ref={menueelementmobile}

              onClick={()=>{
                setmobilemenueisopen(!mobilemenueisopen)
              }}
            >
              <MoreIcon  />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
       {renderMobileMenu}
       {renderMenu} 
    </Box>
  )
}




export default AppBarr
