import React from "react";
import FetchPost from "./FetchPost";

import request_body from "../../public/request_dump.json";
// let request_body = 'hey';

const ShowPost = () => (
  <div>
    <p>WE IN THIS FETCH</p>
    <FetchPost request_body={request_body.message.dionne} />
  </div>
)

export default ShowPost;
