import { IProfile } from './IProfile';

export interface IComment {
  createdAt: string;
  id:string;
  post:string;
  text:string;
  updatedAt:string;
  user:IProfile
}