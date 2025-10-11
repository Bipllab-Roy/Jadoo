// import React, { useState } from "react";
// import { useAuth } from "../../hooks/useAuth";

// const Signin = () => {
//   const [user, setUser] = useState({
//     email: "",
//     password: "",
//   });

//   const onChange = (e) => {
//     const { name, value } = e.target;
//     setUser({ ...user, [name]: value });
//   };

//   const { login } = useAuth();
//   const handleLogin = (e) => {
//     e.preventDefault();
//     login(user.email, user.password);
//   };
//   return (
//     <section className="bg-gray-100 py-20 dark:bg-dark lg:py-[120px]">
//       <div className="container mx-auto">
//         <div className="-mx-4 flex flex-wrap">
//           <div className="w-full px-4">
//             <div className="relative mx-auto max-w-[525px] overflow-hidden rounded-lg bg-white px-10 py-16 text-center dark:bg-dark-2 sm:px-12 md:px-[60px]">
//               <form onSubmit={handleLogin}>
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
//                     value="Sign In"
//                     className="w-full cursor-pointer rounded-md border border-primary bg-primary px-5 py-3 text-base font-medium text-white transition hover:bg-opacity-90"
//                   />
//                 </div>
//               </form>
//               <p className="mb-6 text-base text-secondary-color dark:text-dark-7">
//                 Connect With
//               </p>
//               <ul className="-mx-2 mb-12 flex justify-between">
//                 <li className="w-full px-2">
//                   <a
//                     href="/#"
//                     className="flex h-11 items-center justify-center rounded-md bg-[#4064AC] hover:bg-opacity-90"
//                   >
//                     <svg
//                       width="10"
//                       height="20"
//                       viewBox="0 0 10 20"
//                       fill="none"
//                       xmlns="http://www.w3.org/2000/svg"
//                     >
//                       <path
//                         d="M9.29878 8H7.74898H7.19548V7.35484V5.35484V4.70968H7.74898H8.91133C9.21575 4.70968 9.46483 4.45161 9.46483 4.06452V0.645161C9.46483 0.290323 9.24343 0 8.91133 0H6.89106C4.70474 0 3.18262 1.80645 3.18262 4.48387V7.29032V7.93548H2.62912H0.747223C0.359774 7.93548 0 8.29032 0 8.80645V11.129C0 11.5806 0.304424 12 0.747223 12H2.57377H3.12727V12.6452V19.129C3.12727 19.5806 3.43169 20 3.87449 20H6.47593C6.64198 20 6.78036 19.9032 6.89106 19.7742C7.00176 19.6452 7.08478 19.4194 7.08478 19.2258V12.6774V12.0323H7.66596H8.91133C9.2711 12.0323 9.54785 11.7742 9.6032 11.3871V11.3548V11.3226L9.99065 9.09677C10.0183 8.87097 9.99065 8.6129 9.8246 8.35484C9.76925 8.19355 9.52018 8.03226 9.29878 8Z"
//                         fill="white"
//                       />
//                     </svg>
//                   </a>
//                 </li>
//                 <li className="w-full px-2">
//                   <a
//                     href="/#"
//                     className="flex h-11 items-center justify-center rounded-md bg-[#1C9CEA] hover:bg-opacity-90"
//                   >
//                     <svg
//                       width="22"
//                       height="16"
//                       viewBox="0 0 22 16"
//                       fill="none"
//                       xmlns="http://www.w3.org/2000/svg"
//                     >
//                       <path
//                         d="M19.5516 2.75538L20.9 1.25245C21.2903 0.845401 21.3968 0.53229 21.4323 0.375734C20.3677 0.939335 19.3742 1.1272 18.7355 1.1272H18.4871L18.3452 1.00196C17.4935 0.344423 16.429 0 15.2935 0C12.8097 0 10.8581 1.81605 10.8581 3.91389C10.8581 4.03914 10.8581 4.22701 10.8935 4.35225L11 4.97847L10.2548 4.94716C5.7129 4.82192 1.9871 1.37769 1.38387 0.782779C0.390323 2.34834 0.958064 3.85127 1.56129 4.79061L2.76774 6.54403L0.851613 5.6047C0.887097 6.91977 1.45484 7.95303 2.55484 8.7045L3.5129 9.33072L2.55484 9.67515C3.15806 11.272 4.50645 11.9296 5.5 12.18L6.8129 12.4932L5.57097 13.2446C3.58387 14.4971 1.1 14.4031 0 14.3092C2.23548 15.6869 4.89677 16 6.74194 16C8.12581 16 9.15484 15.8748 9.40322 15.7808C19.3387 13.7143 19.8 5.8865 19.8 4.32094V4.10176L20.0129 3.97652C21.2194 2.97456 21.7161 2.44227 22 2.12916C21.8935 2.16047 21.7516 2.22309 21.6097 2.2544L19.5516 2.75538Z"
//                         fill="white"
//                       />
//                     </svg>
//                   </a>
//                 </li>
//                 <li className="w-full px-2">
//                   <a
//                     href="/#"
//                     className="flex h-11 items-center justify-center rounded-md bg-[#D64937] hover:bg-opacity-90"
//                   >
//                     <svg
//                       width="18"
//                       height="18"
//                       viewBox="0 0 18 18"
//                       fill="none"
//                       xmlns="http://www.w3.org/2000/svg"
//                     >
//                       <path
//                         d="M17.8477 8.17132H9.29628V10.643H15.4342C15.1065 14.0743 12.2461 15.5574 9.47506 15.5574C5.95916 15.5574 2.8306 12.8821 2.8306 9.01461C2.8306 5.29251 5.81018 2.47185 9.47506 2.47185C12.2759 2.47185 13.9742 4.24567 13.9742 4.24567L15.7024 2.47185C15.7024 2.47185 13.3783 0.000145544 9.35587 0.000145544C4.05223 -0.0289334 0 4.30383 0 8.98553C0 13.5218 3.81386 18 9.44526 18C14.4212 18 17.9967 14.7141 17.9967 9.79974C18.0264 8.78198 17.8477 8.17132 17.8477 8.17132Z"
//                         fill="white"
//                       />
//                     </svg>
//                   </a>
//                 </li>
//               </ul>
//               <a
//                 href="/#"
//                 className="mb-2 inline-block text-base text-dark hover:text-primary hover:underline dark:text-white"
//               >
//                 Forget Password?
//               </a>
//               <p className="text-base text-body-color dark:text-dark-6">
//                 <span className="pr-0.5">Not a member yet?</span>
//                 <button className="text-primary hover:underline" type="submit">
//                   Sign Up
//                 </button>
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Signin;

