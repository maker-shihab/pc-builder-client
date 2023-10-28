import React from "react";
import { useSession, signIn } from "next-auth/react";
import SectionLayout from "@/components/Shared/SectionLayout";
import { AiOutlineGithub, AiOutlineGoogle } from "react-icons/ai";
import { useRouter } from "next/router";

const Login = () => {
  const { data:  status } = useSession();
  const router = useRouter();
  if (status === "authenticated") router.push("/");
  return (
    <>
      <SectionLayout>
        <div className="flex justify-center items-center">
          <div className="w-[80%] h-[90%] md:h-80 md:w-80 rounded-lg flex flex-col justify-center bg-gray-700 p-4 ">
            <button
              className="w-full hover:bg-white transition-all ease-in-out duration-1000 shadow-inner p-4 flex justify-center rounded-lg bg-gray-400"
              onClick={() => {
                const x = signIn("google", { callbackUrl: "/" });
                // console.log(x, "google");
              }}
            >
              <AiOutlineGoogle size={30} color="#000" />{" "}
              <span className="pl-3 ">Google</span>
            </button>
            <button
              className="w-full hover:bg-white transition-all ease-in-out mt-4 duration-1000 shadow-inner p-4 flex justify-center rounded-lg bg-gray-400"
              onClick={() => signIn("github", { callbackUrl: "/" })}
            >
              <AiOutlineGithub size={30} color="#000" />{" "}
              <span className="pl-3 ">Github</span>
            </button>
          </div>
        </div>
      </SectionLayout>
    </>
  );
};

export default Login;
