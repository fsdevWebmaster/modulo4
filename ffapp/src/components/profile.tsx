import { IProfile } from "../interfaces/IProfile"


export const Profile = ({ avatar, username, bio }: IProfile) => {
  return (
    <div className="profile-card px-5">
      <img src={ `/${avatar}` } alt="avatar" />
      <h1 className="display-5">{ username }</h1>
      <p className="text-center mt-2">{ bio }</p>
    </div>
  )
}