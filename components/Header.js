import React, { useState, useEffect} from 'react';
import {
    Container,
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink
} from 'reactstrap'

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [sticky,setSticky] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

    useEffect(() => {
        window.addEventListener('scroll',handleScroll);
    });

    const handleScroll = () =>{
        if(window.scrollY > 90){
            setSticky(true);
        }else if(window.scrollY<90){
            setSticky(false);
        }
    }

    return(
        <div className={`header${sticky ? ' sticky' : ''}`}>
            <Navbar light expand='md'>
                <Container>
                    <NavbarBrand href="/">Morelia</NavbarBrand>
                    <NavbarToggler onClick={toggle} />
                    <Collapse isOpen={isOpen} navbar>
                        <Nav className="m-auto" navbar>
                            <NavItem>
                                <NavLink href="/">Inicio</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="#feature">Lista anime</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="#service">Mangas</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="#about">Cómics</NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Container>
            </Navbar>
        </div>
    );
}

export default Header;