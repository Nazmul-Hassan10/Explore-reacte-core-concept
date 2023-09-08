export default function Friend({friend}){
    console.log(friend)
    const {name, email, username, address} = friend
    return(
        <div className="border-4 border-red-400 mt-10 rounded-lg p-4">
            <h3 className="text-3xl font-bold">Name: {name}</h3>
            <p className="text-2xl">Email: {email}</p>
            <p className="text-2xl">Username: {username}</p>
            <p className="text-2xl">address: {address.street}</p>
        </div>
    )
}