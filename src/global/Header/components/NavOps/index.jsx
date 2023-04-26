import React from 'react';
import { Link } from 'react-router-dom';

export default function NavOps({ isOpen, setOpen }) {
  const openMenuStyle = {
    transform: 'translateX(0px)',
  };
  const closeMenuStyle = {
    transform: 'translateX(800px)',
  };

  const handleCloseMenu = () => {
    setOpen(false);
  };

  return (
    <section
      className="navHeader__ops"
      style={isOpen ? openMenuStyle : closeMenuStyle}
    >
      <Link onClick={handleCloseMenu} to="/">
        Home
      </Link>
      <Link onClick={handleCloseMenu} to="/about">
        About
      </Link>
      <Link onClick={handleCloseMenu} to="/vehicles">
        Vehicles
      </Link>
      <Link onClick={handleCloseMenu} to="/testimonials">
        Testimonials
      </Link>
      <Link onClick={handleCloseMenu} to="/ourteam">
        Our Team
      </Link>
      <Link onClick={handleCloseMenu} to="/contact">
        Contact
      </Link>
    </section>
  );
}
