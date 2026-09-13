import {NavLink} from "react-router";

const Navbar = () => {
    return (
        <nav className="navbar navbar-dark bg-dark">
            <div className="container">

                {/* Ліва частина */}
                <div className="d-flex gap-3">
                    <NavLink
                        className={({isActive}) =>
                            "nav-link text-white" + (isActive ? " fw-bold text-warning" : "")
                        }
                        to="/"
                        end
                    >
                        Home
                    </NavLink>

                    <NavLink
                        className={({isActive}) =>
                            "nav-link text-white" + (isActive ? " fw-bold text-warning" : "")
                        }
                        to="/about"
                    >
                        Про нас
                    </NavLink>
                </div>

                {/* Права частина */}
                <ul className="navbar-nav flex-row align-items-center gap-3">
                    <li className="nav-item">
                        <NavLink
                            className={({isActive}) =>
                                "nav-link text-white" + (isActive ? " fw-bold text-warning" : "")
                            }
                            to="/login"
                        >
                            Login
                        </NavLink>
                    </li>

                    <li className="nav-item">
                        <NavLink
                            className={({isActive}) =>
                                "btn " + (isActive ? "btn-warning" : "btn-primary")
                            }
                            to="/register"
                        >
                            Register
                        </NavLink>
                    </li>
                </ul>

            </div>
        </nav>
    );
};

export default Navbar;
