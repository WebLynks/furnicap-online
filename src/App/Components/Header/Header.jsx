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
					className={`w-13r bg-light text-center border rounded-pill px-4 py-2`}
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
						className="border-md rounded-pill px-lg-4 px-md-3"
						data-bs-theme={theme === 'light' ? 'dark' : 'light'}
					>
						<NavItem>
							<NavLink as={Link} to="/">
								<span className="h6 px-lg-3 px-md-2">Home</span>
							</NavLink>
						</NavItem>
						<NavItem>
							<NavLink href="/furnicap-online#products">
								<span className="h6 px-lg-3 px-md-2">
									Products
								</span>
							</NavLink>
						</NavItem>
						<NavItem>
							<NavLink href="/furnicap-online#about">
								<span className="h6 px-lg-3 px-md-2">
									About Us
								</span>
							</NavLink>
						</NavItem>
						<NavItem>
							<NavLink href="/furnicap-online#contact">
								<span className="h6 px-lg-3 px-md-2">
									Contact
								</span>
							</NavLink>
						</NavItem>
					</Nav>
				</NavbarCollapse>
			</Container>
		</Navbar>
	);
}

export default Header;
