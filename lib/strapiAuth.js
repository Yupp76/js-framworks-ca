import axios from "axios";

export async function launchPostRequest(email, pass) {
  const authData = {
    identifier: email || "",
    password: pass || "",
  };

  const { data } = await axios.post(
    "https://limitless-forest-23373.herokuapp.com/api/auth/local",
    authData
  );

  return !!data.jwt;
}
