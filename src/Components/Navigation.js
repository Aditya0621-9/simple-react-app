import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useTransition, animated } from "react-spring";

export default function Navigation() {
  const [showMenu, setShowMenu] = useState(false);

  const maskTransitions = useTransition(showMenu, null, {
    from: { position: "absolute", opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
  });

  const menuTransitions = useTransition(showMenu, null, {
    from: { opacity: 0, transform: "translateX(-100%)" },
    enter: { opacity: 1, transform: "translateX(0%)" },
    leave: { opacity: 0, transform: "translateX(-100%)" },
  });

  //   let menu;
  //   let menuMask;
  // className="fixed bg-white top-0 left-0 w-4/5 h-full z-10 shadow"
  // className="bg-black-t-50 fixed top-0 left-0 w-full h-full z-10"

  return (
    <nav>
      <span className="text-xl">
        <FontAwesomeIcon icon={faBars} onClick={() => setShowMenu(!showMenu)} />
      </span>

      {maskTransitions.map(
        ({ item, key, props }) =>
          item && (
            <animated.div
              key={key}
              style={props}
              className="bg-black-t-50 fixed top-0 left-0 w-full h-full z-10"
              onClick={() => setShowMenu(false)}
            ></animated.div>
          )
      )}

      {menuTransitions.map(
        ({ item, key, props }) =>
          item && (
            <animated.div
              key={key}
              style={props}
              className="fixed bg-white top-0 left-0 w-4/5 h-full z-10 shadow p-3"
            >
              <span className="font-bold">This is the menu</span>
              <ul>
                <li>Home Page</li>
                <li>About Us </li>
                <li>More</li>
              </ul>
            </animated.div>
          )
      )}
    </nav>
  );
}
