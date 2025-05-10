import { SidebarTrigger } from "@/components/ui/sidebar";

const DashboardHeader = () => {
  return (
    <header className="border-b">
      <div className="h-16 flex items-center justify-between px-4">
        <SidebarTrigger />

        <div>Username</div>
      </div>
    </header>
  );
};
export default DashboardHeader;
