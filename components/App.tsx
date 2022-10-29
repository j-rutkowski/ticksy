import { FunctionComponent, useState } from "react";
import { useAuth } from "../context/AuthContext";
import { ListsContextProvider } from "../context/ListsContext";
import { ListType } from "../types/ListType";
import ListModal from "./ListModal";
import SelectedList from "./SelectedList";
import Sidebar from "./Sidebar";

const App: FunctionComponent = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(true);
  const [modalType, setModalType] = useState<"New" | "Edit">("New");
  const [list, setList] = useState<ListType | null>(null);

  const updateModal = (type: "New" | "Edit", list?: ListType) => {
    setIsModalOpen(true);
    setModalType(type);
    if (list) {
      setList(list);
    } else {
      setList(null);
    }
  };

  return (
    <ListsContextProvider>
      <div>
        {isModalOpen && (
          <ListModal
            type={modalType}
            setIsModalOpen={() => setIsModalOpen(false)}
            list={list}
          />
        )}
        <div className='grid md:grid-cols-[auto_1fr] w-screen h-screen select-none'>
          <Sidebar
            isSidebarOpen={isSidebarOpen}
            setIsSidebarOpen={() => setIsSidebarOpen(false)}
            setIsModalOpen={() => updateModal("New")}
          />
          <SelectedList
            setIsSidebarOpen={() => setIsSidebarOpen(true)}
            updateModal={updateModal}
          />
        </div>
      </div>
    </ListsContextProvider>
  );
};

export default App;
