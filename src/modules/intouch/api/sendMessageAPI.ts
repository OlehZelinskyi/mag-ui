import { SEND_MESSAGE_URL } from "../constants";

export default async function sendMessageAPI(data: { [key: string]: any }) {
  const response = await fetch(SEND_MESSAGE_URL, {
    method: "GET",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  return await response.json();
}
