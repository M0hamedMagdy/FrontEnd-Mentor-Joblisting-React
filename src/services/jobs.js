
import axios from "axios";

const baseUrl = "/api/jobs";


function getAll() {
    const req = axios.get(baseUrl);
    return req.then((response) => response.data);
  }


  const jobService = { 
    getAll,
  }

  export default jobService;