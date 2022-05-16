import axios from 'axios';
import Cookies from 'js-cookie';

async function fetch_user() {
  const response = await axios.get("https://discord.com/api/users/@me", {
    headers: {
      "Authorization": `Bearer ${Cookies.get("token")}`
    }
  });
  return response.data;
}

module.exports = {
  fetch_user: fetch_user
};
