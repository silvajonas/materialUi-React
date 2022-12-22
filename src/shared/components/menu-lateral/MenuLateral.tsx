import { Avatar, Box, Divider, Drawer, Icon, List, ListItemButton, ListItemIcon, ListItemText, useMediaQuery, useTheme } from "@mui/material";
import React from "react";
import { useDrawerContext } from "../../contexts";

interface IMenuLateral {
  children: React.ReactNode;
}

export const MenuLateral: React.FC<IMenuLateral> = ({ children }) => {
    const theme = useTheme()
    const smDown = useMediaQuery(theme.breakpoints.down('sm'));

    const { isDrawerOpen, toogleDrawerOpen } = useDrawerContext()

  return (
    <>
      <Drawer open={isDrawerOpen} variant={smDown ? "temporary" : "permanent"} onClose={toogleDrawerOpen}>
        <Box width={theme.spacing(28)} height={'100%'} display={'flex'} flexDirection={'column'}>

            <Box width={'100%'} height={theme.spacing(20)} display='flex' alignItems={'center'} justifyContent={'center'}>
                <Avatar alt="Cindy Baker" sx={{height: theme.spacing(12), width: theme.spacing(12)}}
                    src="https://scontent-gig2-1.xx.fbcdn.net/v/t1.18169-9/1424549_716336981789414_3500012594199861238_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=47P4Wp47BI8AX_aaw8Z&_nc_ht=scontent-gig2-1.xx&oh=00_AfDXV5wxu2ZnRRmLxf0lmK_CMg-_aL8yeuiHeR5jHwlNzg&oe=63C4A8E1" />
            </Box>

            <Divider />

            <Box flex={1}>
                <List component='nav'>
                    <ListItemButton>
                        <ListItemIcon>
                            <Icon>home</Icon>
                        </ListItemIcon>
                        <ListItemText primary="Página Inicial" />
                    </ListItemButton>       
                </List>
            </Box>
        
          
        </Box>
      </Drawer>

      <Box height={'100vh'} marginLeft={smDown ? 0 : theme.spacing(28)}>
        {children}
      </Box>
    </>
  );
};
