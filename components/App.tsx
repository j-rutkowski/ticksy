import { FunctionComponent, useState } from "react";
import Checkbox from "./Task";
import { useAuth } from "../context/AuthContext";
import { ListsContextProvider } from "../context/ListsContext";
import Overlay from "./Overlay";
import Sidebar from "./Sidebar";

const App: FunctionComponent = () => {
  const { user } = useAuth();

  const [isChecked, setIsChecked] = useState(false);

  return (
    <ListsContextProvider>
      <div>
        {user.displayName === null && <Overlay />}
        <div className="grid md:grid-cols-[auto_1fr] w-screen h-screen">
          <Sidebar />
        </div>
      </div>
    </ListsContextProvider>
  );
};

export default App;
