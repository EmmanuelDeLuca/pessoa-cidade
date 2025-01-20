import { Avatar, Divider, Drawer, Icon, List, ListItemButton, ListItemIcon, ListItemText, useMediaQuery, useTheme } from "@mui/material";
import { Box } from "@mui/system";
import { useDrawerContext } from "../../contexts";

export const MenuLateral: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const theme = useTheme();
  const smDown = useMediaQuery(theme.breakpoints.down('sm'))

  const { isDrawerOpen } = useDrawerContext();
  return (
    <>
      <Drawer open={isDrawerOpen} variant={smDown ? 'temporary' : 'permanent'}>
        <Box width={theme.spacing(28)} display="flex" flexDirection="column" height="100%">
          <Box width="100%" height={theme.spacing(20)} display="flex" alignItems='center' justifyContent="center">
            <Avatar 
            sx={{height: theme.spacing(10) , width: theme.spacing(10)}}
            src="/static/images/avatar/1.jpg" />
          </Box>

          <Divider/>

          <Box flex={1}>
            <List component="nav">
                <ListItemButton>
                    <ListItemIcon>
                        <Icon>home</Icon>
                    </ListItemIcon>
                    <ListItemText primary="Página Inicial"/>
                </ListItemButton>
            </List>
          </Box>
        </Box>
      </Drawer>

      <Box height="100vh" marginLeft={smDown ? 0 : theme.spacing(28)}>
        {children}
      </Box>
    </>
  );
};
