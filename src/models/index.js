// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Profile, SkillInstance, SkillMaster } = initSchema(schema);

export {
  Profile,
  SkillInstance,
  SkillMaster
};