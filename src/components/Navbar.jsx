import { Button } from "react-bootstrap";

const Navbar = () => {
  return (
    <nav className="navbar bg-light">
      <div className="container-fluid mx-3">
        <span className="navbar-brand mb-0 h1 text-primary fw-bolder">
          ATool<span className="text-warning">.</span>
        </span>
        {/* For Desktop */}
        <div className="d-none d-lg-block">
          <Button className="me-3 px-5 " variant="primary fw-bold">
            Start Free Trial
          </Button>
          <Button className="me-3 px-5 text-white" variant="warning fw-bold">
            Login
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
