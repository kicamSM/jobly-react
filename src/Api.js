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

  // Individual API routes

  /** Get jobs on a company by handle.  */

  static async getCompany(handle) {
    let res = await this.request(`companies/${handle}`);
    return res.company;
    
  }

 /** Get all companies or companies that match name*/

  static async getCompanies(name) {
    let res = await this.request(`companies`, { name });
    return res.companies;
  }

  /** Get details on a job by handle.  */

  static async getJob(handle) {
    let res = await this.request(`jobs/${handle}`);
    return res.job;
  }

  /** Get all jobs or jobs that match title*/

  static async getJobs(title) {
    let res = await this.request(`jobs`, {title});
    return res.jobs;
  }

  /** Get all jobs from specific company*/

  static async companyJobs(handle) {
    let res = await this.request(`companies/${handle}`)
    return res.company.jobs
  }

  /** Get user by username*/

  static async getUser(username) {
    let res = await this.request(`users/${username}`);
    console.log("res in api:", res)
    return res.user;
  }

  /** Post user by data*/

  static async login(data) {
    let res = await this.request(`auth/token`, data, "post");
    console.log("res.token:", res.token)
    return res.token;
  }

  /** Patch user by data*/

  static async update(data, username) {
    let res = await this.request(`users/${username}`, data, "patch");
    console.log("res.token:", res.token)
    return res.token;
  }

  /** Post and create user by data*/

  static async signup(data) {
    let res = await this.request(`auth/register`, data, "post");
    console.log("res.token:", res.token)
    return res.token;
  }

  /** Post application by username and id of application*/

  static async apply(username, id) {
    let res = await this.request(`users/${username}/jobs/${id}`, id, "post");
    console.log("res:", res)
    return res.token
  }

}


// for now, put token ("testuser" / "password" on class)
// for testing
// JoblyApi.token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZ" +
//     "SI6InRlc3R1c2VyIiwiaXNBZG1pbiI6ZmFsc2UsImlhdCI6MTU5ODE1OTI1OX0." +
//     "FtrMwBQwe6Ue-glIFgz_Nf8XxRT2YecFCiSpYL0fCXc";


export default JoblyApi