import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { Button, Typography } from "@mui/material";
import { AuthContext } from "../context/AuthProvider";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

export default function Login() {
  const { user } = useContext(AuthContext);

  if (user.uid) {
    return <Navigate to="/" replace />;
  }

  const auth = getAuth();
  const handleLoginWithGoogle = async () => {
    const provider = new GoogleAuthProvider();

    const res = await signInWithPopup(auth, provider);
    console.log({ res });
  };

  return (
    <>
      <Typography sx={{ marginTop: "10rem" }}>
        Welcome To Best Note App On The World
      </Typography>
      <Button variant="outlined" onClick={handleLoginWithGoogle}>
        Login with Google
      </Button>
    </>
  );
}
