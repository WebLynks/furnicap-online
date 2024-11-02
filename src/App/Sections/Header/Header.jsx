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
		<header>
			<Navbar expand="md" data-bs-theme={theme} className="m-2">
				<Container>
					<NavbarBrand
						className={`w-9r w-md-11r w-lg-13r bg-light text-center border rounded-pill px-4 py-1 py-md-2`}
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
							className="border-md rounded-pill px-lg-4 px-md-3 px-2 ms-lg-n1 ms-xl-n3 ms-xxl-n5 align-items-start mt-3 mt-md-0"
							data-bs-theme={theme === 'light' ? 'dark' : 'light'}
						>
							<NavItem className="mt-1 mt-md-0">
								<NavLink as={Link} to="/">
									<span className="fs-xs-4 fs-md-6 fw-bold fw-md-medium px-lg-3 px-md-2">
										Home
									</span>
								</NavLink>
							</NavItem>
							<NavItem className="mt-3 mt-md-0">
								<NavLink as={Link} to="/products">
									<span className="fs-xs-4 fs-md-6 fw-bold fw-md-medium px-lg-3 px-md-2">
										Products
									</span>
								</NavLink>
							</NavItem>
							<NavItem className="mt-3 mt-md-0">
								<NavLink as={Link} to="/about">
									<span className="fs-xs-4 fs-md-6 fw-bold fw-md-medium  px-lg-3 px-md-2">
										About Us
									</span>
								</NavLink>
							</NavItem>
							<NavItem className="mt-3 mt-md-0">
								<NavLink as={Link} to="/contact">
									<span className="fs-xs-4 fs-md-6 fw-bold fw-md-medium  px-lg-3 px-md-2">
										Contact
									</span>
								</NavLink>
							</NavItem>
						</Nav>
					</NavbarCollapse>
				</Container>
			</Navbar>
		</header>
	);
}

export default Header;
