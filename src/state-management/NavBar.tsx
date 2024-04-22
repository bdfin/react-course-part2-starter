import { useContext } from "react";
import { LoginStatus } from "./auth";
import tasksContext from "./tasks/tasksContext";
import useCounterStore from "./counter/store";

const NavBar = () => {
  const { tasks } = useContext(tasksContext);
  const counter = useCounterStore((state) => state.counter);

  console.log("Render NavBar");

  return (
    <nav className="navbar d-flex justify-content-between">
      <span className="badge text-bg-secondary">{counter}</span>
      <LoginStatus />
    </nav>
  );
};

export default NavBar;
