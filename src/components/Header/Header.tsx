import { User } from "@prisma/client";
import NavBar from "./NavBar";
import ClientOnly from "../ClientOnly/ClientOnly";

type Props = {
  user?: User;
};

const Header = ({ user }: Props) => {
  return (
    <header className="w-full min-h-[74px] shadow py-3">
      <ClientOnly>
        <NavBar user={user} />
      </ClientOnly>
    </header>
  );
};

export default Header;
