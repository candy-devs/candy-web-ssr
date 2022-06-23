import axios from "axios";
import { GetServerSideProps } from "next";
import { Context } from "next-redux-wrapper";
import React from "react";
import { Button, Container, Form, SSRProvider } from "react-bootstrap";
import { useSelector } from "react-redux";
import { wrapper } from "../../store";
import * as userActions from "../../store/modules/user";
import { UserDataType } from "../../store/modules/user";
import "bootstrap/dist/css/bootstrap.min.css";
import AppBar from "../../components/AppBar";
import styles from "./index.module.scss";
import styled, { css } from "styled-components";

// const loginPage = "http://localhost:8080/user/login";

// export default function LoginPage() {
//   const user: UserDataType = useSelector(({ user }: any) => user);

//   return (
//     <div>
//       <SSRProvider>
//         <Container style={{ display: "block", padding: "32px 0 0 0" }}>
//           <div>
//             <div>E-Mail: {user.email}</div>
//             <div>Name: {user.name}</div>
//             <div>Picture: {user.picture}</div>
//           </div>
//           {/* <Form method="post" action="http://localhost:8080/login"> */}
//           {/* <Form.Group className="mb-3" controlId="formBasicEmail">
//             <Form.Label>Email address</Form.Label>
//             <Form.Control
//               type="text"
//               name="username"
//               placeholder="Enter email"
//               value={user.name}
//             />
//           </Form.Group>

//           <Form.Group className="mb-3" controlId="formBasicPassword">
//             <Form.Label>Password</Form.Label>
//             <Form.Control
//               type="password"
//               name="password"
//               placeholder="Password"
//             />
//           </Form.Group>
//           <Form.Group className="mb-3" controlId="formBasicCheckbox">
//             <Form.Check type="checkbox" label="Check me out" />
//           </Form.Group> */}
//           <Button
//             onClick={() => {
//               axios.post(loginPage, {
//                 id: "candy_test",
//                 pw: "candy-test-pw",
//               }).then(() => {
//                 window.location.reload();
//               });

//             }}
//           >
//             Submit
//           </Button>
//           {/* </Form> */}

//           <div>
//             <a href="http://localhost:8080/oauth2/authorization/google">
//               OAuth Google
//             </a>
//           </div>
//         </Container>
//       </SSRProvider>
//     </div>
//   );
// }

// export const getServerSideProps = wrapper.getServerSideProps(
//   (store) =>
//     async ({ req, res, ...etc }) => {
//       if (req.cookies["SESSION"] != null) {
//         const uinfo = await axios.get("http://localhost:8080/user/mysinfo", {
//           headers: {
//             cookie: `SESSION=${req.cookies["SESSION"]}`,
//           },
//         });
//         if (uinfo.data != "") store.dispatch(userActions.set(uinfo.data));
//       }
//       return {
//         props: {},
//       };
//
// );

// const loginTextBox = styled.input`
//   border: none;
//   outline: none;
// `;

const customMediaQuery = (maxWidth: number): string => {
  return `@media (max-width: ${maxWidth}px)`;
};

const media = {
  custom: customMediaQuery,
  desktop: customMediaQuery(922),
  tablet: customMediaQuery(768),
  phone: customMediaQuery(576),
};

type LoginTextBoxProps = {
  isPassword?: boolean;
};

const LoginTextBox = styled.input<LoginTextBoxProps>`
  border: none;
  outline: none;
  width: 320px;
  height: 38px;
  border-radius: 5px;
  padding: 10px 8px 10px 10px;
  background-color: #f1f1f1;
  margin-top: ${(props) => (props.isPassword ? `12px` : `30px`)};

  ${(props) =>
    props.isPassword &&
    css`
      margin-top: 12px;
    `}/* ${media.desktop} {
    background: dodgerblue;
  }
  ${media.tablet} {
    background: mediumseagreen;
  }
  ${media.phone} {
    background: palevioletred;
  } */
`;

export default function LoginPage() {
  const user: UserDataType = useSelector(({ user }: any) => user);

  return (
    <SSRProvider>
      <AppBar title={"로그인"} showUnderLine={true} />
      <div className={styles.LoginLogoBox}>
        <div className={styles.LoginLogo}>CANDY</div>
        <LoginTextBox type="text" id="id" name="id" required />
        <LoginTextBox
          type="password"
          id="password"
          name="password"
          required
          isPassword
        />
      </div>
    </SSRProvider>
  );
}
