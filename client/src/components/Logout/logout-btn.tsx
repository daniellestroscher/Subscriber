import React from "react";
import { logout } from "../../firebase";

import "./logout-btn.css";


function Logout() {

  return (
    <button
      className="logout-btn"
      onClick={logout}
    >
      Log Out
    </button>
  );

}
export default Logout;