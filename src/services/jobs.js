
import axios from "axios";

const baseUrl = "http://localhost:3001/jobs";


function getAll() {
    const req = axios.get(baseUrl);
    return req.then((response) => response.data);
  }


  const jobService = { 
    getAll,
  }

  export default jobService;