import axios from "axios";
const httpRequest = axios.create({
  baseURL: "https://request.in/api",
});
export default httpRequest;
