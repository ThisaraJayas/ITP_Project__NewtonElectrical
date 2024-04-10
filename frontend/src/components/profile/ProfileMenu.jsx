import * as React from "react";
import Divider from "@mui/material/Divider";
import Paper from "@mui/material/Paper";
import MenuList from "@mui/material/MenuList";
import MenuItem from "@mui/material/MenuItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemIcon from "@mui/material/ListItemIcon";
import Typography from "@mui/material/Typography";
import { IoPersonCircleSharp } from "react-icons/io5";
import {Link} from 'react-router-dom'
import { FaGift } from "react-icons/fa";
import { AiFillSchedule } from "react-icons/ai";
import { FaPhoneVolume } from "react-icons/fa6";
import { LuLogOut } from "react-icons/lu";
import { RiDeleteBack2Fill } from "react-icons/ri";

export default function ProfileMenu() {
  return (
    <div>
      <Paper sx={{ width: 320, maxWidth: "100%", boxShadow: 6 }}>
        <MenuList>
          <div className="h-24 mt-6 text-center">Manage My Account</div>
          <Divider />
          <Link to={'/profile'} >
          <MenuItem>
            <ListItemIcon>
              <IoPersonCircleSharp style={{ width: "20px", height: "20px" }} />
            </ListItemIcon>
            <ListItemText>My Account</ListItemText>
            <Typography variant="body2" color="text.secondary">
              .
            </Typography>
          </MenuItem>
          </Link>
          <Divider />
          <Link to={'/rewards'}>
          <MenuItem>
            <ListItemIcon><FaGift style={{ width: "20px", height: "20px" }}/></ListItemIcon>
            <ListItemText>Rewards</ListItemText>
            <Typography variant="body2" color="text.secondary">
              .
            </Typography>
          </MenuItem>
          </Link>
          <Divider />
          <Link to={'/appointemts'}>
          <MenuItem>
            <ListItemIcon><AiFillSchedule style={{ width: "20px", height: "20px" }}/></ListItemIcon>
            <ListItemText>Appointments</ListItemText>
            <Typography variant="body2" color="text.secondary">
              .
            </Typography>
          </MenuItem>
          </Link>
          <Divider />
          <Link to={'/contact'}>
          <MenuItem>
            <ListItemIcon><FaPhoneVolume style={{ width: "20px", height: "20px" }}/></ListItemIcon>
            <ListItemText>Contact Support</ListItemText>
            <Typography variant="body2" color="text.secondary">
              .
            </Typography>
          </MenuItem>
          </Link>
          <Divider />
          <Link to={'/logout'}>
          <MenuItem>
            <ListItemIcon><LuLogOut  style={{ width: "20px", height: "20px" }}/></ListItemIcon>
            <ListItemText>Logout</ListItemText>
            <Typography variant="body2" color="text.secondary">
              .
            </Typography>
          </MenuItem>
          </Link>
          <Divider />
          <Link to={'/deleteAccount'}>
          <MenuItem>
            <ListItemIcon><RiDeleteBack2Fill style={{ width: "20px", height: "20px" }}/></ListItemIcon>
            <ListItemText>Delete Account</ListItemText>
            <Typography variant="body2" color="text.secondary">
              .
            </Typography>
          </MenuItem>
          </Link>
        </MenuList>
        
      </Paper>
    </div>
  );
}
