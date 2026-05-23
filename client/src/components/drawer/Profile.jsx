import { useContext } from "react";

import { Box, styled, Typography } from "@mui/material";

import { AccountContext } from "../../context/AccountProvider";

const ImageContainer = styled(Box)`
  display: flex;
  justify-content: center;
`;

const Image = styled("img")({
  width: 200,
  height: 200,
  borderRadius: "50%",
  padding: "25px 0",
});

const BoxWrapper = styled(Box)`
  background:rgb(49, 49, 49);
  padding: 12px 30px 2px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);
  & :first-child {
    font-size: 13px;
    color:rgb(255, 255, 255);
    font-weight: 200;
  }
  & :last-child {
    margin: 14px 0;
    color:rgb(255, 255, 255);
  }
`;


//THE NOT USERNAME NOTE
const DescriptionContainer = styled(Box)`
    padding: 15px 20px 28px 30px;
    & > p{
        font-size: 13px;
        color:rgb(227, 227, 227);
    }

`

const Profile = () => {
  const { account } = useContext(AccountContext);
  return (
    <>
      <ImageContainer>
        <Image src={account.picture} alt="dp" />
      </ImageContainer>

      <BoxWrapper>
        <Typography>Your name</Typography>
        <Typography>{account.name}</Typography>
      </BoxWrapper>

      <DescriptionContainer>
        <Typography>This is not your username or pin. This name will be visible to your WhatsApp contacts.</Typography>
      </DescriptionContainer>

      <BoxWrapper>
        <Typography>About</Typography>
        <Typography>{account.bio || "Hey there! I am using FlickChat."}</Typography>
      </BoxWrapper>
    </>
  );
};

export default Profile;
