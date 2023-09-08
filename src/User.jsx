import { useEffect, useState } from "react"

export default function User(){

    // 1- declare a state to hold the data
    const [users, setUsers] = useState([])

    // 2- useEffect with Call back and dependency
    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/users`)
        .then(res => res.json())
        .then(data => setUsers(data))
    }, [])
    return(
        <div>
            <h1>Users: {users.length}</h1>
        </div>
        
    )
}