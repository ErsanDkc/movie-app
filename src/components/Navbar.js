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
                    <Navbar.Brand><NavLink to="/home"  className='text-light fs-2 text-decoration-none'>Movie App</NavLink></Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Navbar.Text>
                            {logged ? <button onClick={handleClick} className='bg-info bg-gradient text-danger fs-2 border-0 text-capitalize'><span className='text-light'>{username}</span> Logout <FiLogOut  /></button> : ""}   
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </nav>
    )
}

export default Nav;