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

const Signup = () => {
  const { signup, error, loading } = useAuth();

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
    signup(userData.email, userData.password);
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
