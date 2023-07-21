// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Channel, ChannelProfile, Message, ReadStatus, Profile, SkillInstance, SkillMaster } = initSchema(schema);

export {
  Channel,
  ChannelProfile,
  Message,
  ReadStatus,
  Profile,
  SkillInstance,
  SkillMaster
};