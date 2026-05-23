import { Drawer, Box, Typography, styled } from "@mui/material";
import { ArrowBack } from "@mui/icons-material";

// components 
import Profile from "./Profile";


//THE PROFILE SECTION COLOR
const Header = styled(Box)`
  background:rgb(0, 0, 0);
  height: 107px;
  color:rgb(255, 255, 255);
  display: flex;
  & > svg,
  & > p {
    margin-top: auto;
    padding: 15px;
    font-weight: 600;
  }
`;



//THE THREE COLOR STRIPS IN PROFILE
const Component = styled(Box)`
  background:rgb(0, 0, 0);
  height: 85%;
`;

const Text = styled(Typography)`
  font-size: 18px;
`;

const drawerSyle = {
  left: 20,
  top: 17,
  height: "95%",
  width: "30%",
  boxShadow: "none",
};

const InfoDrawer = ({ open, setOpen }) => {
  // {open: true, setOpen: function, .... 100} = props
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <Drawer
      open={open}
      onClose={handleClose}
      PaperProps={{ sx: drawerSyle }}
      style={{ zIndex: 1500 }}
    >
      {/* upper part  */}
      <Header>
        <ArrowBack onClick={() => setOpen(false)} />
        <Text>Profile</Text>
      </Header>

      {/* lower part  */}
      <Component>
        <Profile/>
      </Component>
    </Drawer>
  );
};

export default InfoDrawer;
