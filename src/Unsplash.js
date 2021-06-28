import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID HbmqGxpuTTzF6Clu8fmtLsmv0uBSKHMyYOmub-eFwT0",
  },
});
