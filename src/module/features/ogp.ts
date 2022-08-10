import { ReposConfigObj } from "@src/types/config-obj.type";

// configで新しく設定されるリポジトリーのOGPを取得する
export async function correctReposConfig(reposConfig: ReposConfigObj) {
    const promises = Object.entries(reposConfig).map(async ([key, value]) => {
      if (!("html_url" in value)) return [key, value];
  
      let { html_url, description, bg_color, ogp_url } = value;
      bg_color = bg_color ? bg_color : "";
      ogp_url ||= await getOgpUrl(html_url);
  
      return [key, { html_url, ogp_url, bg_color, description }];
    });
  
    return Object.fromEntries(await Promise.all(promises));
  }
  
  export async function getOgpUrl(htmlUrl: string): Promise<string> {
    const res = await fetch(htmlUrl).then((res) => res.text());
    const resultExec =
      /<meta +property *= *"og:image" +content *= *"(https?:\/\/[\w!?/+\-_~=;.,*&@#$%()'\[\]]+)" *\/?>/.exec(
        res
      );
  
    return resultExec ? resultExec[1] : "";
  }
  