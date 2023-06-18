import UserAvatar from "@/components/UserMenu/UserAvatar";
import { getLogedInUser } from "@/utils/getLogedInUser";

const Profile = async () => {
  const user = await getLogedInUser();
  return (
    <div className="p-2 flex flex-col items-center justify-center gap-2">
      <pre>{JSON.stringify(user, null, 2)}</pre>
      <h3 className="text-2xl font-bold text-neutral-600 capitalize ">
        welcome back!
      </h3>
      <UserAvatar img={user.image} imgClassName="w-28" avatarClassName="" />
      <p>{user.name}</p>
      {user.lastName && <p>{user.lastName}</p>}
      <p>{user.email}</p>
    </div>
  );
};

export default Profile;
