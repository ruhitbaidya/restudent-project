import { useQuery } from "@tanstack/react-query"
import Datafetch from "./Datafetch";


const GetProduct = () => {
    const fetchdata = Datafetch();
    const {refetch, data : card = []} = useQuery({
        queryKey : ["card"],
        queryFn : async()=>{
            const res = await fetchdata.get("/cards")
                return res.data           
        }
    })
    return [card, refetch];
}

export default GetProduct