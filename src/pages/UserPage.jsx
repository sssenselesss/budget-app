import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const UserPage = () =>{

    const params = useParams();


    const [user,setUser] = useState({});


    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`)
        .then((response) => response.json())
        .then((data)=>setUser(data));
    },[])

    console.log(user)
    

    return (
        <h2>  {user.name},
        <br />{user.name}<br />{user.email}<br />{user.website}<br />{user.username}<br /> <br /> {user?.address?.city}</h2>
    )
}

export default UserPage;