import React, { useState } from 'react';
import { Squash as Hamburger } from 'hamburger-react';
import NavTitle from './components/NavTitle';
import NavOps from './components/NavOps';

export default function Header() {
  const [isOpen, setOpen] = useState(false);

  return (
    <header className="header softW">
      <nav className="navHeader marginContainer">
        <NavTitle />
        <div className="navHeader__menu">
          <Hamburger
            rounded
            color="#ff4c30"
            label="Show menu"
            toggled={isOpen}
            toggle={setOpen}
            className="navHeader__optionsContainer__menu"
          />
        </div>
        <NavOps isOpen={isOpen} setOpen={setOpen} />
      </nav>
    </header>
  );
}
