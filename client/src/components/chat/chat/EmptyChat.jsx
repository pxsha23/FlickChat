// import { emptyChatImage } from "../../../constants/data";
// import { Box, Typography, styled, Divider } from "@mui/material";




// //THE EMPTY CHAT BACKGROUNG COLOR
// const Component = styled(Box)`
//   background:rgb(183, 194, 201);
//   padding: 30px 0;
//   text-align: center;
//   height: 100vh;
// `;
// const Container = styled(Box)`
//   pading: 0 200px;
// `;
// const Image = styled('img')({
//     width: 400,
//     marginTop: 100
// })

// const Title = styled(Typography)`
//   font-size: 32px;
//   margin: 25px 0 10px 0;
//   font-family: inherit;
//   font-weight: 300;
//   color:rgb(6, 0, 0);
// `;

// const SubTitle = styled(Typography)`
//   font-size: 14px;
//   color:rgb(74, 74, 74);
//   font-weight: 400;
//   font-family: inherit;
// `;
// const StyledDivider = styled(Divider)`
//   margin: 400px 0;
//   opacity: 0.4;
// `;
// const EmptyChat = () => {
//   return (
//     <Component>
//       <Container>
//         <Image src="https://in.pinterest.com/pin/3448137209669552/" alt="image" />
//         <Title>FlickChat</Title>
//         <SubTitle>Send and receive messages without keeping your phone online. <br /> </SubTitle>
//         <SubTitle>Use FlickChat on up to 4 linked devices and 1 phone at the same time.</SubTitle>
//         <StyledDivider/>
//       </Container>
//     </Component>
//   );
// };

// export default EmptyChat;












import { Box, Typography, styled, Divider } from "@mui/material";

const Component = styled(Box)`
  background: rgb(1, 12, 14);
  padding: 30px 0;
  text-align: center;
  height: 100vh;
`;

const Container = styled(Box)`
  padding: 0 200px;
`;

const Video = styled("video")({
  width: 400,
  marginTop: 100,
  borderRadius: "10px",
});

const Title = styled(Typography)`
  font-size: 32px;
  margin: 25px 0 10px 0;
  font-family: inherit;
  font-weight: 300;
  color: rgb(255, 255, 255);
`;

const SubTitle = styled(Typography)`
  font-size: 14px;
  color: rgb(198, 198, 198);
  font-weight: 400;
  font-family: inherit;
`;

const StyledDivider = styled(Divider)`
  margin: 400px 0;
  opacity: 0.4;
`;

const EmptyChat = () => {
  return (
    <Component>
      <Container>
        <Video autoPlay loop muted playsInline>
          <source
            src="https://cdn.dribbble.com/userupload/8287248/file/large-00c9507fbec4d1b81b19354b33ce6df8.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </Video>
        <Title>FlickChat</Title>
        <SubTitle>
          Send and receive messages without keeping your phone online. <br />
        </SubTitle>
        <SubTitle>
          Use FlickChat on up to 4 linked devices and 1 phone at the same time.
        </SubTitle>
        <StyledDivider />
      </Container>
    </Component>
  );
};

export default EmptyChat;
