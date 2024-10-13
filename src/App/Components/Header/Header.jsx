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

function Header({ theme }) {
	return (
		<Navbar expand="md" data-bs-theme={theme} className="m-2">
			<Container>
				<NavbarBrand
					className={`w-8r bg-light text-center border border-${
						theme === 'light' ? 'dark' : 'light'
					} rounded-pill px-3 py-0`}
				>
					<Image fluid src={furnicap_logo} />
				</NavbarBrand>
				<NavbarToggle aria-controls="basic-navbar-nav" />
				<NavbarCollapse
					id="basic-navbar-nav"
					className="justify-content-center me-5 align-items-center"
				>
					<Nav
						fill
						className="border-md rounded-pill"
						data-bs-theme={theme === 'light' ? 'dark' : 'light'}
					>
						<NavItem>
							<NavLink as={Link} to="/">
								<span className="h6">Home</span>
							</NavLink>
						</NavItem>
						<NavItem>
							<NavLink href="/furnicap-online#products">
								<span className="h6">Products</span>
							</NavLink>
						</NavItem>
						<NavItem>
							<NavLink href="/furnicap-online#about">
								<span className="h6">About Us</span>
							</NavLink>
						</NavItem>
						<NavItem>
							<NavLink href="/furnicap-online#contact">
								<span className="h6">Contact</span>
							</NavLink>
						</NavItem>
					</Nav>
				</NavbarCollapse>
			</Container>
		</Navbar>
	);
}

export default Header;
