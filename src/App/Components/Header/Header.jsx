import {
	Container,
	Image,
	Nav,
	Navbar,
	NavbarBrand,
	NavbarCollapse,
	NavbarToggle,
	NavItem,
	NavLink,
} from 'react-bootstrap';
import { NavLink as Link } from 'react-router-dom';
import furnicap_logo from '../../../Assets/furnicao_logo.png';

function Header() {
	return (
		<Navbar expand="md" data-bs-theme="dark" className="m-2">
			<Container>
				<NavbarBrand className="w-15 bg-light text-center border-0 rounded-pill">
					<Image src={furnicap_logo} className="w-75" />
				</NavbarBrand>
				<NavbarToggle aria-controls="basic-navbar-nav" />
				<NavbarCollapse
					id="basic-navbar-nav"
					className="justify-content-center me-5 align-items-center"
				>
					<Nav
						fill
						className="border-md rounded-pill"
						data-bs-theme="light"
					>
						<NavItem>
							<NavLink as={Link} to="/">
								Home
							</NavLink>
						</NavItem>
						<NavItem>
							<NavLink href="#products">Products</NavLink>
						</NavItem>
						<NavItem>
							<NavLink href="#about">About Us</NavLink>
						</NavItem>
						<NavItem>
							<NavLink href="#contact">Contact</NavLink>
						</NavItem>
					</Nav>
				</NavbarCollapse>
			</Container>
		</Navbar>
	);
}

export default Header;
