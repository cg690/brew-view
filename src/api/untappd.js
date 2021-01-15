import axios from 'axios';

export const API_KEYS = {
  client_id: "C7DEF05714BE51F6AAB5BEBBCE1AED8A9884B7CA",
  client_secret: "CE218E56580F562680B40B64A943B84DDAF3C028"
};

export default axios.create({
  baseURL: 'https://api.untappd.com/v4'
})

