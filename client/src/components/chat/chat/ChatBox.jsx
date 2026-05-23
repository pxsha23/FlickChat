// // import { useContext, useEffect, useState } from "react";

// // import { Box } from "@mui/material";

// // import { AccountContext } from "../../../context/AccountProvider";
// // import {getConversation} from '../../../service/api.js'

// // // components 
// // import ChatHeader from "./ChatHeader";
// // import Messages from "./Messages";

// // const ChatBox = ()=>{

// //     const {person, account} = useContext(AccountContext);

// //     const [conversation, setConversation] = useState({});

// //     useEffect(()=>{
// //         const getConversationDetails = async () => {
// //             let data = await getConversation({senderId : account.sub, receiverId : person.sub})
// //             setConversation(data);
// //         }
// //         getConversationDetails();
// //     }, [person.sub])

// //     return(
// //         <Box style={{height: '75%'}}>
// //             <ChatHeader person={person}/>
// //             <Messages person={person} conversation={conversation}/>
// //         </Box>
// //     )
// // }

// // export default ChatBox;



















// import { useContext, useEffect, useState } from "react";
// import { Box, styled } from "@mui/material";

// import { AccountContext } from "../../../context/AccountProvider";
// import { getConversation } from "../../../service/api.js";

// // components 
// import ChatHeader from "./ChatHeader";
// import Messages from "./Messages";

// const ChatContainer = styled(Box)`
//   height: 75%;
//   background-color: #000;
//   border-radius: 8px;
//   position: relative;
//   overflow: hidden;
//   box-shadow: 0 0 20px rgba(255, 255, 255, 0.2),
//               0 0 40px rgba(255, 255, 255, 0.1),
//               0 0 60px rgba(255, 255, 255, 0.05);
//   padding: 0;
// `;

// const ChatBox = () => {
//   const { person, account } = useContext(AccountContext);
//   const [conversation, setConversation] = useState({});

//   useEffect(() => {
//     const getConversationDetails = async () => {
//       let data = await getConversation({
//         senderId: account.sub,
//         receiverId: person.sub,
//       });
//       setConversation(data);
//     };
//     getConversationDetails();
//   }, [person.sub, account.sub]);

//   return (
//     <ChatContainer>
//       <ChatHeader person={person} />
//       <Messages person={person} conversation={conversation} />
//     </ChatContainer>
//   );
// };

// export default ChatBox;















import { useContext, useEffect, useState } from "react";
import { Box, styled } from "@mui/material";

import { AccountContext } from "../../../context/AccountProvider";
import { getConversation } from "../../../service/api.js";

// components 
import ChatHeader from "./ChatHeader";
import Messages from "./Messages";
import Footer from "./Footer"; // Assuming this is your typing bar

const ChatContainer = styled(Box)`
  height: 100%;
  display: flex;
  flex-direction: column;
  background-color: #000;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 0 20px rgba(22, 180, 180, 0.2),
              0 0 40px rgba(110, 101, 101, 0.1),
              0 0 60px rgba(150, 20, 20, 0.05);
`;

const MessagesWrapper = styled(Box)`
  flex: 1;
  overflow-y: auto;
`;

const ChatBox = () => {
  const { person, account } = useContext(AccountContext);
  const [conversation, setConversation] = useState({});

  useEffect(() => {
    const getConversationDetails = async () => {
      let data = await getConversation({
        senderId: account.sub,
        receiverId: person.sub,
      });
      setConversation(data);
    };
    getConversationDetails();
  }, [person.sub, account.sub]);

  return (
    <ChatContainer>
      <ChatHeader person={person} />
      <MessagesWrapper>
        <Messages person={person} conversation={conversation} />
      </MessagesWrapper>
      <Footer conversation={conversation} /> {/* ← your text input bar */}
    </ChatContainer>
  );
};

export default ChatBox;
