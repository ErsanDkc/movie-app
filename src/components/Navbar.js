import { Navbar, Container } from 'react-bootstrap'
import { NavLink, useNavigate } from 'react-router-dom';
import { useLogin } from '../context/LoginContext';
import { FiLogOut } from 'react-icons/fi'

function Nav() {
   const {logged,setLogged,username} = useLogin()
    const navigate= useNavigate()

    const handleClick = () => {
        localStorage.removeItem("info")
        localStorage.removeItem("user")
        
        setLogged(false)
        navigate("/")
    }
    
    return (
        <nav className='bg-info bg-gradient text-light'>
            <Navbar>
                <Container>
                    <Navbar.Brand className='text-light fs-2'>Movie App</Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Navbar.Text>
                            {logged ? <button onClick={handleClick} className='bg-info bg-gradient text-light fs-2 border-0 text-capitalize'>{username} Logout <FiLogOut /></button> : <NavLink to="/register" className='text-light fs-2'>Register</NavLink>}   
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </nav>
    )
}

export default Nav;