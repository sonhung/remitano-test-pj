import { FaHome } from "react-icons/fa";
import { Button } from "@/components/base";
import Login from "@/components/Login";
import { useAuth } from "@/contexts";

const Header = () => {
  const { isLogged, email, doLogout } = useAuth();

  return (
    <header className="border-b-cyan-300 border-b-2">
      <div className="max-w-[1400px] mx-auto h-72 md:h-24 pt-5 px-6 md:flex justify-between items-start">
        <div className="flex items-start mb-4 md:mb-0">
          <FaHome size={36} />
          <div className="text-[36px] leading-9 font-bold ml-3">
            Funny Movies
          </div>
        </div>
        {!isLogged && <Login />}
        {isLogged && (
          <div className="flex items-center">
            <div>{email}</div>
            <Button className="mx-4">Share a movie</Button>
            <Button onPress={doLogout} variant="outline">
              Logout
            </Button>
          </div>
        )}
      </div>
    </header>
  );
};
export default Header;
