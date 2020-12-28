import { Button } from "@material-ui/core";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { login, selectUser } from "../features/userSlice";
import { auth, provider } from "../firebase";
import "../styles/Login.css";
export default function Login() {
  const dispatch = useDispatch(selectUser);

  const signIn = () => {
    auth
      .signInWithPopup(provider)
      .then(({ user }) => {
        console.log(user);
        dispatch(
          login({
            displayName: user?.displayName,
            email: user?.email,
            photoUrl: user?.photoURL,
          })
        );
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="login">
      <div className="login__container">
        <img
          src="https://1000logos.net/wp-content/uploads/2018/04/Gmail-logo-new.jpg"
          alt=""
        />
        <Button onClick={signIn} variant="contained" color="primary">
          Login
        </Button>
      </div>
    </div>
  );
}
