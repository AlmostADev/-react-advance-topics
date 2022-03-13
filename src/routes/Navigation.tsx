import { BrowserRouter, Switch, Route, NavLink, Redirect } from "react-router-dom"
import ShoppingPage from "../02-component-patterns/pages/ShoppingPage"
import logo from '../logo.svg'

const Navigation = () => {
  return (
    <BrowserRouter>
        <div className="main-layout">
            <nav>
                <img src={logo} alt="React Logo" />
                <ul>
                    <li>
                        <NavLink 
                            to='/' 
                            activeClassName='nav-active'
                        >
                            Shopping
                        </NavLink>
                    </li>
                    <li>
                        <NavLink 
                            to='/about' 
                            activeClassName='nav-active'
                        >
                            About
                        </NavLink>
                    </li>
                    <li>
                        <NavLink 
                            to='/users' 
                            activeClassName='nav-active'
                        >
                            Users
                        </NavLink>
                    </li>
                </ul>
            </nav>
            <Switch>
                <Route exact path="/about">
                    <h1>About Page</h1>
                </Route>
                <Route exact path="/users">
                    <h1>Users Page</h1>
                </Route>
                <Route exact path="" >
                    <ShoppingPage />
                </Route>
                <Redirect to={`/`}/>
            </Switch>
        </div>
    </BrowserRouter>
  )
}

export default Navigation