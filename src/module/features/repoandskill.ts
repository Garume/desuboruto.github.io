import { SystemConfigObj } from "@src/types/config-obj.type";
import { RepoData } from "@src/types/repo-data.type";
import { ReposObj } from "@src/types/repos-obj.type";
import { SkillsObj } from "@src/types/skill-obj.type";
import { getOgpUrl } from "./ogp";

async function createReposAndSkills(
    username: string,
    system: SystemConfigObj,
    excludeRepos: Array<string>
  ): Promise<{ repos: ReposObj; skills: SkillsObj }> {
    let reposData: Array<RepoData> = [];
    const skills: { [key: string]: string } = {};
    let url:
      | string
      | null = `https://api.github.com/users/${username}/repos?page=1`;
  
    do {
      let res: Array<RepoData> = await fetch(
        `${url}&sort=pushed&per_page=100`
      ).then((res) => {
        const matches = /<([^<>]+)>; rel="next"/.exec(
          res.headers.get("link") as string
        );
        url = matches ? matches[1] : null;
  
        return res.json();
      });
  
      if (system.exclude_fork_repo) res = res.filter((r) => !r.fork);
  
      reposData = reposData.concat(res);
    } while (url);
  
    for (const repo of reposData)
      if (!repo.fork && repo.language) skills[repo.language] = "";
    reposData = reposData.filter((x) => !excludeRepos.includes(x.name));
  
    if (system.sort_repos_by === "star")
      reposData.sort((a, b) => b.stargazers_count - a.stargazers_count);
  
    reposData.splice(system.max_count_repo_show);
  
    const promises = reposData.map(async (repoData) => {
      let { name, html_url, description, language, stargazers_count, pushed_at } =
        repoData;
  
      const ogp_url = await getOgpUrl(html_url);
      description = description || ""; // nullの場合に空文字にする
  
      return [
        name,
        { html_url, ogp_url, description, language, stargazers_count, pushed_at },
      ];
    });
  
    return {
      repos: Object.fromEntries(await Promise.all(promises)),
      skills: Object.entries(skills),
    };
  }

export default createReposAndSkills