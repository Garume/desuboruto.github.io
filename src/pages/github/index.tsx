import Layout from '@src/components/layout'
import MainCol from '@src/components/main-col/main-col'
import SideCol from '@src/components/side-col/side-col'
import { correctReposConfig } from '@src/module/features/ogp'
import createReposAndSkills from '@src/module/features/repoandskill'
import createUser from '@src/module/features/user'
import { isConfigObj, TitlesObj } from '@src/types/config-obj.type'
import { ReposObj } from '@src/types/repos-obj.type'
import {
  isSkillLogoConfigObj,
  SkillLogoConfigObj,
} from '@src/types/skill-logo-obj.type'
import { SkillsObj } from '@src/types/skill-obj.type'
import {
  isSocialMediaConfigObj,
  SocialMediaConfigObj,
} from '@src/types/social-media-config-obj.type'
import { UserObj } from '@src/types/user-obj.type'
import * as fs from 'fs'
import yaml from 'js-yaml'
import _ from 'lodash'

export interface HomeProps {
  user: UserObj
  socialMediaConfig: SocialMediaConfigObj
  repos: ReposObj
  skills: SkillsObj
  skillLogoConfig: SkillLogoConfigObj
  history: string
  others: string
  titles: TitlesObj
  sort_repos_by: string
}

const Home = ({
  user,
  socialMediaConfig,
  repos,
  skills,
  skillLogoConfig,
  history,
  others,
  titles,
  sort_repos_by,
}: HomeProps) => {
  return (
    <Layout>
      <div className="d-md-flex min-height-full border-md-bottom">
        <SideCol {...{ user, socialMediaConfig }} />
        <MainCol
          {...{
            repos,
            skills,
            skillLogoConfig,
            history,
            others,
            titles,
            sort_repos_by,
          }}
        />
      </div>
    </Layout>
  )
}

export default Home

export async function getStaticProps(): Promise<{ props: HomeProps }> {
  let config = yaml.load(fs.readFileSync('./config/config.yml', 'utf-8')) as {
    [key: string]: any
  }

  // 値がnullなプロパティの値を、exclude_reposとexclude_skillsは空配列・それ以外は空オブジェクトに変換する
  config = Object.fromEntries(
    Object.entries(config).map(([k, v]) =>
      v === null ? (k.startsWith('exclude') ? [k, []] : [k, {}]) : [k, v]
    )
  )
  config.system.titles ||= {}

  if (!isConfigObj(config)) throw new Error()

  const user = await createUser(config.username)
  _.merge(user, config.user)

  let repos: ReposObj = {}
  let skills: SkillsObj = []

  if (config.system.max_count_repo_show) {
    const reposAndSkills = await createReposAndSkills(
      config.username,
      config.system,
      config.exclude_repos
    )
    repos = reposAndSkills.repos
    skills = reposAndSkills.skills
  }

  fs.writeFileSync('./config/.log', yaml.dump(Object.keys(repos)))
  _.merge(repos, await correctReposConfig(config.repos))

  skills = skills.filter((x) => !config.exclude_skills.includes(x[0]))
  fs.appendFileSync('./config/.log', '\n')
  fs.appendFileSync('./config/.log', yaml.dump(skills.map((x) => x[0])))
  skills = _.uniqBy(Object.entries(config.skills).concat(skills), (x) => x[0])

  const history = config.history
    ? fs.readFileSync('./config/history.md', 'utf-8')
    : ''
  const others = config.others
    ? fs.readFileSync('./config/others.md', 'utf-8')
    : ''

  const socialMediaConfig = yaml.load(
    fs.readFileSync('./config/social-media.yml', 'utf-8')
  )
  if (!isSocialMediaConfigObj(socialMediaConfig)) throw new Error()
  const skillLogoConfig = yaml.load(
    fs.readFileSync('./config/skill-logo.yml', 'utf-8')
  )
  if (!isSkillLogoConfigObj(skillLogoConfig)) throw new Error()

  return {
    props: {
      user,
      socialMediaConfig,
      repos,
      skills,
      skillLogoConfig,
      history,
      others,
      titles: config.system.titles,
      sort_repos_by: config.system.sort_repos_by,
    },
  }
}
