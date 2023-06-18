import { MainContainer, SideNavDashboard } from "@/components";
import { ReactNode } from "react";

const DashboardLayout = ({ children }: { children: ReactNode }) => {
  return (
    <MainContainer>
      <section className="flex gap-2">
        <SideNavDashboard />
        <main className="flex-1">{children}</main>
      </section>
    </MainContainer>
  );
};

export default DashboardLayout;
