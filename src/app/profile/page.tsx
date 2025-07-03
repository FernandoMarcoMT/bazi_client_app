import ProfileDetail from "./components/profile-detail";
import ProfileTabs from "./components/profile-tabs";

export default async function ProfilePage() {
  return (
    <div className="flex flex-col grow px-6 xl:px-14 2xl:px-40 py-6 xl:py-20 gap-6 md:gap-8 xl:gap-12">
      <ProfileDetail />

      <ProfileTabs />
    </div>
  );
}
