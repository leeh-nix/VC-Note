import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import { IconButton, Tooltip } from "@mui/material";
import { ReactComponent as TestIcn } from "../Assets/rightsideicontest.svg";


const drawerWidth = 70;

export default function PermanentDrawerRight() {
  return (
    <Box sx={{ display: 'flex' }}>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink:0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="permanent"
        anchor="right"
      >

        {/* Should contain participants list */}
        <Tooltip title={"rileyyy"}>
          <IconButton>
            <TestIcn />
          </IconButton>
        </Tooltip>
        <Tooltip title={"Kuroko"}>
          <IconButton>
            <TestIcn />
          </IconButton>
        </Tooltip>
        <Tooltip title={"Bisskut"}>
          <IconButton>
            <TestIcn />
          </IconButton>
        </Tooltip>
        <Tooltip title={"Her"}>
          <IconButton>
            <TestIcn />
          </IconButton>
        </Tooltip>
      </Drawer>
    </Box>
  );
}