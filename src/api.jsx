import config from "./config";

const VIDEOSDK_TOKEN = config.API_KEY;
const BASE_URL = "https://api.videosdk.live";

export const createMeeting = async () => {
  const url = `${BASE_URL}/v2/rooms`;
  const options = {
    method: "POST",
    headers: {
      authorization: VIDEOSDK_TOKEN,
      "Content-Type": "application/json",
    },
  };
  const { roomId } = await fetch(url, options)
    .then((res) => res.json())
    .catch((err) => console.log(err));
  return roomId;
};

export const validateMeeting = async ({ roomId }) => {
  const url = `${BASE_URL}/v2/rooms/validate/${roomId}`;
  const options = {
    method: "GET",
    headers: {
      authorization: VIDEOSDK_TOKEN,
      "Content-Type": "application/json",
    },
  };
  const result = await fetch(url, options)
    .then((res) => res.json())
    .catch((err) => console.log(err));
  return result ? result.roomId === roomId : false;
};
