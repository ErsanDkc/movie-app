import React from 'react'
import { Navbar,Container } from 'react-bootstrap'
import { NavLink } from 'react-router-dom';
function Nav() {
    return (
        <nav className='bg-info bg-gradient text-light'>
            <Navbar>
                <Container>
                    <Navbar.Brand className='text-light fs-2'>Movie App</Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Navbar.Text>
                            <NavLink to="/register" className='text-light fs-2'>Register</NavLink>
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </nav>
    )
}

export default Nav;