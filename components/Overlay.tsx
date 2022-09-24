import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import Button from "./Button";
import Input from "./Input";

const Overlay: React.FunctionComponent = () => {
  const [name, setName] = useState("");
  const { updateUserName } = useAuth();
  return (
    <div className="absolute inset-0 z-10 bg-black bg-opacity-20 flex justify-center items-center text-center">
      <div className="p-8 bg-white rounded-xl flex flex-col gap-5">
        <h3 className="text-3xl font-bold">Introduce yourself!</h3>
        <div className="flex flex-col gap-3 p-4">
          <Input type="text" name="Your name" value={name} onChange={setName} />
          <Button name="Save" onClick={() => updateUserName(name)} />
        </div>
      </div>
    </div>
  );
};
export default Overlay;
