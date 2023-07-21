// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Channel, Message, ReadStatus, Profile, SkillInstance, SkillMaster } = initSchema(schema);

export {
  Channel,
  Message,
  ReadStatus,
  Profile,
  SkillInstance,
  SkillMaster
};