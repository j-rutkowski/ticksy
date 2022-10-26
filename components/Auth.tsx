import Image from "next/future/image";
import background from "../public/background.jpg";
import logo from "../public/logo.svg";
import Input from "../components/Input";
import { useState, FunctionComponent } from "react";
import { useAuth } from "../context/AuthContext";
import Button from "./Button";

const Auth: FunctionComponent = () => {
  const { login, signup, updateUserName } = useAuth();

  const [formMode, setFormMode] = useState<"login" | "register">("login");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const switchFormMode = () => {
    setFormMode(formMode === "login" ? "register" : "login");
  };

  const handleAuth = async () => {
    try {
      if (formMode === "login") {
        await login(email, password);
      } else if (formMode === "register") {
        await signup(email, password, name);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleAuth();
    }
  };

  return (
    <div>
      <Image
        src={logo}
        className='absolute left-8 top-8 w-[120px] z-50 hidden md:block'
        alt='logo'
      />
      <div className='md:hidden fixed h-16 top-0 left-0 right-0 z-50 bg-white flex items-center'>
        <Image src={logo} className='h-3/5' alt='logo' />
      </div>
      <main className='grid grid-rows-[33%_1fr] md:grid-rows-1 md:grid-cols-[5fr_6fr] w-screen h-screen bg-white justify-items-center items-center relative'>
        <Image
          src={background}
          className='w-full h-full object-cover md:col-start-2'
          alt='background'
        />
        <div className='bg-white flex flex-col w-5/6 lg:w-2/3 gap-5 md:row-start-1 max-w-md self-start md:self-center mt-8 md:mt-0'>
          <h3 className='text-4xl font-semibold my-4'>
            {formMode === "login" ? "Welcome back" : "Welcome to Ticksy"}
          </h3>
          <Input
            type='email'
            name='E-mail'
            value={email}
            onChange={setEmail}
            onKeyDown={handleKeyDown}
          />
          <Input
            type='password'
            name='Password'
            value={password}
            onChange={setPassword}
            onKeyDown={handleKeyDown}
          />
          {formMode === "register" && (
            <Input
              type='text'
              name='Name'
              value={name}
              onChange={setName}
              onKeyDown={handleKeyDown}
            />
          )}
          <Button
            name={formMode === "login" ? "Sign in" : "Sign up"}
            onClick={handleAuth}
          />

          <span className='text-gray-600 text-center mt-2'>
            {formMode === "login"
              ? "Don't have an account?"
              : "Already have an account?"}{" "}
            <a
              className='font-medium underline hover:text-black transition-all hover:cursor-pointer'
              onClick={switchFormMode}
            >
              {formMode === "login" ? "Sign up!" : "Sign in!"}
            </a>
          </span>
        </div>
      </main>
    </div>
  );
};

export default Auth;
