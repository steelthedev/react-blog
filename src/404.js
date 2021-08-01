import { Link } from "react-router-dom"

const NotFound = () => {
    return ( 
        <div className="container">
            <div className="row jsutify-content-center ">
                <div className="col-md-12 col-lg-12 text-center mt-2">
                    <div className="404-page">
                        <h2>
                            Sorry that page cannot be found
                        </h2>
                        <p>You must have inputed an invalid url or some issues might have occured</p>

                        <Link to="/" className="mt-5">Go to Homepage....</Link>
                    </div>

                </div>
            </div>
        </div>
     );
}
 
export default NotFound;