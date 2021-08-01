import { useState } from "react";
import { useHistory } from "react-router-dom";


const Create = () => {

    const [title, setTitle] = useState('');
    const [text, setText] = useState('');
    const [author , setAuthor] = useState('mario');
    const [isPending, setisPending] = useState(false);
    const history = useHistory();

    const handleSubmit = (e) =>{
        e.preventDefault();
        const blog = {title, text, author};
        
        setisPending(true);
        fetch('http://localhost:8000/api/database/blog/create_post',{
            method:'POST',
            headers:{"Content-Type": "application/json" },
            body:JSON.stringify(blog)
        }).then(() => {
            console.log('new blog');
            setisPending(false);
            history.push('/');
        })

       

    }
    return ( 
        <div className="addpost">
            <h2>
                Add a new Blog
            </h2>

            <form onSubmit={handleSubmit}>
 
            <div className="form-group">
              <label>Title </label>
                    <input 
                    type="text" 
                    className="form-control box-shadow-none " 
                    name="title" 
                    value={title}
                    onChange ={(e) => setTitle(e.target.value)}
                    required/>
            </div>
            
              {/*  <div className="form-group">
              <label >Media</label>
         <input type="file"
          name="media"
           className="form-control box-shadow-none" 
           required
           />
            </div>*/}
            
            
    <div className="form-group">
       <label>Text</label>
            <textarea 
            className="form-control textarea" 
            name="text"  
            width="100%"
            rows="6"
            value={text}
            onChange ={(e) => setText(e.target.value)}
            id="editor"></textarea>
     </div>


     <div className="form-group">
       <label>Author</label>
            <select 
             value={author}
             onChange ={(e) => setAuthor(e.target.value)}
            >
                <option value="kal">Kal</option>
                <option value="blur">Blur</option>
            </select>
     </div>



            

     { !isPending && <button 
        type="submit"
        className="btn border-outline-none btn-outline-white mt-3 s-btn">Push Your Post</button>}
     { isPending && <button 
        type="submit"
        className="btn border-outline-none btn-outline-white mt-3 s-btn" disabled>Adding blog...</button>}

     
            </form>
        </div>

     );
}
 
export default Create;