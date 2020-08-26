import React from "react";
import { Link } from "react-router-dom";

export default function NavigationMenu(props) {
  return (
    <div>
      <div className="font-bold py-3">This is the menu</div>
      <ul>
        <li>
          <Link
            to="/"
            className="text-blue-500 py-3 border-t border-b block"
            onClick={props.closeMenu}
          >
            home
          </Link>
        </li>
        <li>
          <Link
            to="/about"
            className="text-blue-500 py-3 border-b block"
            onClick={props.closeMenu}
          >
            About
          </Link>
        </li>
        <li>
          <Link
            to="/more"
            className="text-blue-500 py-3 border-b block" 
            onClick={props.closeMenu}
          >
            More
          </Link>
        </li>
      </ul>
    </div>
  );
}
