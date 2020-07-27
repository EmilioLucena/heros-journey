import http from "../http-common";

const httpGet = () => {
  return http.get("/journeys");
};

export default httpGet;
