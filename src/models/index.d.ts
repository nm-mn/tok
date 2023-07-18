import { ModelInit, MutableModel, __modelMeta__, OptionallyManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled, AsyncCollection, AsyncItem } from "@aws-amplify/datastore";





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