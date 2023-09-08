import { useState } from "react"

export default function Counter(){
    const [count, setCount] = useState(0)
    

    const handleAdd = () =>{
        // const newCount = count + 1;
        setCount(count + 1)
    }

    
    const handleReduce = () =>{
        const newCount = count - 1;
        setCount(newCount)
    }

    return(
        <div>
            <h3 className="border-2 my-10 text-5xl text-slate-600">Counter: {count}</h3>
            <div className="flex justify-around mb-10">
                <button className="btn btn-error" onClick={handleAdd}>hello</button>
                <button className="btn btn-error" onClick={handleReduce}>Reduce</button>
            </div>
        </div>
    )
}