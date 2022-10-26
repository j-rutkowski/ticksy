import { FunctionComponent, useState } from "react";
import { useAuth } from "../context/AuthContext";
import { ListsContextProvider } from "../context/ListsContext";
import SelectedList from "./SelectedList";
import Sidebar from "./Sidebar";

const App: FunctionComponent = () => {
  const { user } = useAuth();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <ListsContextProvider>
      <div>
        <div className='grid md:grid-cols-[auto_1fr] w-screen h-screen select-none'>
          <Sidebar
            isSidebarOpen={isSidebarOpen}
            setIsSidebarOpen={() => setIsSidebarOpen(false)}
          />
          <SelectedList setIsSidebarOpen={() => setIsSidebarOpen(true)} />
        </div>
      </div>
    </ListsContextProvider>
  );
};

export default App;
