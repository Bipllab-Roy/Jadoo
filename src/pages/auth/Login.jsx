import React, { useState } from "react";
import { useAuth } from "../../hooks/useAuth";
import InputBox from "../../components/ui/InputBox";

const Signin = () => {
  const { currentUser,resetPassword } = useAuth();
    const [forgetPassword, setForgetPassword] = useState(false); 
  const handleForgetPassword=()=>{
    setForgetPassword(!forgetPassword)
  }
  
 

  const [user, setUser] = useState({
    email: "bipllabroy.bd2475@gmail.com",
    password: "",
  });

  const onChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const { login } = useAuth();
  const handleLogin = (e) => {
    e.preventDefault();
    if (!currentUser?.emailVerified) {
      console.log("Please verified your email, try again");
    }
    login(user.email, user.password);
  };

  return (
    <section className=" py-20 dark:bg-dark lg:py-[120px]">
      <div className="container mx-auto">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div className="relative mx-auto max-w-[525px] overflow-hidden rounded-lg bg-gray-200 px-10 py-16 text-center dark:bg-dark-2 sm:px-12 md:px-[60px]">
              {forgetPassword ? (
                <ForgetPassword handleForgetPassword={handleForgetPassword} resetPassword={resetPassword} />
              ) : (
                <>
                  <form onSubmit={handleLogin}>
                    <InputBox
                      onChange={(e) => onChange(e)}
                      type="email"
                      name="email"
                      placeholder="Email"
                    />

                    <InputBox
                      onChange={(e) => onChange(e)}
                      type="text"
                      name="password"
                      placeholder="Password"
                    />
                    <div className="mb-10">
                      <input
                        type="submit"
                        value="Sign In"
                        className="w-full cursor-pointer rounded-md border border-primary bg-primary px-5 py-3 text-base font-medium text-white transition hover:bg-opacity-90"
                      />
                    </div>
                  </form>

                  <button
                  onClick={handleForgetPassword}
                    type="button"
                    className="mb-2 cursor-pointer inline-block text-base text-dark hover:text-primary hover:underline dark:text-black"
                  >
                    Forget Password?
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Signin;

const ForgetPassword = ({handleForgetPassword, resetPassword}) => {
 const [email,setEmail]=useState("");
 const handleChange=(e)=>{
  console.log(e.target.value);
  
  setEmail(e.target.value); 
 }

 const handleSetPassword=()=>{
  resetPassword(email)
 }

  return (
    <div>
      <InputBox
        onChange={(e) => handleChange(e)}
        type="text"
        name="email"
        placeholder="Email"
      />

      <button onClick={handleSetPassword} className="btn btn-warning">Reset Password</button>
      <button onClick={handleForgetPassword} className=" ml-3 cursor-pointer text-base text-black  hover:text-primary hover:underline">Back to login</button>
    </div>
  );
};

// import React, { useState } from "react";
// import { Mail, Lock, Eye, EyeOff } from "lucide-react";
// import { useAuth } from "../../hooks/useAuth";

// const Signin = () => {
//   const [user, setUser] = useState({ email: "bipllabroy.bd2475@gmail.com", password: "" });
//   const [showPassword, setShowPassword] = useState(false);
//   const { login } = useAuth();

//   const onChange = (e) => {
//     const { name, value } = e.target;
//     setUser({ ...user, [name]: value });
//   };

//   const handleLogin = (e) => {
//     e.preventDefault();
//     login(user.email, user.password);
//   };

//   return (
//     <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-100 via-white to-indigo-50   px-6 py-12">
//       <div className="w-full max-w-md bg-white dark:bg-gray-900 rounded-2xl shadow-xl overflow-hidden">
//         <div className="px-8 py-10 sm:p-12">
//           <h2 className="text-3xl font-bold flex  items-center justify-center text-gray-900 dark:text-white mb-2">
//             Welcome Back
//           </h2>
//           <p className="flex items-center justify-center text-gray-500 dark:text-gray-400 mb-8">
//             Sign in to access your account
//           </p>

//           <form onSubmit={handleLogin}>
//             {/* Email */}
//             <div className="relative mb-5">
//               <Mail
//                 className="absolute left-4 top-3.5 text-gray-400"
//                 size={18}
//               />
//               <input
//                 type="email"
//                 name="email"
//                 placeholder="Email Address"
//                 value={user.email}
//                  onChange={(e) => onChange(e)}
//                // onChange={onChange}
//                 required
//                 className="w-full rounded-xl border border-gray-300 dark:border-gray-700 bg-transparent px-11 py-3 text-gray-800 dark:text-gray-100 placeholder-gray-400 outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
//               />
//             </div>

//             {/* Password */}
//             <div className="relative mb-6">
//               <Lock
//                 className="absolute left-4 top-3.5 text-gray-400"
//                 size={18}
//               />
//               <input
//                 type={showPassword ? "text" : "password"}
//                 name="password"
//                 placeholder="Password"
//                 value={user.password}
//                 // onChange={(e) => onChange(e)}
//                 onChange={onChange}
//                 required
//                 className="w-full rounded-xl border border-gray-300 dark:border-gray-700 bg-transparent px-11 py-3 text-gray-800 dark:text-gray-100 placeholder-gray-400 outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
//               />
//               <button
//                 type="button"
//                 onClick={() => setShowPassword(!showPassword)}
//                 className="absolute right-4 top-3.5 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
//               >
//                 {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
//               </button>
//             </div>

//             {/* Submit Button */}
//             <button
//               type="submit"
//               className="w-full py-3.5 bg-indigo-600 cursor-pointer hover:bg-indigo-700 text-white font-medium rounded-xl transition transform hover:-translate-y-0.5 shadow-md hover:shadow-lg"
//             >
//               Sign In
//             </button>
//           </form>

//           {/* Divider */}
//           <div className="relative my-8">
//             <div className="absolute inset-0 flex items-center">
//               <div className="w-full border-t border-gray-200 dark:border-gray-700"></div>
//             </div>
//             <div className="relative flex justify-center text-sm">
//               <span className="bg-white dark:bg-gray-900 px-4 text-gray-500 dark:text-gray-400">
//                 or continue with
//               </span>
//             </div>
//           </div>

//           {/* Social Login */}
//           <div className="flex justify-center space-x-4">
//             <SocialButton color="#4064AC" label="Facebook" />
//             <SocialButton color="#1DA1F2" label="Twitter" />
//             <SocialButton color="#DB4437" label="Google" />
//           </div>

//           {/* Footer Links */}
//           <div className="mt-10 text-sm text-center">
//             <button
//              type="button"
//               className="text-indigo-600 hover:underline hover:text-white cursor-pointer dark:text-indigo-400"
//             >
//               Forgot password?
//             </button>
//             <p className="mt-4 text-gray-600 dark:text-gray-400">
//               Not a member yet?{" "}
//               <a
//                 href="/signup"
//                 className="text-indigo-600 font-medium hover:underline dark:text-indigo-400"
//               >
//                 Sign Up
//               </a>
//             </p>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Signin;

// /* Social button reusable component */
// const SocialButton = ({ color, label }) => (
//   <button
//     style={{ backgroundColor: color }}
//     className="flex items-center justify-center w-11 h-11 rounded-full text-white hover:opacity-90 transition shadow-md"
//     title={label}
//   >
//     {label === "Facebook" && (
//       <svg
//         width="10"
//         height="20"
//         viewBox="0 0 10 20"
//         fill="currentColor"
//         xmlns="http://www.w3.org/2000/svg"
//       >
//         <path d="M9.3 8H7.75V4.7H8.9C9.22 4.7 9.46 4.45 9.46 4.06V0.65C9.46 0.29 9.24 0 8.91 0H6.89C4.7 0 3.18 1.81 3.18 4.48V7.94H0.75C0.36 7.94 0 8.29 0 8.81V11.13C0 11.58 0.3 12 0.75 12H3.12V19.13C3.12 19.58 3.43 20 3.87 20H6.47C6.64 20 6.78 19.9 6.89 19.77C7 19.65 7.08 19.42 7.08 19.23V12.03H8.91C9.27 12.03 9.55 11.77 9.6 11.39L9.99 9.1C10.02 8.87 9.99 8.61 9.82 8.35C9.77 8.19 9.52 8.03 9.3 8Z" />
//       </svg>
//     )}
//     {label === "Twitter" && (
//       <svg
//         width="22"
//         height="16"
//         viewBox="0 0 22 16"
//         fill="currentColor"
//         xmlns="http://www.w3.org/2000/svg"
//       >
//         <path d="M19.55 2.76L20.9 1.25C21.29 0.85 21.4 0.53 21.43 0.38C20.37 0.94 19.37 1.13 18.73 1.13H18.49L18.34 1C17.49 0.34 16.43 0 15.29 0C12.81 0 10.86 1.82 10.86 3.91C10.86 4.04 10.86 4.23 10.89 4.35L11 4.98L10.25 4.95C5.71 4.82 1.99 1.38 1.38 0.78C0.39 2.35 0.96 3.85 1.56 4.79L2.77 6.54L0.85 5.6C0.89 6.92 1.45 7.95 2.55 8.7L3.51 9.33L2.55 9.68C3.16 11.27 4.51 11.93 5.5 12.18L6.81 12.49L5.57 13.24C3.58 14.5 1.1 14.4 0 14.31C2.24 15.69 4.9 16 6.74 16C8.13 16 9.15 15.87 9.4 15.78C19.34 13.71 19.8 5.89 19.8 4.32V4.1L20.01 3.98C21.22 2.97 21.72 2.44 22 2.13C21.89 2.16 21.75 2.22 21.61 2.25L19.55 2.76Z" />
//       </svg>
//     )}
//     {label === "Google" && (
//       <svg
//         width="18"
//         height="18"
//         viewBox="0 0 18 18"
//         fill="currentColor"
//         xmlns="http://www.w3.org/2000/svg"
//       >
//         <path d="M17.85 8.17H9.3V10.64H15.43C15.11 14.07 12.25 15.56 9.48 15.56C5.96 15.56 2.83 12.88 2.83 9.01C2.83 5.29 5.81 2.47 9.48 2.47C12.28 2.47 13.97 4.25 13.97 4.25L15.7 2.47C15.7 2.47 13.38 0 9.36 0C4.05 0 0 4.3 0 8.99C0 13.52 3.81 18 9.45 18C14.42 18 18 14.71 18 9.8C18.03 8.78 17.85 8.17 17.85 8.17Z" />
//       </svg>
//     )}
//   </button>
// );
