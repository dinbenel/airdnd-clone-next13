import { User } from "@prisma/client";
import NavBar from "./NavBar";
import ClientOnley from "../ClientOnley/ClientOnley";

type Props = {
  user?: User;
};

const Header = ({ user }: Props) => {
  return (
    <header className="w-full min-h-[74px] shadow py-3">
      <ClientOnley>
        <NavBar user={user} />
      </ClientOnley>
    </header>
  );
};

export default Header;
