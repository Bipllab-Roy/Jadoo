

const ProfilePage = () => {
  return (
   <div className="container">
     <div className="min-h-screen flex items-center justify-end">
      <div className="w-full max-w-md bg-white dark:bg-gray-800 rounded-[10px] shadow-lg p-8">
        <h1 className="text-2xl font-semibold text-center mb-6 text-gray-800 dark:text-gray-100"> ProfilePage</h1>
      <div className="w-full  items-center justify-end">
        <fieldset className="fieldset">
          <legend 
          className="fieldset-legend text-gray-600 dark:text-gray-300">Name</legend>
          <input 
          type="text" 
          className="input w-full"
           placeholder="Type here" />
        </fieldset>
        <fieldset className="fieldset">
          <legend className="fieldset-legend text-gray-600 dark:text-gray-300">Email</legend>
          <input 
          type="text" 
          className="input w-full" 
          placeholder="Type here" />
        </fieldset>
        <fieldset className="fieldset">
          <legend className="fieldset-legend text-gray-600 dark:text-gray-300">Password</legend>
          <input 
          type="text" 
          className="input w-full" 
          placeholder="Type here" />
        </fieldset>
        <button type="submit" className="btn btn-accent  w-full mt-4"> Update profile</button>
      </div>
      </div>
    </div>
   </div>
  );
};

export default ProfilePage;



// const ProfilePage = () => {
//   return (
//    <div className="container">
//      <div className="min-h-screen flex items-center justify-end  ">
//       <div className="w-full max-w-md bg-white dark:bg-gray-800 rounded-[10px] shadow-lg p-8">
//         <h1 className="text-2xl font-semibold text-center mb-6 text-gray-800 dark:text-gray-100">
//           Profile Page
//         </h1>

//         <form className="space-y-5">
//           <fieldset className="fieldset">
//             <legend className=" text-gray-600 dark:text-gray-300">
//               Name
//             </legend>
//             <input
//               type="text"
//               className="input input-bordered w-full"
//               placeholder="Type your name"
//             />
//           </fieldset>

//           <fieldset className="fieldset">
//             <legend className="fieldset-legend text-gray-600 dark:text-gray-300">
//               Email
//             </legend>
//             <input
//               type="email"
//               className="input input-bordered w-full"
//               placeholder="Type your email"
//             />
//           </fieldset>

//           <fieldset className="fieldset">
//             <legend className="fieldset-legend text-gray-600 dark:text-gray-300">
//               Password
//             </legend>
//             <input
//               type="password"
//               className="input input-bordered w-full"
//               placeholder="Type your password"
//             />
//           </fieldset>

//           <button
//             type="submit"
//             className="btn btn-accent w-full mt-4"
//           >
//             Update Profile
//           </button>
//         </form>
//       </div>
//     </div>
//    </div>
//   );
// };

// export default ProfilePage;



