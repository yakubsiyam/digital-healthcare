import { useEffect, useState } from "react";
import axiosPrivate from "../api/axiosPrivate";

const useUser = (email) => {
  const [user, setUser] = useState([]);
  useEffect(() => {
    axiosPrivate
      .get(`https://digital-healthcare.onrender.com/users/${email}`)
      .then((res) => {
        setUser(res.data);
        //console.log(res.data);
      });
  }, [email]);
  return [user, setUser];
};

export default useUser;
