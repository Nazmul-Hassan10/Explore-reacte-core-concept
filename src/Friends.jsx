// We're importing some special tools from React that help us build our app.
import { useEffect, useState } from "react"
import Friend from "./Friend"

// We're creating a special function called "Friends" that will help us show our friends' information.
export default function Friends(){

    // We're getting ready to remember our friends' information using a magic tool called "useState."
    // At first, we don't know any friends, so we start with an empty list [].
    const [friends, setFriends] = useState([])

    // We're telling our app to do something special when it starts up.
    // We want to go to the internet (like a magical library for computers) and ask for a list of friends.
    // We're using a long address (URL) to find this list on the internet.
    useEffect(() => {

        // We're sending a message (request) to the internet using the address we found.
        // We're asking for the list of friends, and when we get it, we'll do something with it.
        fetch(`https://jsonplaceholder.typicode.com/users`)

        // When we get a response (like a letter from the internet), we need to open it and see what's inside.
        // We're saying, "Hey, computer, please read this letter and tell us what's inside."
        .then(res => res.json())

        // Inside the letter, we found a list of friends' information.
        // We're taking this information and using our magic tool "setFriends" to remember it.
        .then(data => setFriends(data))
    }, []) // We're telling our app to do this only once when it starts.

    // Finally, we want to show our friends' information on the screen.
    // We're making a special spot on the screen and writing how many friends we have.
    return (
        <div className="border-4 border-red-400 mt-10 rounded-lg p-10">
            <h3>Friends: {friends.length}</h3>
            {
                //  the value of friend.map (10 objects) will go to Friend file and gets set there. Now every object can be found separately in Friend files console.log(friend)
                friends.map((friendo)=> <Friend friend={friendo}></Friend>)
            }
        </div>
    )
}