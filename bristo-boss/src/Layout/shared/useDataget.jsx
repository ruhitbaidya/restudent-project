import { useEffect, useState } from "react"

const useDataget = () => {
    const [menu, setMenu] = useState([]);
    const [loading, setLoading] = useState(true)
    useEffect(()=>{
        fetch("http://localhost:5000/product")
        .then((res)=> res.json())
        .then((data)=> {
            setLoading(false)
            setMenu(data)
        })
    }, [])
  return [menu, loading]
}

export default useDataget;