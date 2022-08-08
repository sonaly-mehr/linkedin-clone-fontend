import React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import InboxIcon from '@mui/icons-material/Inbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import { Box } from '@mui/material';
import { HiUserGroup } from 'react-icons/hi';
import { FaHashtag } from 'react-icons/fa';
import './LinkedinFeed.css'

const LeftSidebar = () => {
    return (
        <div className='left-sidebar'>
             <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      <nav aria-label="main mailbox folders">
        <h6>Recents</h6>
        <List>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <InboxIcon style={{fontSize:'1.2rem'}}/>
              </ListItemIcon>
              <ListItemText primary="Email Marketing Conference"/>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <DraftsIcon style={{fontSize:'1.2rem'}}/>
              </ListItemIcon>
              <ListItemText primary="Dubai Marketing" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <DraftsIcon style={{fontSize:'1.2rem'}}/>
              </ListItemIcon>
              <ListItemText primary="Wordpress" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <DraftsIcon style={{fontSize:'1.2rem'}}/>
              </ListItemIcon>
              <ListItemText primary="Fintech" />
            </ListItemButton>
          </ListItem>
        </List>


        <h6 style={{color: '#056ED7'}}>Groups</h6>
        <List>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <HiUserGroup style={{fontSize:'1.2rem'}}/>
              </ListItemIcon>
              <ListItemText primary="Dubai Marketing"/>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <HiUserGroup style={{fontSize:'1.2rem'}}/>
              </ListItemIcon>
              <ListItemText primary="Wordpress" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <HiUserGroup style={{fontSize:'1.2rem'}}/>
              </ListItemIcon>
              <ListItemText primary="Digital Marketing experts" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <HiUserGroup style={{fontSize:'1.2rem'}}/>
              </ListItemIcon>
              <ListItemText primary="Show More" />
            </ListItemButton>
          </ListItem>
        </List>

        <h6 style={{color: '#056ED7'}}>Followed Hashtags</h6>
        <List>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <FaHashtag style={{fontSize:'1.2rem'}}/>
              </ListItemIcon>
              <ListItemText primary="fintech"/>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <FaHashtag style={{fontSize:'1.2rem'}}/>
              </ListItemIcon>
              <ListItemText primary="cloud" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <FaHashtag style={{fontSize:'1.2rem'}}/>
              </ListItemIcon>
              <ListItemText primary="seotips" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <FaHashtag style={{fontSize:'1.2rem'}}/>
              </ListItemIcon>
              <ListItemText primary="Show More" />
            </ListItemButton>
          </ListItem>
        </List>

      </nav>
      <Divider />
    </Box>
        </div>
    );
};

export default LeftSidebar;