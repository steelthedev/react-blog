import { useParams } from "react-router-dom";
import { useEffect } from "react";
import useFetch from "./useeffect";
import { useHistory } from "react-router";
const BlogDetails = () => {
    const { slug } = useParams();
    const {data:blog ,error, isPending} = useFetch('http://localhost:8000/api/database/blog/view_post/' + slug);
    const history = useHistory();

    const handleDelete = () => {
        fetch('http://localhost:8000/api/database/blog/delete_post/' + slug, {
            method:'DELETE',

        }).then(() => {

            history.push('/');
        })
    }
    return ( 
        <div className="container">
  <div className="row">
      {isPending && <div>Loading...</div>}
      {error && <div>{error}</div>}
    <span>Database/blog  </span>
    <div className="col-md-12 col-lg-12 mt-5 ">
      <a className="btn btn-outline-white pull-right mt-2 login-btn btn-md ">Add A New Release</a>
      <h2>Your Blog</h2>
    </div>
  </div>
  {blog && (
    <div className="row justify-content-center ">
    <div className="col-md-8 text-center mt-5">
      <div className="bg-row">
      <div className="b-title mt-3">
        <h3>{blog.title}</h3>
      </div>
      <div className="image">
          <img src={blog.media} alt="blog-image" width="70%"/>
      </div>
      <div className="word">
          {blog.text}
      </div>
      <button onClick={handleDelete} className="btn btn-outline-white btn-danger ">Delete Blog</button>
    </div>
    </div>
    
  </div>
  )}
  
</div>

     );
}
 
export default BlogDetails;