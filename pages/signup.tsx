import { NextPage } from "next"

const Signup: NextPage = () => {
    return(
        <div className="container-fluid ">
            <form action="/" className="row">
                <div className="row mx-auto">
                    <div className="m-3 col-sm-4 mx-auto">
                        <label htmlFor="email" className="form-label">Email:</label>
                        <input type="email" className="form-control" id="email" placeholder="Enter email" name="email"/>
                    </div>
                </div>
                
                <div className="row mx-auto">
                    <div className="col-sm-4 mx-auto">
                        <label htmlFor="pwd" className="form-label">Password:</label>
                        <input type="password" className="form-control" id="pwd" placeholder="Enter password" name="pswd"/>
                    </div>
                </div>
                
                <div className="row mx-auto m-2">
                    <div className="form-check mx-auto col-sm-4">
                        <label className="form-check-label m-1">
                        <input className="form-check-input" type="checkbox" name="remember"/> Remember me
                        </label>
                    </div>
                </div>
                
                <div className="row mx-auto m-2">
                    <div className="col-sm-4 mx-auto">
                        <button type="submit" className="btn btn-primary mx-auto">Submit</button>
                    </div>
                </div>
                
            </form>
        </div>
    )
}

export default Signup