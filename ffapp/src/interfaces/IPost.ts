import { IProfile } from "./IProfile";

export interface IPost {
  author:IProfile;
  comments:string;
  createdAt:string;
  id:string;
  image:string;
  likes:number;
  text:string;
  updatedAt:string;
}