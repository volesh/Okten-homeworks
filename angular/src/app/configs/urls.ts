import {environment} from "../../environments/environment";

const {API} = environment

const urls = {
 posts :`${API}/posts`,
 comments :`${API}/comments`,
 users :`${API}/users`
}

export {urls}
