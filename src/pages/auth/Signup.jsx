// import { useState } from "react"
// import { useAuth } from "../../hooks/useAuth"

// const Signup = () => {
//     const {signup}= useAuth()

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
//     <div className='min-h-screen flex items-center justify-center max-w-[500px] max-h-[200px] bg-gradient-to-br'>
//      <div className="  flex justify-end items-center shadow-2xl rounded-2xl w-full max-w-md p-8 border border-gray-100">
//        <form action="" onSubmit={onSubmit}>
//       <input onChange={(e)=>onChange(e) } name="email" type="email" placeholder="Email" className="input input-bordered w-full p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400" />
//       <input onChange={(e)=>onChange(e) } name="password" type="password" placeholder="Password" className="input input-bordered w-full p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 py-2"  />
//       <button type="submit" className='btn btn-active'>Submit</button>
//       </form>
//      </div>

//     </div>
//   )
// }

// export default Signup;




//{ANOTHER DESIGNE}

import { useState } from "react";
import { useAuth } from "../../hooks/useAuth";
import { useNavigate } from "react-router";

const Signup = () => {
  const { signup, error, loading } = useAuth();
  const navigate= useNavigate()

  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  const onChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (!userData.email || !userData.password) {
      alert("Please fill all fields");
      return;
    }
    signup(userData.email, userData.password, navigate);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 p-6">
      <div className="bg-white shadow-2xl rounded-2xl w-full max-w-md p-8 border border-gray-100">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Create an Account
        </h2>
        <form onSubmit={onSubmit} className="flex flex-col gap-5">
          {/* Email */}
          <div className="flex flex-col gap-2">
            <label htmlFor="email" className="text-gray-700 font-medium">
              Email Address
            </label>
            <input
              name="email"
              type="email"
              id="email"
              placeholder="Enter your email"
              value={userData.email}
              onChange={onChange}
              className="input input-bordered w-full p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          {/* Password */}
          <div className="flex flex-col gap-2">
            <label htmlFor="password" className="text-gray-700 font-medium">
              Password
            </label>
            <input
              name="password"
              type="password"
              id="password"
              placeholder="Enter your password"
              value={userData.password}
              onChange={onChange}
              className="input input-bordered w-full p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          {/* Error Message */}
          {error && (
            <p className="text-sm text-red-500 bg-red-100 px-3 py-2 rounded-lg text-center">
              {error}
            </p>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            className={`btn w-full py-3 rounded-xl font-semibold  text-black transition-all duration-300 `}
          >
            Sign in
          </button>
        </form>

        {/* Extra footer */}
        <p className="text-center text-sm text-gray-500 mt-6">
          Already have an account?{" "}
          <a
            href="/login"
            className="text-blue-600 font-semibold hover:underline"
          >
          
          </a>
        </p>
      </div>
    </div>
  );
};

export default Signup;



// {}

// import { useState } from "react";
// import { Eye, EyeOff, Mail, Lock } from "lucide-react";


//  import { useAuth } from "../../hooks/useAuth";



// export default function LoginPage() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [showPassword, setShowPassword] = useState(false);
//   const [rememberMe, setRememberMe] = useState(false);
//   const [isLoading, setIsLoading] = useState(false);

//   // ✅ Proper submit handler
//   const handleSubmit = (e) => {
//     e.preventDefault(); // prevent page reload
//     setIsLoading(true);

//     // fake async login simulation
//     setTimeout(() => {
//       if (email === "" || password === "") {
//         alert("Please enter email and password");
//         setIsLoading(false);
//         return;
//       }

//       console.log("Login attempted with:", { email, password, rememberMe });
//       alert(`✅ Login successful!\nWelcome back, ${email.split("@")[0]}!`);
//       setIsLoading(false);

//       // optional: reset form
//       setEmail("");
//       setPassword("");
//       setRememberMe(false);
//     }, 1200);
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-400 p-6">
//       <div className="w-full max-w-md">
//         <div className="backdrop-blur-lg bg-white/10 border border-white/20 rounded-3xl shadow-2xl p-8 text-white space-y-6 transition-all duration-300 hover:scale-[1.01] hover:shadow-purple-400/30">
//           <div className="text-center space-y-2">
//             <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-full backdrop-blur-md mb-4">
//               <Lock className="w-8 h-8 text-white" />
//             </div>
//             <h1 className="text-3xl font-bold">Welcome Back </h1>
//             <p className="text-gray-200">Sign in to continue your journey</p>
//           </div>

//           {/* ✅ FORM START */}
//           <form onSubmit={handleSubmit} className="space-y-5">
//             {/* Email */}
//             <div>
//               <label htmlFor="email" className="block text-sm font-medium mb-1 text-gray-200">
//                 Email Address
//               </label>
//               <div className="relative">
//                 <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-300" />
//                 <input
//                   id="email"
//                   type="email"
//                   value={email}
//                   onChange={(e) => setEmail(e.target.value)}
//                   required
//                   className="w-full pl-11 pr-4 py-3 rounded-lg bg-white/10 text-white placeholder-gray-300 border border-white/20 focus:ring-2 focus:ring-pink-300 outline-none transition"
//                   placeholder="you@example.com"
//                 />
//               </div>
//             </div>

//             {/* Password */}
//             <div>
//               <label htmlFor="password" className="block text-sm font-medium mb-1 text-gray-200">
//                 Password
//               </label>
//               <div className="relative">
//                 <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-300" />
//                 <input
//                   id="password"
//                   type={showPassword ? "text" : "password"}
//                   value={password}
//                   onChange={(e) => setPassword(e.target.value)}
//                   required
//                   className="w-full pl-11 pr-12 py-3 rounded-lg bg-white/10 text-white placeholder-gray-300 border border-white/20 focus:ring-2 focus:ring-pink-300 outline-none transition"
//                   placeholder="Enter your password"
//                 />
//                 <button
//                   type="button"
//                   onClick={() => setShowPassword(!showPassword)}
//                   className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-300 hover:text-white transition"
//                 >
//                   {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
//                 </button>
//               </div>
//             </div>

//             {/* Remember me */}
//             <div className="flex items-center justify-between text-sm text-gray-200">
//               <label className="flex items-center space-x-2 cursor-pointer">
//                 <input
//                   type="checkbox"
//                   checked={rememberMe}
//                   onChange={(e) => setRememberMe(e.target.checked)}
//                   className="w-4 h-4 text-pink-400 border-white/30 rounded focus:ring-2 focus:ring-pink-300 bg-white/10"
//                 />
//                 <span>Remember me</span>
//               </label>
//               <button type="button" className="hover:underline hover:text-white">
//                 Forgot password?
//               </button>
//             </div>

//             {/* ✅ Submit button — now works */}
//             <button
//               type="submit"
//               disabled={isLoading}
//               className="w-full bg-gradient-to-r from-pink-400 to-purple-500 text-white py-3 rounded-lg font-semibold hover:from-pink-500 hover:to-purple-600 transition-all focus:ring-4 focus:ring-pink-300 disabled:opacity-50"
//             >
//               {isLoading ? (
//                 <span className="flex items-center justify-center">
//                   <svg
//                     className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
//                     xmlns="http://www.w3.org/2000/svg"
//                     fill="none"
//                     viewBox="0 0 24 24"
//                   >
//                     <circle
//                       className="opacity-25"
//                       cx="12"
//                       cy="12"
//                       r="10"
//                       stroke="currentColor"
//                       strokeWidth="4"
//                     ></circle>
//                     <path
//                       className="opacity-75"
//                       fill="currentColor"
//                       d="M4 12a8 8 0 018-8V0C5.37 0 0 5.37 0 12h4zm2 5.29A7.96 7.96 0 014 12H0c0 3.04 1.13 5.82 3 7.94l3-2.65z"
//                     ></path>
//                   </svg>
//                   Signing in...
//                 </span>
//               ) : (
//                 "Sign In"
//               )}
//             </button>
//           </form>
//           {/* ✅ FORM END */}

//           {/* Divider */}
//           <div className="flex items-center justify-center my-2">
//             <div className="w-full border-t border-white/20"></div>
//             <span className="px-3 text-gray-300 text-sm">or</span>
//             <div className="w-full border-t border-white/20"></div>
//           </div>

//           {/* Social Login */}
//           <div className="flex gap-3">
//             <button className="flex-1 flex items-center justify-center py-2 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg transition">
//               <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
//                 <path
//                   fill="#fff"
//                   d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
//                 />
//               </svg>
//               Google
//             </button>
//             <button className="flex-1 flex items-center justify-center py-2 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg transition">
//               <svg className="w-5 h-5 mr-2" fill="#fff" viewBox="0 0 24 24">
//                 <path d="M24 12.07c0-6.63-5.37-12-12-12S0 5.44 0 12.07c0 5.99 4.39 10.96 10.13 11.86v-8.39H7.08v-3.47h3.05V9.43c0-3 1.79-4.67 4.53-4.67 1.31 0 2.69.23 2.69.23v2.96h-1.52c-1.49 0-1.95.93-1.95 1.87v2.25h3.32l-.53 3.47h-2.79v8.39C19.61 23.03 24 18.06 24 12.07z" />
//               </svg>
//               Facebook
//             </button>
//           </div>

//           {/* Sign Up */}
//           <p className="text-center text-sm text-gray-300">
//             Don’t have an account?{" "}
//             <button className="text-pink-300 hover:text-white font-semibold hover:underline">
//               Sign up
//             </button>
//           </p>
//         </div>

//         <p className="text-center text-xs text-white/70 mt-6">
//           By signing in, you agree to our{" "}
//           <button className="underline hover:text-white">Terms</button> &{" "}
//           <button className="underline hover:text-white">Privacy Policy</button>.
//         </p>
//       </div>
//     </div>
//   );
// }
