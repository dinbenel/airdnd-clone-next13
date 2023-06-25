import { UserProfile } from "@/components";
import { getLoggedInUser } from "@/utils/getLoggedInUser";

const Profile = async () => {
  const user = await getLoggedInUser();

  return (
    <div className="p-2 flex flex-col items-center justify-center gap-4 h-[50vh]">
      {/* <pre>{JSON.stringify(user, null, 2)}</pre> */}
      <UserProfile user={user} />
    </div>
  );
};

export default Profile;
