import axios from "axios";
import { useEffect, useState } from "react";

const useAdmin = (user) => {
  const [admin, setAdmin] = useState(false);
  const [adminLoading, setAdminLoading] = useState(true);
  useEffect(() => {
    const email = user?.email;
    if (email) {
      axios
        .get(`https://wood-peckers.herokuapp.com/admin/${email}`)
        .then((res) => {
          console.log(res.data);
          setAdmin(res.data.admin);
          setAdminLoading(false);
        });
    }
  }, [user]);

  return [admin, adminLoading];
};

export default useAdmin;
