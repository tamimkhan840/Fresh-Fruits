import { useContext } from "react"
import { AuthContext } from "../context"


function Profile() {
  const {users, isLoader} = useContext(AuthContext)
  console.log(users);


  return (
    <>
   {
    isLoader ? <span className="loading loading-bars loading-lg h-screen mx-auto text-center"> </span> : <div className="w-full h-full bg-white my-10 rounded-lg flex flex-col  items-center p-2 overflow-hidden">
    <div className="image w-[20vw] h-[20vw] rounded-full bg-blue-500 overflow-hidden">
        <img className="w-full h-full object-cover" src={users?.photoURL} alt={users?.displayName} />
        </div>
        <h2 className="font-semibold text-center text-4xl">{users?.displayName}</h2>
        <h4 className="text-red-500 opacity-70 text-xs break-words text-center my-2">{users?.email}</h4>
        {/* <p className="text-center text-xs font-semibold tracking-tight my-2">Lorem ipsum dolor sit amat consectetur.</p> */}
        <button  className="py-2 px-4 text-2xl bg-red-500 mt-10 rounded-lg font-semibold text-white">logout </button>
    </div>
   }
    </>
  )
}

export default Profile
