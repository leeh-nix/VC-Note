import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import VideocamRoundedIcon from '@mui/icons-material/VideocamRounded';
import SmsRoundedIcon from '@mui/icons-material/SmsRounded';
import PersonRoundedIcon from '@mui/icons-material/PersonRounded';
import SettingsRoundedIcon from '@mui/icons-material/SettingsRounded';


const drawerWidth = 50;

export default function PermanentDrawerLeft() {
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}
      >
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <List>
          {(
              <ListItemButton>
                <ListItemIcon>
                  {<HomeRoundedIcon />}
                </ListItemIcon>
              </ListItemButton>
          )}
          {(
              <ListItemButton>
                <ListItemIcon>
                  {<VideocamRoundedIcon />}
                </ListItemIcon>
              </ListItemButton>
          )}
        {(
              <ListItemButton>
                <ListItemIcon>
                  {<SmsRoundedIcon />}
                </ListItemIcon>
              </ListItemButton>
        )}
        {(
              <ListItemButton>
                <ListItemIcon>
                  {<PersonRoundedIcon />}
                </ListItemIcon>
              </ListItemButton>
          )}
          {(
              <ListItemButton>
                <ListItemIcon>
                  {<SettingsRoundedIcon />}
                </ListItemIcon>
              </ListItemButton>
          )}
        </List>
      </Drawer>
    </Box>
  );
}