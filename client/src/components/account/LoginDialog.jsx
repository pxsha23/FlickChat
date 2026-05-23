// import { useContext } from "react";

// import { Dialog, Box, Typography, List, ListItem, styled } from "@mui/material";

// import { qrCodeImage } from "../../constants/data";
// import { AccountContext } from "../../context/AccountProvider";
// import { addUser } from "../../service/api";

// import { GoogleLogin } from "@react-oauth/google";
// import jwt_decode from "jwt-decode";

// const Component = styled(Box)`
//   display: flex;
// `;

// const QRCode = styled("img")({
//   height: "264px",
//   width: "264px",
//   margin: "56px 0 0 147px",
// });

// const Title = styled(Typography)`
//   font-size: 26px;
//   color: #525252;
//   font-weight: 300;
//   font-family: inherit;
//   margin-bottom: 25px;
// `;

// const StyledList = styled(List)`
//   & > li {
//     padding: 0;
//     margin-top: 15px;
//     font-size: 18px;
//     line-height: 28px;
//     color: #4a4a4a;
//   }
// `;

// const Container = styled(Box)`
//   padding: 56px 0px 56px 56px;
// `;

// const dialogstyle = {
//   height: "96%",
//   marginTop: "12%",
//   //   width: '60%',
//   width: "1000px",
//   maxWidth: "100%",
//   maxHeight: "100%",
//   boxShadow: "none",
//   overflow: "hidden",
// };

// const LoginDialog = () => {
//   const { setAccount } = useContext(AccountContext);

//   const onLoginSuccess = async (res) => {
//     const decoded = jwt_decode(res.credential);
//     setAccount(decoded);
//     await addUser(decoded);
//   };

//   const onLoginError = (err) => {
//     console.log(err);
//   };
//   return (
//     <Dialog open={true} PaperProps={{ sx: dialogstyle }} hideBackdrop={true}>
//       <Component>
//         <Container>
//           <Title>Use WhatsApp on your computer</Title>
//           <StyledList>
//             <ListItem>1. Open WhatsApp on your phone</ListItem>
//             <ListItem>
//               2. Tap Menu or Settings and select Linked Devices
//             </ListItem>
//             <ListItem>
//               3. Point your phone to this screen to capture the QR code
//             </ListItem>
//           </StyledList>
//         </Container>

//         <Box style={{ position: "relative" }}>
//           <QRCode src={qrCodeImage} alt="QR Code" />
//           <Box
//             style={{
//               position: "absolute",
//               top: "50%",
//               width: "40%",
//               transform: "translateX(108%) translateY(-25%)",
//             }}
//           >
//             <GoogleLogin onSuccess={onLoginSuccess} onError={onLoginError} />
//           </Box>
//         </Box>
//       </Component>
//     </Dialog>
//   );
// };

// export default LoginDialog;


























// import { useContext } from "react";
// import { Dialog, Box, Typography, List, ListItem, styled } from "@mui/material";
// import { qrCodeImage } from "../../constants/data";
// import { AccountContext } from "../../context/AccountProvider";
// import { addUser } from "../../service/api";
// import { GoogleLogin } from "@react-oauth/google";
// import jwt_decode from "jwt-decode";

// const Component = styled(Box)`
//   display: flex;
//   flex-direction: column;
//   background-color: #23272a;
//   color: #ffffff;
//   padding: 40px;
// `;

// const MainTitle = styled(Typography)`
//   font-size: 48px;
//   font-weight: 300;
//   text-align: center;
//   margin-bottom: 16px;
// `;

// const SubTitle = styled(Typography)`
//   font-size: 20px;
//   font-weight: 300;
//   text-align: center;
//   color: #b9bbbe;
//   margin-bottom: 48px;
// `;

// const ContentWrapper = styled(Box)`
//   display: flex;
//   justify-content: center;
//   align-items: flex-start;
//   flex-wrap: wrap;
// `;

// const QRCode = styled("img")({
//   height: "264px",
//   width: "264px",
//   borderRadius: "8px",
//   margin: "0 40px",
// });

// const InfoBox = styled(Box)`
//   max-width: 400px;
// `;

// const StyledList = styled(List)`
//   & > li {
//     padding: 0;
//     margin-top: 15px;
//     font-size: 18px;
//     line-height: 28px;
//     color:rgb(156, 164, 164);
//   }
// `;

// const dialogstyle = {
//   height: "96%",
//   marginTop: "4%",
//   width: "900px",
//   maxWidth: "100%",
//   maxHeight: "100%",
//   boxShadow: "none",
//   overflow: "hidden",
//   backgroundColor: "#23272a",
//   borderRadius: "8px"
// };

// const LoginDialog = () => {
//   const { setAccount } = useContext(AccountContext);

