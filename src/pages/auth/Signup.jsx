// import { useState } from "react"
// import { useAuth } from "../../hooks/useAuth"
// import {  FaFacebookF, FaGithub, FaGoogle } from "react-icons/fa"
// import InputBox from "../../components/ui/InputBox"

// const Signup = () => {
//     const {signup,gmailLogin,githubLogin,facebookLogin}= useAuth()

//     const [userData, setUserData] =useState({
//         email:"",
//         password:""
//     })

//     const onChange=(e)=>{
//         const {name, value}= e.target;
//         setUserData({...userData, [name]: value})
//     }

//     const onSubmit=(e)=>{
//         e.preventDefault();
//         signup(userData.email, userData.password)
//     }

//   return (
//     // <div className='min-h-screen flex w-full  items-center justify-center max-w-[500px] max-h-[200px] bg-gradient-to-br'>
//     //  <div className="  flex justify-end items-center shadow-2xl rounded-2xl w-full max-w-md p-8 border border-gray-100">
//     //    <form action="" onSubmit={onSubmit}>
//     //   <input onChange={(e)=>onChange(e) } name="email" type="email" placeholder="Email" className="input input-bordered w-full p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400" />
//     //   <input onChange={(e)=>onChange(e) } name="password" type="password" placeholder="Password" className="input input-bordered w-full p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 py-2"  />
//     //   <button type="submit" className='btn btn-active'>Submit</button>
//     //   </form>
//     //  </div>

//     // </div>


//      <section className="bg-gray-100 py-20 dark:bg-dark lg:py-[120px]">
//       <div className="container mx-auto">
//         <div className="-mx-4 flex flex-wrap">
//           <div className="w-full px-4">
//             <div className="relative mx-auto max-w-[525px] overflow-hidden rounded-lg bg-white px-10 py-16 text-center dark:bg-dark-2 sm:px-12 md:px-[60px]">
//               <form onSubmit={onSubmit}>
//                 <InputBox
//                   onChange={(e) => onChange(e)}
//                   type="email"
//                   name="email"
//                   placeholder="Email"
//                 />

//                 <InputBox
//                   onChange={(e) => onChange(e)}
//                   type="text"
//                   name="password"
//                   placeholder="Password"
//                 />
//                 <div className="mb-10">
//                   <input
//                     type="submit"
//                     value="Sign Up"
//                     className="w-full cursor-pointer rounded-md border border-primary bg-primary px-5 py-3 text-base font-medium text-white transition hover:bg-opacity-90"
//                   />
//                 </div>
//               </form>
//               <p className="mb-6 text-base text-secondary-color dark:text-dark-7">
//                 Connect With
//               </p>
//               <ul className="-mx-2 mb-12 flex justify-between">
//                  <li className="w-full px-2">
//                   <button
//                     className="w-full cursor-pointer flex h-11 items-center justify-center rounded-md bg-[#D64937] hover:bg-opacity-90"
//                     onClick={facebookLogin}
//                   >
//                     <FaFacebookF/>
                   
//                   </button>
//                 </li>
               
//                 <li className="w-full px-2">
//                   <button
                    
//                     className="w-full cursor-pointer flex h-11 items-center justify-center rounded-md bg-[#D64937] hover:bg-opacity-90"
//                     onClick={gmailLogin}
//                   >
//                     <FaGoogle/>
                   
//                   </button>
//                 </li>
//                 <li className="w-full px-2">
//                   <button
                    
//                     className="w-full cursor-pointer flex h-11 items-center justify-center rounded-md bg-[#D64937] hover:bg-opacity-90"
//                     onClick={githubLogin}
//                   >
//                     <FaGithub/>
                   
//                   </button>
//                 </li>
//               </ul>
             
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }

// export default Signup;




//{ANOTHER DESIGNE}

import { useState } from "react";
import { useAuth } from "../../hooks/useAuth";
import { FaFacebookF, FaGithub, FaGoogle } from "react-icons/fa";
import InputBox from "../../components/ui/InputBox";

const Signup = () => {
  const { signup, gmailLogin, githubLogin, facebookLogin } = useAuth();

  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  const onChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      await signup(userData.email, userData.password);
      // Optionally reset form or redirect
      setUserData({ email: "", password: "" });
    } catch (error) {
      console.error("Signup failed:", error.message);
    }
  };

  return (
    <section className=" py-20 dark:bg-dark lg:py-[120px]">
      <div className="container mx-auto">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div className="relative mx-auto max-w-[480px] overflow-hidden rounded-2xl  px-10 py-12 shadow-xl text-center bg-gray-200 sm:px-12 md:px-[60px]">
              <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-8">
                Create an Account
              </h2>

              <form onSubmit={onSubmit}>
                <InputBox
                  onChange={onChange}
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={userData.email}
                />

                <InputBox
                  onChange={onChange}
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={userData.password}
                />

                <button
                  type="submit"
                  className="w-full mt-6 cursor-pointer rounded-md bg-blue-600 px-5 py-3 text-base font-medium text-white transition hover:bg-blue-700"
                >
                  Sign Up
                </button>
              </form>

              <p className="my-6 text-base text-gray-500 dark:text-gray-400">
                or continue with
              </p>

              <ul className="flex justify-center gap-4 mb-4">
                <li>
                  <button
                    type="button"
                    onClick={facebookLogin}
                    className="flex items-center justify-center w-11 h-11 rounded-md bg-blue-600 text-white hover:bg-blue-700 transition"
                  >
                    <FaFacebookF size={18} />
                  </button>
                </li>

                <li>
                  <button
                    type="button"
                    onClick={gmailLogin}
                    className="flex items-center justify-center w-11 h-11 rounded-md bg-red-500 text-white hover:bg-red-600 transition"
                  >
                    <FaGoogle size={18} />
                  </button>
                </li>

                <li>
                  <button
                    type="button"
                    onClick={githubLogin}
                    className="flex items-center justify-center w-11 h-11 rounded-md bg-gray-800 text-white hover:bg-gray-900 transition"
                  >
                    <FaGithub size={18} />
                  </button>
                </li>
              </ul>

              <p className="text-sm text-gray-500 dark:text-gray-400">
                Already have an account?{" "}
                <a
                  href="/login"
                  className="text-blue-600 hover:underline dark:text-blue-400"
                >
                  Sign in
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Signup;
