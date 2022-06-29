import type { NextPage } from 'next'
import Link from '../src/components/link'

const Home: NextPage = () => {
  return (
    <div className="container-fluid ">
        
      <div className="row mx-auto">
        <div className="m-3 col-sm-4 mx-auto">
          <h1>Home Page</h1>
        </div>
      </div>
      
      <div className="row mx-auto">
        <div className="col-sm-4 mx-auto">
          <h2>This is the Home Page</h2>
        </div>
      </div>
      
      <div className="row mx-auto m-2">
        <div className="col-sm-4 mx-auto">
          <button className="btn btn-primary mx-auto"><Link className="nav-link text-white" href="/login">Logout</Link></button>
        </div>
      </div>
            
    </div>
  )
}

export default Home
