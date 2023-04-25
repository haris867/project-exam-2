import { NavLink } from "react-router-dom";
import { Dropdown } from "react-bootstrap";
import { DropdownButton } from "react-bootstrap";
import { CgMenu } from "react-icons/cg";

export default function Nav() {
  return (
    <DropdownButton title={<CgMenu />}>
      <nav>
        <ul>
          <li>
            <NavLink to="/">HOME</NavLink>
          </li>
          <li>
            <NavLink to="/venues">VENUES</NavLink>
          </li>
          <li>
            <NavLink to="/about">ABOUT</NavLink>
          </li>
        </ul>
      </nav>
    </DropdownButton>
  );
}

// export default function Nav() {
//   return (
//     <div>
//       <nav>
//         <ul>
//           <li>
//             <NavLink to="/">HOME</NavLink>
//           </li>
//           <li>
//             <NavLink to="/venues">VENUES</NavLink>
//           </li>
//           <li>
//             <NavLink to="/about">ABOUT</NavLink>
//           </li>
//         </ul>
//       </nav>
//     </div>
//   );
// }
// import Container from "react-bootstrap/Container";
// import Nav from "react-bootstrap/Nav";
// import Navbar from "react-bootstrap/Navbar";
// import { NavLink } from "react-router-dom";

// function NavBar() {
//   return (
//     <Navbar expand="sm" style={{ backgroundColor: "lightblue" }}>
//       <Container className="ms-auto">
//         <Navbar.Brand>
//           <NavLink to="/" className="me-2 logo">
//             eCOM
//           </NavLink>
//         </Navbar.Brand>
//         <Navbar.Collapse id="basic-navbar-nav">
//           <Nav className="mx-auto text-center" style={{ fontSize: "25px" }}>
//             <NavLink to="/" className="me-2">
//               Home
//             </NavLink>

//             <NavLink to="/venues" className="me-2">
//               Venues
//             </NavLink>
//             <NavLink to="/cart" className="me-2 d-sm-none">
//               Cart
//             </NavLink>
//           </Nav>
//         </Navbar.Collapse>
//       </Container>
//   <Navbar.Toggle
//     style={{ padding: "10px" }}
//     aria-controls="basic-navbar-nav"
//   />
//     </Navbar>
//   );
// }

// function NavBar() {
//   return (
//     <Navbar expand="sm" style={{ backgroundColor: "lightblue" }}>
//       <Container className="ms-auto">
//         <Navbar.Brand>
//           <NavLink to="/" className="me-2 logo">
//             eCOM
//           </NavLink>
//         </Navbar.Brand>
//         <Navbar.Collapse id="basic-navbar-nav">
//           <Nav className="mx-auto text-center" style={{ fontSize: "25px" }}>
//             <NavLink to="/" className="me-2">
//               Home
//             </NavLink>

//             <NavLink to="/contact" className="me-2">
//               Contact
//             </NavLink>
//             <NavLink to="/cart" className="me-2 d-sm-none">
//               Cart
//             </NavLink>
//           </Nav>
//         </Navbar.Collapse>
//       </Container>
//       <Navbar.Toggle
//         style={{ padding: "10px" }}
//         aria-controls="basic-navbar-nav"
//       />
//     </Navbar>
//   );
// }

// export default NavBar;
