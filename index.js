const axios = require('axios').default;

async function fetch_user() {
  const response = await axios.get("https://discord.com/api/users/@me", {
    headers: {
      "Authorization": `Bearer ${Cookies.get("token")}`
    }
  });
  return response.data;
}