// const InputBox = ({ type, placeholder, name, ...props }) => {
//   return (
//     <div className="mb-6">
//       <input
//         type={type}
//         placeholder={placeholder}
//         name={name}
//         className="w-full rounded-md border border-stroke bg-transparent px-5 py-3 text-base text-black outline-none border-black focus:border-primary focus-visible:shadow-none dark:border-dark-3 "
//         {...props}
//       />
//     </div>
//   );
// };





import React, { useState } from "react";
import { Mail, Lock, Eye, EyeOff } from "lucide-react";
import { useAuth } from "../../hooks/useAuth";

const Signin = () => {
  const [user, setUser] = useState({ email: "bipllabroy.bd2475@gmail.com", password: "" });
  const [showPassword, setShowPassword] = useState(false);
  const { login } = useAuth();

  const onChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    login(user.email, user.password);
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-100 via-white to-indigo-50   px-6 py-12">
      <div className="w-full max-w-md bg-white dark:bg-gray-900 rounded-2xl shadow-xl overflow-hidden">
        <div className="px-8 py-10 sm:p-12">
          <h2 className="text-3xl font-bold flex  items-center justify-center text-gray-900 dark:text-white mb-2">
            Welcome Back
          </h2>
          <p className="flex items-center justify-center text-gray-500 dark:text-gray-400 mb-8">
            Sign in to access your account
          </p>

          <form onSubmit={handleLogin}>
            {/* Email */}
            <div className="relative mb-5">
              <Mail
                className="absolute left-4 top-3.5 text-gray-400"
                size={18}
              />
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={user.email}
                onChange={onChange}
                required
                className="w-full rounded-xl border border-gray-300 dark:border-gray-700 bg-transparent px-11 py-3 text-gray-800 dark:text-gray-100 placeholder-gray-400 outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
              />
            </div>

            {/* Password */}
            <div className="relative mb-6">
              <Lock
                className="absolute left-4 top-3.5 text-gray-400"
                size={18}
              />
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Password"
                value={user.password}
                onChange={onChange}
                required
                className="w-full rounded-xl border border-gray-300 dark:border-gray-700 bg-transparent px-11 py-3 text-gray-800 dark:text-gray-100 placeholder-gray-400 outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-3.5 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full py-3.5 bg-indigo-600 cursor-pointer hover:bg-indigo-700 text-white font-medium rounded-xl transition transform hover:-translate-y-0.5 shadow-md hover:shadow-lg"
            >
              Sign In
            </button>
          </form>

          {/* Divider */}
          <div className="relative my-8">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-200 dark:border-gray-700"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="bg-white dark:bg-gray-900 px-4 text-gray-500 dark:text-gray-400">
                or continue with
              </span>
            </div>
          </div>

          {/* Social Login */}
          <div className="flex justify-center space-x-4">
            <SocialButton color="#4064AC" label="Facebook" />
            <SocialButton color="#1DA1F2" label="Twitter" />
            <SocialButton color="#DB4437" label="Google" />
          </div>

          {/* Footer Links */}
          <div className="mt-10 text-sm text-center">
            <button
             type="button"
              className="text-indigo-600 hover:underline hover:text-white cursor-pointer dark:text-indigo-400"
            >
              Forgot password?
            </button>
            <p className="mt-4 text-gray-600 dark:text-gray-400">
              Not a member yet?{" "}
              <a
                href="/signup"
                className="text-indigo-600 font-medium hover:underline dark:text-indigo-400"
              >
                Sign Up
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Signin;

/* Social button reusable component */
const SocialButton = ({ color, label }) => (
  <button
    style={{ backgroundColor: color }}
    className="flex items-center justify-center w-11 h-11 rounded-full text-white hover:opacity-90 transition shadow-md"
    title={label}
  >
    {label === "Facebook" && (
      <svg
        width="10"
        height="20"
        viewBox="0 0 10 20"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M9.3 8H7.75V4.7H8.9C9.22 4.7 9.46 4.45 9.46 4.06V0.65C9.46 0.29 9.24 0 8.91 0H6.89C4.7 0 3.18 1.81 3.18 4.48V7.94H0.75C0.36 7.94 0 8.29 0 8.81V11.13C0 11.58 0.3 12 0.75 12H3.12V19.13C3.12 19.58 3.43 20 3.87 20H6.47C6.64 20 6.78 19.9 6.89 19.77C7 19.65 7.08 19.42 7.08 19.23V12.03H8.91C9.27 12.03 9.55 11.77 9.6 11.39L9.99 9.1C10.02 8.87 9.99 8.61 9.82 8.35C9.77 8.19 9.52 8.03 9.3 8Z" />
      </svg>
    )}
    {label === "Twitter" && (
      <svg
        width="22"
        height="16"
        viewBox="0 0 22 16"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M19.55 2.76L20.9 1.25C21.29 0.85 21.4 0.53 21.43 0.38C20.37 0.94 19.37 1.13 18.73 1.13H18.49L18.34 1C17.49 0.34 16.43 0 15.29 0C12.81 0 10.86 1.82 10.86 3.91C10.86 4.04 10.86 4.23 10.89 4.35L11 4.98L10.25 4.95C5.71 4.82 1.99 1.38 1.38 0.78C0.39 2.35 0.96 3.85 1.56 4.79L2.77 6.54L0.85 5.6C0.89 6.92 1.45 7.95 2.55 8.7L3.51 9.33L2.55 9.68C3.16 11.27 4.51 11.93 5.5 12.18L6.81 12.49L5.57 13.24C3.58 14.5 1.1 14.4 0 14.31C2.24 15.69 4.9 16 6.74 16C8.13 16 9.15 15.87 9.4 15.78C19.34 13.71 19.8 5.89 19.8 4.32V4.1L20.01 3.98C21.22 2.97 21.72 2.44 22 2.13C21.89 2.16 21.75 2.22 21.61 2.25L19.55 2.76Z" />
      </svg>
    )}
    {label === "Google" && (
      <svg
        width="18"
        height="18"
        viewBox="0 0 18 18"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M17.85 8.17H9.3V10.64H15.43C15.11 14.07 12.25 15.56 9.48 15.56C5.96 15.56 2.83 12.88 2.83 9.01C2.83 5.29 5.81 2.47 9.48 2.47C12.28 2.47 13.97 4.25 13.97 4.25L15.7 2.47C15.7 2.47 13.38 0 9.36 0C4.05 0 0 4.3 0 8.99C0 13.52 3.81 18 9.45 18C14.42 18 18 14.71 18 9.8C18.03 8.78 17.85 8.17 17.85 8.17Z" />
      </svg>
    )}
  </button>
);





