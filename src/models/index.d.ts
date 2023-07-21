import { ModelInit, MutableModel, __modelMeta__, CustomIdentifier, ManagedIdentifier, OptionallyManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled, AsyncCollection, AsyncItem } from "@aws-amplify/datastore";





type EagerChannel = {
  readonly [__modelMeta__]: {
    identifier: CustomIdentifier<Channel, 'channel_id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly channel_id: string;
  readonly profiles: (ChannelProfile | null)[];
  readonly messages: (Message | null)[];
  readonly readStatus?: (ReadStatus | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyChannel = {
  readonly [__modelMeta__]: {
    identifier: CustomIdentifier<Channel, 'channel_id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly channel_id: string;
  readonly profiles: AsyncCollection<ChannelProfile>;
  readonly messages: AsyncCollection<Message>;
  readonly readStatus: AsyncCollection<ReadStatus>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Channel = LazyLoading extends LazyLoadingDisabled ? EagerChannel : LazyChannel

export declare const Channel: (new (init: ModelInit<Channel>) => Channel) & {
  copyOf(source: Channel, mutator: (draft: MutableModel<Channel>) => MutableModel<Channel> | void): Channel;
}

type EagerChannelProfile = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<ChannelProfile, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly channel_id: string;
  readonly profile_id: string;
  readonly profile?: Profile | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly channelProfilesChannel_id?: string | null;
}

type LazyChannelProfile = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<ChannelProfile, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly channel_id: string;
  readonly profile_id: string;
  readonly profile: AsyncItem<Profile | undefined>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly channelProfilesChannel_id?: string | null;
}

export declare type ChannelProfile = LazyLoading extends LazyLoadingDisabled ? EagerChannelProfile : LazyChannelProfile

export declare const ChannelProfile: (new (init: ModelInit<ChannelProfile>) => ChannelProfile) & {
  copyOf(source: ChannelProfile, mutator: (draft: MutableModel<ChannelProfile>) => MutableModel<ChannelProfile> | void): ChannelProfile;
}

type EagerMessage = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Message, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly channel_id: string;
  readonly message: string;
  readonly date: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyMessage = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Message, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly channel_id: string;
  readonly message: string;
  readonly date: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Message = LazyLoading extends LazyLoadingDisabled ? EagerMessage : LazyMessage

export declare const Message: (new (init: ModelInit<Message>) => Message) & {
  copyOf(source: Message, mutator: (draft: MutableModel<Message>) => MutableModel<Message> | void): Message;
}

type EagerReadStatus = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<ReadStatus, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly channel_id: string;
  readonly profileID: string;
  readonly date?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyReadStatus = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<ReadStatus, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly channel_id: string;
  readonly profileID: string;
  readonly date?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type ReadStatus = LazyLoading extends LazyLoadingDisabled ? EagerReadStatus : LazyReadStatus

export declare const ReadStatus: (new (init: ModelInit<ReadStatus>) => ReadStatus) & {
  copyOf(source: ReadStatus, mutator: (draft: MutableModel<ReadStatus>) => MutableModel<ReadStatus> | void): ReadStatus;
}

type EagerProfile = {
  readonly [__modelMeta__]: {
    identifier: OptionallyManagedIdentifier<Profile, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly first_name: string;
  readonly last_name: string;
  readonly email: string;
  readonly accepting: boolean;
  readonly region_location?: string | null;
  readonly country_location?: string | null;
  readonly primary_language?: string | null;
  readonly secondary_language?: string | null;
  readonly tetrary_language?: string | null;
  readonly bio?: string | null;
  readonly skills?: (SkillInstance | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyProfile = {
  readonly [__modelMeta__]: {
    identifier: OptionallyManagedIdentifier<Profile, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly first_name: string;
  readonly last_name: string;
  readonly email: string;
  readonly accepting: boolean;
  readonly region_location?: string | null;
  readonly country_location?: string | null;
  readonly primary_language?: string | null;
  readonly secondary_language?: string | null;
  readonly tetrary_language?: string | null;
  readonly bio?: string | null;
  readonly skills: AsyncCollection<SkillInstance>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Profile = LazyLoading extends LazyLoadingDisabled ? EagerProfile : LazyProfile

export declare const Profile: (new (init: ModelInit<Profile>) => Profile) & {
  copyOf(source: Profile, mutator: (draft: MutableModel<Profile>) => MutableModel<Profile> | void): Profile;
}

type EagerSkillInstance = {
  readonly [__modelMeta__]: {
    identifier: OptionallyManagedIdentifier<SkillInstance, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly years?: number | null;
  readonly description?: string | null;
  readonly skill?: SkillMaster | null;
  readonly profile?: Profile | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly profileSkillsId?: string | null;
  readonly skillMasterSkillsId?: string | null;
}

type LazySkillInstance = {
  readonly [__modelMeta__]: {
    identifier: OptionallyManagedIdentifier<SkillInstance, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly years?: number | null;
  readonly description?: string | null;
  readonly skill: AsyncItem<SkillMaster | undefined>;
  readonly profile: AsyncItem<Profile | undefined>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly profileSkillsId?: string | null;
  readonly skillMasterSkillsId?: string | null;
}

export declare type SkillInstance = LazyLoading extends LazyLoadingDisabled ? EagerSkillInstance : LazySkillInstance

export declare const SkillInstance: (new (init: ModelInit<SkillInstance>) => SkillInstance) & {
  copyOf(source: SkillInstance, mutator: (draft: MutableModel<SkillInstance>) => MutableModel<SkillInstance> | void): SkillInstance;
}

type EagerSkillMaster = {
  readonly [__modelMeta__]: {
    identifier: OptionallyManagedIdentifier<SkillMaster, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly skills?: (SkillInstance | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazySkillMaster = {
  readonly [__modelMeta__]: {
    identifier: OptionallyManagedIdentifier<SkillMaster, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly skills: AsyncCollection<SkillInstance>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type SkillMaster = LazyLoading extends LazyLoadingDisabled ? EagerSkillMaster : LazySkillMaster

export declare const SkillMaster: (new (init: ModelInit<SkillMaster>) => SkillMaster) & {
  copyOf(source: SkillMaster, mutator: (draft: MutableModel<SkillMaster>) => MutableModel<SkillMaster> | void): SkillMaster;
}