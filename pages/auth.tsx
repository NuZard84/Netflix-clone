import Input from "@/components/input";
import axios from "axios";
import { useCallback, useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/router";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";

const Auth = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const [varient, setVarient] = useState("login");

  const toggleVarient = useCallback(() => {
    setVarient((cur) => (cur === "login" ? "register" : "login"));
  }, []);

  const handleGithubSignIn = () => signIn("github", { callbackUrl: "/profile" });
  const handleGoogleSignIn = () => signIn("google", { callbackUrl: "/profile" });

  const login = useCallback(async () => {
    try {
      await signIn("credentials", {
        email,
        password,
        redirect: false,
        callbackUrl: "/profile",
      });

      router.push("/profile");
    } catch (error) {
      console.log(error);
    }
  }, [email, password, router]);

  const register = useCallback(async () => {
    try {
      await axios.post("/api/register", {
        email,
        name,
        password,
      });

      login();
    } catch (error) {
      console.log(error);
    }
  }, [email, name, password, login]);

  return (
    <div className="relative h-full w-full bg-[url('/images/hero.jpg')] bg-cover bg-no-repeat bg-center bg-fixed ">
      <div className="w-full h-full bg-black lg:bg-opacity-50">
        <nav className="px-12 py-5">
          <img src="/images/logo.png" alt="logo" className="h-12" />
        </nav>
        <div className="flex justify-center">
          <div className="w-full p-16 mt-2 bg-black rounded-md bg-opacity-70 self-ceter lg:w-2/5 lg:max-w-md ">
            <h2 className="mb-8 text-4xl font-semibold text-white">
              {varient === "login" ? "Sign In" : "Register"}
            </h2>
            <div className="flex flex-col gap-4">
              {varient === "register" && (
                <Input
                  id="username"
                  type="text"
                  label="Username"
                  value={name}
                  onChange={(event: any) => setName(event.target.value)}
                />
              )}

              <Input
                id="email"
                type="text"
                label="Email"
                value={email}
                onChange={(event: any) => setEmail(event.target.value)}
              />
              <Input
                id="password"
                type="password"
                label="Password"
                value={password}
                onChange={(event: any) => setPassword(event.target.value)}
              />
            </div>
            <button
              onClick={varient === "login" ? login : register}
              className="w-full py-3 mt-10 text-white transition bg-red-600 rounded-md hover:bg-red-700"
            >
              {varient === "login" ? "Login" : "Sign Up"}
            </button>
            <div className="flex flex-row items-center justify-center gap-4 mt-8">
              <div
                onClick={handleGithubSignIn}
                className="flex items-center justify-center w-10 h-10 transition bg-white rounded-full cursor-pointer hover:opacity-80"
              >
                <FaGithub size={30} />
              </div>
              <div
                onClick={handleGoogleSignIn}
                className="flex items-center justify-center w-10 h-10 transition bg-white rounded-full cursor-pointer hover:opacity-80"
              >
                <FcGoogle size={30} />
              </div>
            </div>
            <p className="mt-12 text-md text-neutral-400 ">
              {varient === "login"
                ? "New to Netflix?"
                : "Already have an account?"}
              <span
                onClick={toggleVarient}
                className="ml-1 text-white cursor-pointer hover:underline"
              >
                {varient === "login" ? "Create new account" : "Login"}
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
