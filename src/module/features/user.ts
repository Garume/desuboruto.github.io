import { UserObj } from "@src/types/user-obj.type";
import _ from "lodash";

async function createUser(username: string): Promise<UserObj> {
    const {
      login,
      name,
      avatar_url,
      gravatar_id,
      bio,
      html_url,
      email,
      company,
      location,
      blog,
      twitter_username,
    } = await fetch(`https://api.github.com/users/${username}`).then((res) =>
      res.json()
    );
  
    if (!login) throw new Error("user is not exist");
  
    // 値がfalsyなプロパディ除いたオブジェクト
    const social_media = _.pickBy({ Blog: blog, Twitter: twitter_username });
  
    return {
      login,
      name,
      avatar_url,
      gravatar_id,
      bio,
      html_url,
      email,
      company,
      location,
      social_media,
    };
  }

  export default createUser