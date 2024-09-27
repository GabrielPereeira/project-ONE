import { useState } from "react";
import Button from "../UI/Button";
import { v4 as UUID } from "uuid";
import "./index.css";

const Navbar = () => {
  const [btnSelected, setBtnSelected] = useState(0);
  const navItems = [
    { label: "Dashboard" },
    { label: "Leads" },
    { label: "Vendas" },
    { label: "Alunos" },
    { label: "Administração" },
    { label: "Financeiro" },
    { label: "Relatórios" },
  ];

  const handleOnClick = (label) => setBtnSelected(label);

  return (
    <nav className="navBar">
      <div>
        {navItems.map((item) => {
          const { label } = item;
          const isSelected = btnSelected === label;
          return (
            <li key={UUID()}>
              <Button
                label={label}
                onClick={() => handleOnClick(label)}
                className={isSelected ? "selected" : ""}
              />
            </li>
          );
        })}
      </div>
    </nav>
  );
};

export default Navbar;
