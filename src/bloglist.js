import { Link } from "react-router-dom";

const Bloglist = ({blogs}) => {
  
    return ( 
        
        <div className="container">
            <div className="row justify-content-center">
                {blogs.map((blog) => (
                     <div className="col-md-4 col-lg-4 text-center mt-5 " key={blog.slug}>
                     <div className="blog-single">
                        <Link to={`/blog/${blog.slug}`}>
                        <div className="blog-title">
                             <h2>
                             {blog.title}
                             </h2>
                         </div>
 
                         <div className="blog-author">
                             <span>{blog.author}</span>
                         </div>
                        </Link>
                         
                     </div>
                 </div>
                        

                ))}
               
            </div>
        </div>
     );
}
 
export default Bloglist;

