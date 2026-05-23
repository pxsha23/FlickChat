import { useContext } from "react";

import { AppBar, Toolbar, styled, Box } from "@mui/material";

import { AccountContext } from "../context/AccountProvider";

// components
import LoginDialog from "./account/LoginDialog";
import ChatDialog from "./chat/ChatDialog";



//THE BACKGROUND TWO COLORS
const Component = styled(Box)`
  height: 100vh;
  background-color:rgb(255, 255, 255);
`;
const Header = styled(AppBar)`
  height: 125px;
  background-color:rgb(255, 255, 255);
  box-shadow: none;
`;


// THE LOGIN PAGE COLOUR
const LoginHeader = styled(AppBar)`
  height: 222px;
  background-color:rgb(255, 255, 255);
  box-shadow: none;
`;

const Messenger = () => {
  const { account } = useContext(AccountContext);

  return (
    <Component>
      {account ? (
        <>
          <Header>
            <Toolbar></Toolbar>
          </Header>
          <ChatDialog />
        </>
      ) : (
        <>
          <LoginHeader>
            <Toolbar></Toolbar>
          </LoginHeader>
          <LoginDialog />
        </>
      )}
    </Component>
  );
};

export default Messenger;