//   const onLoginSuccess = async (res) => {
//     const decoded = jwt_decode(res.credential);
//     setAccount(decoded);
//     await addUser(decoded);
//   };

//   const onLoginError = (err) => {
//     console.log(err);
//   };

//   return (
//     <Dialog open={true} PaperProps={{ sx: dialogstyle }} hideBackdrop={true}>
//       <Component>
//         <MainTitle>Welcome to FlickChat</MainTitle>
//         <SubTitle>The modern, secure, and stylish way to connect in real-time.</SubTitle>

//         <ContentWrapper>
//           <InfoBox>
//             <Typography variant="h6" gutterBottom>
//               Connect your account
//             </Typography>
//             <StyledList>
//               <ListItem>1. Open the app on your phone</ListItem>
//               <ListItem>2. Tap Menu or Settings → Linked Devices</ListItem>
//               <ListItem>3. Point your phone to this screen</ListItem>
//             </StyledList>
//             <Box mt={4}>
//               <GoogleLogin onSuccess={onLoginSuccess} onError={onLoginError} />
//             </Box>
//           </InfoBox>

//           <QRCode src={qrCodeImage} alt="QR Code" />
//         </ContentWrapper>
//       </Component>
//     </Dialog>
//   );
// };

// export default LoginDialog;


















import { useContext } from "react";
import { Dialog, Box, Typography, List, ListItem, styled, Button } from "@mui/material";
import { qrCodeImage } from "../../constants/data";
import { AccountContext } from "../../context/AccountProvider";
import { addUser } from "../../service/api";
import { GoogleLogin } from "@react-oauth/google";
import jwt_decode from "jwt-decode";

// === Styled Components ===



//THE LOGIN BOX COLOR
const Component = styled(Box)`
  display: flex;
  flex-direction: column;
  background-color:rgb(0, 0, 0);
  color:rgb(247, 247, 247);
  padding: 60px 40px;
  border-radius: 20px;
  font-family: 'Poppins', sans-serif;
`;

const MainTitle = styled(Typography)`
  font-size: 42px;
  font-weight: 300;
  text-align: center;
  margin-bottom: 12px;
  letter-spacing: 2px;
`;

const SubTitle = styled(Typography)`
  font-size: 18px;
  font-weight: 300;
  text-align: center;
  color: #bbbbbb;
  margin-bottom: 40px;
`;

const ContentWrapper = styled(Box)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 60px;
`;

const QRCode = styled("img")({
  height: "264px",
  width: "264px",
  borderRadius: "16px",
  boxShadow: "0 0 24px rgba(97, 150, 237, 0.1)",
});

const InfoBox = styled(Box)`
  max-width: 420px;
`;

const StyledList = styled(List)`
  & > li {
    padding: 0;
    margin-top: 15px;
    font-size: 16px;
    line-height: 26px;
    color: #999999;
  }
`;

const dialogstyle = {
  height: "90%",
  marginTop: "5%",
  width: "900px",
  maxWidth: "100%",
  maxHeight: "100%",
  boxShadow: "none",
  overflow: "hidden",
  backgroundColor: "transparent",
  borderRadius: "20px",
};

const StyledButton = styled(Button)`
  margin-top: 30px;
  background-color:rgb(255, 255, 255);
  color:rgb(128, 128, 128);
  font-weight: 600;
  border-radius: 50px;
  padding: 10px 30px;
  text-transform: none;
  font-size: 14px;
  &:hover {
    background-color: #dddddd;
  }
`;

// === Component ===

const LoginDialog = () => {
  const { setAccount } = useContext(AccountContext);

  const onLoginSuccess = async (res) => {
    const decoded = jwt_decode(res.credential);
    setAccount(decoded);
    await addUser(decoded);
  };

  const onLoginError = (err) => {
    console.log(err);
  };

  return (
    <Dialog open={true} PaperProps={{ sx: dialogstyle }} hideBackdrop={true}>
      <Component>
        <MainTitle>FLICKCHAT</MainTitle>
        <SubTitle>Modern. Private. Real-time.</SubTitle>

        <ContentWrapper>
          <InfoBox>
            <Typography variant="h6" gutterBottom style={{ color: "#ffffff", fontWeight: 400 }}>
              Link Your Account
            </Typography>
            <StyledList>
              <ListItem>1. Open the app on your phone</ListItem>
              <ListItem>2. Go to Menu → Linked Devices</ListItem>
              <ListItem>3. Scan the QR Code on this screen</ListItem>
            </StyledList>

            <Box mt={4}>
              <GoogleLogin onSuccess={onLoginSuccess} onError={onLoginError} />
              <StyledButton>Learn More</StyledButton>
            </Box>
          </InfoBox>

          <QRCode src={qrCodeImage} alt="QR Code" />
        </ContentWrapper>
      </Component>
    </Dialog>
  );
};

export default LoginDialog;
