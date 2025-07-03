import ProfileDetail from "./components/profile-detail";
import ProfileTabs from "./components/profile-tabs";

export default async function ProfilePage() {
  return (
    <div className="flex flex-col grow px-40 py-20 gap-12">
      <ProfileDetail />

      <ProfileTabs />
    </div>
  );
}
