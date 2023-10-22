import axios from "axios";

const BASE_URL = process.env.REACT_APP_BASE_URL || "http://localhost:3001";

/** API Class.
 *
 * Static class tying together methods used to get/send to to the API.
 * There shouldn't be any frontend-specific stuff here, and there shouldn't
 * be any API-aware stuff elsewhere in the frontend.
 *
 */

class JoblyApi {
  // the token for interactive with the API will be stored here.
  static token;

  static async request(endpoint, data = {}, method = "get") {
    console.debug("API Call:", endpoint, data, method);

    //there are multiple ways to pass an authorization token, this is how you pass it in the header.
    //this has been provided to show you another way to pass the token. you are only expected to read this code for this project.
    const url = `${BASE_URL}/${endpoint}`;
    const headers = { Authorization: `Bearer ${JoblyApi.token}` };
    // *This is our authorization for our request
    // console.log("header in api:", headers)
    const params = (method === "get")
        ? data
        : {};

    try {
      return (await axios({ url, method, data, params, headers })).data;
    } catch (err) {
      console.error("API Error:", err.response);
      let message = err.response.data.error.message;
      throw Array.isArray(message) ? message : [message];
    }
  }

  // static async create(endpoint, data = {}, method = "post") {
  //   console.debug("API Call:", endpoint, data, method);

  //   //there are multiple ways to pass an authorization token, this is how you pass it in the header.
  //   //this has been provided to show you another way to pass the token. you are only expected to read this code for this project.
  //   const url = `${BASE_URL}/${endpoint}`;
  //   const headers = { Authorization: `Bearer ${JoblyApi.token}` };
  //   const params = (method === "post")
  //       ? data
  //       : {};

  //   try {
  //     return (await axios({ url, method, data, params, headers })).data;
  //   } catch (err) {
  //     console.error("API Error:", err.response);
  //     let message = err.response.data.error.message;
  //     throw Array.isArray(message) ? message : [message];
  //   }
  // }

  // Individual API routes

  /** Get details on a company by handle.  */
//   ! will use this later to add other handles as well.

  static async getCompany(handle) {
    console.log("getCompany is running in API")
    let res = await this.request(`companies/${handle}`);
    return res.company;
  }

  static async getCompanies(name) {
    let res = await this.request(`companies`, { name });
    return res.companies;
  }

  /** Get details on a job by handle.  */
  static async getJob(handle) {
    let res = await this.request(`jobs/${handle}`);
    return res.job;
  }

  static async getJobs(title) {
    let res = await this.request(`jobs`, {title});
    return res.jobs;
  }

  // static async addCompany(job) {
  //   const result = await this.create('')
  // }

  // static async addJob(job) {
  //   const result = await this.create('')
  // }

  static async getUser(username) {
    let res = await this.request(`users/${username}`);
    console.log("res in api:", res)
    return res.user;
  }

  // static async addUser(userData) {
  //   let res = await this.create(`/users`)
  //   return res.user
  // }

  // ! need to make sure you understand what is happening here 

  static async login(data) {
    let res = await this.request(`auth/token`, data, "post");
    console.log("res.token:", res.token)
    return res.token;
  }

  static async update(data, username) {
    let res = await this.request(`users/${username}`, data, "patch");
    console.log("res.token:", res.token)
    return res.token;
  }

  static async signup(data) {
    let res = await this.request(`auth/register`, data, "post");
    console.log("res.token:", res.token)
    return res.token;
  }

  static async apply(username, id) {
    let res = await this.request(`users/${username}/jobs/${id}`, id, "post");
    console.log("res:", res)
    return res.token
  }





  // obviously, you'll add a lot here ...
}


// for now, put token ("testuser" / "password" on class)
JoblyApi.token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZ" +
    "SI6InRlc3R1c2VyIiwiaXNBZG1pbiI6ZmFsc2UsImlhdCI6MTU5ODE1OTI1OX0." +
    "FtrMwBQwe6Ue-glIFgz_Nf8XxRT2YecFCiSpYL0fCXc";

export default JoblyApi