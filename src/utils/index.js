export default api = axios.create({
  baseURL: process.env.REACT_APP_API_KEY,
  timeout: 1000,
});
