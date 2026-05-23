// import { useContext } from "react";

// import { Box, Typography, styled } from "@mui/material";
// import { Search, MoreVert } from "@mui/icons-material";

// import { defaultProfilePicture } from "../../../constants/data";

// import { AccountContext } from "../../../context/AccountProvider";

// const Header = styled(Box)`
//   height: 44px;
//   background: #ededed;
//   padding: 8px 16px;
//   display: flex;
//   align-items: center;
// `;

// const Image = styled("img")({
//   height: 40,
//   width: 40,
//   objectFit: "cover",
//   borderRadius: "50%",
// });

// const Name = styled(Typography)`
//   margin-left: 12px !important;
// `;

// const Status = styled(Typography)`
//   margin-left: 12px !important;
//   font-size: 12px;
//   color: rgb(0, 0, 0, 0.6);
// `;
// const RightContainer = styled(Box)`
//   margin-left: auto;
//   & > svg {
//     padding: 8px;
//     font-size: 24px;
//     color: #000;
//   }
// `;

// const ChatHeader = ({person}) => {

//   const {activeUsers} = useContext(AccountContext);

//   return (
//     <Header>
//       <Image src={person.picture} alt="dp" />
//       <Box>
//         <Name>{person.name}</Name>
//         <Status>{activeUsers?.find(user => user.sub === person.sub) ? 'Online' : 'Offline'}</Status>
//       </Box>
//       <RightContainer>
//         <Search />
//         <MoreVert />
//       </RightContainer>
//     </Header>
//   );
// };

// export default ChatHeader;




























import { useContext } from "react";
import { Box, Typography, styled } from "@mui/material";
import { Search, MoreVert } from "@mui/icons-material";

import { defaultProfilePicture } from "../../../constants/data";
import { AccountContext } from "../../../context/AccountProvider";

const Header = styled(Box)`
  height: 60px;
  background:rgb(0, 0, 0);
  padding: 8px 16px;
  display: flex;
  align-items: center;
  border-bottom: 1px solidrgb(0, 102, 255);
`;

const Image = styled("img")({
  height: 40,
  width: 40,
  objectFit: "cover",
  borderRadius: "50%",
});

// THE NAME AT THE TOP OF THE CHAT
const Name = styled(Typography)`
  margin-left: 12px !important;
  font-size: 16px;
  font-weight: 500;
  color:rgb(255, 255, 255);
`;

// THE OFFLINE MARK
const Status = styled(Typography)`
  margin-left: 12px !important;
  font-size: 12px;
  color:rgb(139, 142, 145);
`;

// THE SEARCH BAR AND THE THREE DOTS
const RightContainer = styled(Box)`
  margin-left: auto;
  display: flex;
  align-items: center;
  
  & > svg {
    padding: 8px;
    font-size: 24px;
    color:rgb(255, 255, 255);
    cursor: pointer;
    border-radius: 6px;
    transition: background 0.2s ease;
  }

  & > svg:hover {
    background: rgba(255, 255, 255, 0.1);
  }
`;

const ChatHeader = ({ person }) => {
  const { activeUsers } = useContext(AccountContext);

  return (
    <Header>
      <Image src={person.picture || defaultProfilePicture} alt="dp" />
      <Box>
        <Name>{person.name}</Name>
        <Status>
          {activeUsers?.find(user => user.sub === person.sub) ? 'Online' : 'Offline'}
        </Status>
      </Box>
      <RightContainer>
        <Search />
        <MoreVert />
      </RightContainer>
    </Header>
  );
};

export default ChatHeader;
