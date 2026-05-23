// import { useContext, useState } from "react";

// import { Box, styled } from "@mui/material";
// import { Chat as MessageIcon } from "@mui/icons-material";

// import { AccountContext } from "../../../context/AccountProvider";

// // components
// import HeaderMenu from "./HeaderMenu";
// import InfoDrawer from "../../drawer/InfoDrawer";


// //THE PROFILE BAR COLOR
// const Component = styled(Box)`
//   height: 44px;
//   background:rgb(255, 255, 255);
//   padding: 8px 16px;
//   display: flex;
//   align-items: center;
// `;
// const Wrapper = styled(Box)`
//   margin-left: auto;
//   & > * {
//     margin-left: 2px;
//     padding: 8px;
//     color: #000;
//   }
//   & :first-child {
//     font-size: 22px;
//     margin-right: 8px;
//     margin-top: 3px;
//   }
// `;

// //THE PROFILE IMAGE
// const Image = styled("img")({
//   height: 40,
//   width: 40,
//   borderRadius: "50%",
// });
// const Header = () => {
//   const [openDrawer, setOpenDrawer] = useState(false);

//   const { account } = useContext(AccountContext);

//   const toggleDrawer = () => {
//     setOpenDrawer(true);
//   };
//   return (
//     <>
//       <Component>
//         <Image src={account.picture} alt="dp" onClick={() => toggleDrawer()} />
//         <Wrapper>
//           <MessageIcon />
//           <HeaderMenu setOpenDrawer={setOpenDrawer} />
//         </Wrapper>
//       </Component>
//       <InfoDrawer open={openDrawer} setOpen={setOpenDrawer} />
//     </>
//   );
// };

// export default Header;











import { useContext, useState } from "react";
import { Box, styled } from "@mui/material";
import { Chat as MessageIcon } from "@mui/icons-material";

import { AccountContext } from "../../../context/AccountProvider";

// components
import HeaderMenu from "./HeaderMenu";
import InfoDrawer from "../../drawer/InfoDrawer";

// DARK HEADER BAR
const Component = styled(Box)`
  height: 44px;
  background: #000; /* black header background */
  padding: 8px 16px;
  display: flex;
  align-items: center;
`;

// ICON WRAPPER
const Wrapper = styled(Box)`
  margin-left: auto;
  & > * {
    margin-left: 2px;
    padding: 8px;
    color: #fff; /* white icons on dark bg */
  }
  & :first-child {
    font-size: 22px;
    margin-right: 8px;
    margin-top: 3px;
  }
`;

// PROFILE PICTURE
const Image = styled("img")({
  height: 40,
  width: 40,
  borderRadius: "50%",
  cursor: "pointer",
  border: "1px solid #555"
});

const Header = () => {
  const [openDrawer, setOpenDrawer] = useState(false);
  const { account } = useContext(AccountContext);

  const toggleDrawer = () => {
    setOpenDrawer(true);
  };

  return (
    <>
      <Component>
        <Image src={account.picture} alt="dp" onClick={toggleDrawer} />
        <Wrapper>
          <MessageIcon />
          <HeaderMenu setOpenDrawer={setOpenDrawer} />
        </Wrapper>
      </Component>
      <InfoDrawer open={openDrawer} setOpen={setOpenDrawer} />
    </>
  );
};

export default Header;
