import Link from "../../components/link";

const Sidebar = () => {
    return(
        <nav className="navbar navbar-expand-sm bg-primary navbar-light mb-5">
            <div className="container-fluid">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link className="nav-link text-white" href="/">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link text-white" href="/login">Login</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link text-white" href="/about">About</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Sidebar