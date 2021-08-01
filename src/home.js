
import BlogList from "./bloglist";
import useFetch from "./useeffect";

const Home = () => {
    
  const {data, isPending , error} = useFetch('http://localhost:8000/api/database/blog');
   
  
    return ( 
   
        <div className="home">
            {error && <div>{error }</div>}
            {isPending && <div> Loading.. </div>}
            {data && <BlogList blogs={data} title="This is steel"/>}
          
           
        </div>
     );
}
 
export default Home;