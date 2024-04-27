// import * as React from 'react';
// import PropTypes from 'prop-types';
// import AppBar from '@mui/material/AppBar';
// import Toolbar from '@mui/material/Toolbar';
// import Typography from '@mui/material/Typography';
// import CssBaseline from '@mui/material/CssBaseline';
// import useScrollTrigger from '@mui/material/useScrollTrigger';
// import Box from '@mui/material/Box';
// import Container from '@mui/material/Container';
// import Fab from '@mui/material/Fab';
// import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
// import Fade from '@mui/material/Fade';

// function ScrollTop(props) {
//   const { children, window } = props;
//   // Note that you normally won't need to set the window ref as useScrollTrigger
//   // will default to window.
//   // This is only being set here because the demo is in an iframe.
//   const trigger = useScrollTrigger({
//     target: window ? window() : undefined,
//     disableHysteresis: true,
//     threshold: 100,
//   });

//   const handleClick = (event) => {
//     const anchor = (event.target.ownerDocument || document).querySelector(
//       '#back-to-top-anchor',
//     );

//     if (anchor) {
//       anchor.scrollIntoView({
//         block: 'center',
//       });
//     }
//   };

//   return (
//     <Fade in={trigger}>
//       <Box
//         onClick={handleClick}
//         role="presentation"
//         sx={{ position: 'fixed', bottom: 16, right: 16 }}
//       >
//         {children}
//       </Box>
//     </Fade>
//   );
// }

// ScrollTop.propTypes = {
//   children: PropTypes.element.isRequired,
//   /**
//    * Injected by the documentation to work in an iframe.
//    * You won't need it on your project.
//    */
//   window: PropTypes.func,
// };

// export default function BackToTop(props) {
//   return (
//     <React.Fragment>
//       <CssBaseline />
//       <AppBar>
//         <Toolbar>
//           <Typography variant="h6" component="div">
//             Scroll to see button
//           </Typography>
//         </Toolbar>
//       </AppBar>
//       <Toolbar id="back-to-top-anchor" />
//       <Container>
//         <Box sx={{ my: 2 }}>
//           {[...new Array(12)]
//             .map(
//               () => `At BULWARK, we are committed to safeguarding your privacy and ensuring the
//               security of your information. We understand the importance of transparency and trust
//               when it comes to handling your personal data. This Privacy Commitment outlines our
//               dedication to protecting your privacy and explains how we collect, use, disclose, and
//               secure your information.
              
//               1. Your Information Matters: We recognize that your personal information is valuable
//               and sensitive. Therefore, we only collect personal information when it is necessary
//               for specific purposes such as registration, account creation, or communication. We
//               do not collect personal information without your explicit consent.
              
//               2. Transparency and Control: We believe in transparency and empowering you to
//               control your information. You have the right to know what information we collect, how
//               we use it, and with whom we share it. You can exercise control over your information
//               by managing your preferences and settings within our app.
              
//               3. Security Measures: We take reasonable measures to protect your information
//               from unauthorized access, disclosure, alteration, and destruction. While no security
//               measures are perfect, we continuously strive to maintain the highest standards of
//               security to safeguard your data.
              
//               4. Respect for Your Choices: We respect your choices regarding the use of your
//               information. You have the right to opt-out of certain data collection and marketing
//               communications. We will always honour your preferences and ensure that your
//               choices are respected.
              
//               5. Compliance with Laws: We are committed to complying with all applicable laws
//               and regulations concerning privacy and data protection. We will only disclose your
//               information when required by law or with your explicit consent.
              
//               6. Continuous Improvement: We are dedicated to continuously improving our privacy
//               practices. We regularly review and update our policies and procedures to ensure
//               compliance with evolving privacy standards and best practices.
              
//               7. Accountability and Responsibility: We take responsibility for our actions
//               concerning your privacy. If you have any questions, concerns, or complaints
//               regarding our privacy practices, we are here to address them promptly and
//               transparently.
              
//               8. Clear Communication: We believe in clear and concise communication about our
//               privacy practices. Our Privacy Policy is easily accessible and written in language that
//               is understandable to all users.
//               By using BULWARK, you entrust us with your information, and we are committed to
//               upholding your trust by protecting your privacy and providing you with a secure and
//               reliable experience.
              
//               If you have any questions or concerns about our Privacy Commitment or our
//               practices regarding your information, please contact us at info@bulwark.com.
//               Thank you for choosing BULWARK.
              
//               I understand and agree that my personal data will be collected and processed according to the Privacy policies and unconditionally agree and accept the Terms of use
              
//               Please send me information about new product releases, price changes, and special offers from Bulwark. I am aware that my consent could be revoked at any time by clicking the unsubscribe link inside any email received from Bulwark.
//               Submit`,
//             )
//             .join('\n')}
//         </Box>
//       </Container>
//       <ScrollTop {...props}>
//         <Fab size="small" aria-label="scroll back to top">
//           <KeyboardArrowUpIcon />
//         </Fab>
//       </ScrollTop>
//     </React.Fragment>
//   );
// }