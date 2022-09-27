import axios from "axios";
import { useEffect, useState } from "react";


const useUsers = () => {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        axios.get(`https://wood-peckers.herokuapp.com/users`)
            .then(res => {
                setUsers(res.data);
            })
    }, []);
    return [users, setUsers]
};

export default useUsers;