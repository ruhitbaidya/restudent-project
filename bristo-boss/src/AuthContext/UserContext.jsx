import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
import auth from "./firebase";
import Datafetch from "../Layout/shared/Datafetch";
export const contextProvide = createContext(null);

const UserContext = ({ children }) => {
  const fetchdata = Datafetch()
const [user, setUser] = useState(null)
const [loading, setLoading] = useState(false);
const provider = new GoogleAuthProvider()
  const googleLogin = ()=>{
    setLoading(true);
      return signInWithPopup(auth, provider);
  }
  const logOut = ()=>{
    setUser(null)
    setLoading(false)
    return signOut(auth)
  }

  useEffect(()=>{
    const unSubscribe = onAuthStateChanged(auth, (person)=>{
        if(person){
          setUser(person)
          setLoading(false)
          const infos = {
            name : person.displayName,
            email : person.email
          }
          fetchdata.post("/userGet", infos)
          .then((res)=>{
            console.log(res)
          })
          .catch((err)=>{
            console.log(err)
          })

          fetchdata.post("/jwtCreate", {email : person.email})
          .then((res)=> {
            console.log(res.data)
            const striData = JSON.stringify(res.data);
            localStorage.setItem("token", striData)
          })
        }
    })
    return ()=>{
      unSubscribe();
    }
  }, [])

  const info = {googleLogin, user, loading, logOut};
  return (
    <contextProvide.Provider value={info}>{children}</contextProvide.Provider>
  );
};

export default UserContext;
