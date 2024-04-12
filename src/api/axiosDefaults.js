import axios from "axios";

axios.defaults.baseURL = "https://pooch-book-api-b940e6d3707a.herokuapp.com/";
axios.defaults.headers.post['Content-Type'] = 'multipart/form-data'
axios.defaults.withCredentials = true

