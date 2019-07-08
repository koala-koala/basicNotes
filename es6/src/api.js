import axios from "axios";

axios.defaults.withCredentials = true;

export const getData = () => {
  axios.get(
    "https://gw.datayes-stg.com/mercury_community/w/threads?show_top=1&page=1&page_size=15&category=recommand"
  );
};
