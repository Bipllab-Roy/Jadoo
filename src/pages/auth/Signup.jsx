import { useState } from "react"
import { useAuth } from "../../hooks/useAuth"
import {  FaFacebookF, FaGoogle } from "react-icons/fa"
import InputBox from "../../components/ui/InputBox"

const Signup = () => {
    const {signup}= useAuth()

    const [userData, setUserData] =useState({
        email:"",
        password:""
    })

    const onChange=(e)=>{
        const {name, value}= e.target;
        setUserData({...userData, [name]: value})
    }

    const onSubmit=(e)=>{
        e.preventDefault();
        signup(userData.email, userData.password)
    }

  return (
    // <div className='min-h-screen flex w-full  items-center justify-center max-w-[500px] max-h-[200px] bg-gradient-to-br'>
    //  <div className="  flex justify-end items-center shadow-2xl rounded-2xl w-full max-w-md p-8 border border-gray-100">
    //    <form action="" onSubmit={onSubmit}>
    //   <input onChange={(e)=>onChange(e) } name="email" type="email" placeholder="Email" className="input input-bordered w-full p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400" />
    //   <input onChange={(e)=>onChange(e) } name="password" type="password" placeholder="Password" className="input input-bordered w-full p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 py-2"  />
    //   <button type="submit" className='btn btn-active'>Submit</button>
    //   </form>
    //  </div>

    // </div>


     <section className="bg-gray-100 py-20 dark:bg-dark lg:py-[120px]">
      <div className="container mx-auto">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div className="relative mx-auto max-w-[525px] overflow-hidden rounded-lg bg-white px-10 py-16 text-center dark:bg-dark-2 sm:px-12 md:px-[60px]">
              <form onSubmit={onSubmit}>
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
                    value="Sign Up"
                    className="w-full cursor-pointer rounded-md border border-primary bg-primary px-5 py-3 text-base font-medium text-white transition hover:bg-opacity-90"
                  />
                </div>
              </form>
              <p className="mb-6 text-base text-secondary-color dark:text-dark-7">
                Connect With
              </p>
              <ul className="-mx-2 mb-12 flex justify-between">
                 <li className="w-full px-2">
                  <a
                    href="/#"
                    className="flex h-11 items-center justify-center rounded-md bg-[#D64937] hover:bg-opacity-90"
                  >
                    <FaFacebookF/>
                   
                  </a>
                </li>
               
                <li className="w-full px-2">
                  <a
                    href="/#"
                    className="flex h-11 items-center justify-center rounded-md bg-[#D64937] hover:bg-opacity-90"
                  >
                    <FaGoogle/>
                   
                  </a>
                </li>
              </ul>
             
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Signup;




//{ANOTHER DESIGNE}

// import { useState } from "react";
// import { useAuth } from "../../hooks/useAuth";
// import { useNavigate } from "react-router";

// const Signup = () => {
//   const { signup, error, loading } = useAuth();
//   const navigate= useNavigate()

//   const [userData, setUserData] = useState({
//     email: "",
//     password: "",
//   });

//   const onChange = (e) => {
//     const { name, value } = e.target;
//     setUserData({ ...userData, [name]: value });
//   };

//   const onSubmit = (e) => {
//     e.preventDefault();
//     if (!userData.email || !userData.password) {
//       alert("Please fill all fields");
//       return;
//     }
//     signup(userData.email, userData.password, navigate);
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 p-6">
//       <div className="bg-white shadow-2xl rounded-2xl w-full max-w-md p-8 border border-gray-100">
//         <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
//           Create an Account
//         </h2>
//         <form onSubmit={onSubmit} className="flex flex-col gap-5">
//           {/* Email */}
//           <div className="flex flex-col gap-2">
//             <label htmlFor="email" className="text-gray-700 font-medium">
//               Email Address
//             </label>
//             <input
//               name="email"
//               type="email"
//               id="email"
//               placeholder="Enter your email"
//               value={userData.email}
//               onChange={onChange}
//               className="input input-bordered w-full p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
//             />
//           </div>

//           {/* Password */}
//           <div className="flex flex-col gap-2">
//             <label htmlFor="password" className="text-gray-700 font-medium">
//               Password
//             </label>
//             <input
//               name="password"
//               type="password"
//               id="password"
//               placeholder="Enter your password"
//               value={userData.password}
//               onChange={onChange}
//               className="input input-bordered w-full p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
//             />
//           </div>

//           {/* Error Message */}
//           {/* {error && (
//             <p className="text-sm text-red-500 bg-red-100 px-3 py-2 rounded-lg text-center">
//               {error}
//             </p>
//           )} */}

//           {/* Submit Button */}
//           <button
//             type="submit"
//             className={`btn w-full py-3 rounded-xl font-semibold  text-black transition-all duration-300 `}
//           >
//             Sign in
//           </button>
//         </form>

//         {/* Extra footer */}
//         <p className="text-center text-sm text-gray-500 mt-6">
//           Already have an account?{" "}
//           <a
//             href="/login"
//             className="text-blue-600 font-semibold hover:underline"
//           >
          
//           </a>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Signup;



// {}







