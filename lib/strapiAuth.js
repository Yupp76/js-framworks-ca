import axios from "axios";

export async function launchPostRequest(email, pass) {
  const authData = {
    identifier: email || "",
    password: pass || "",
  };

  const { data } = await axios.post(
    "http://localhost:1337/api/auth/local",
    authData
  );

  return !!data.jwt;
}
