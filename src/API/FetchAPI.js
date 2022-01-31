
import useFetch from "react-fetch-hook";


//Fetchs API data and returns if "isLoading" returns false
const FetchAPI = APIUrl => {
        const { isLoading , data } = useFetch(APIUrl);
        

        return isLoading? (
            console.log(`Loading = ${isLoading}`)
        ) : (data.results);
        
       
    
};

export default FetchAPI;