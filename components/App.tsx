import { FunctionComponent, useState } from "react";
import { useAuth } from "../context/AuthContext";
import { ListsContextProvider } from "../context/ListsContext";
import Overlay from "./Overlay";
import SelectedList from "./SelectedList";
import Sidebar from "./Sidebar";

const App: FunctionComponent = () => {
  const { user } = useAuth();

  return (
    <ListsContextProvider>
      <div>
        {user.displayName === null && <Overlay />}
        <div className="grid md:grid-cols-[auto_1fr] w-screen h-screen select-none">
          <Sidebar />
          <SelectedList />
        </div>
      </div>
    </ListsContextProvider>
  );
};

export default App;
