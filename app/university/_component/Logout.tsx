"use client";

import { logoutUser } from "@/utils/loginUser";
import { mainBtnStyle } from "../constants/style";

export default function Logout() {
  return (
    <button
      className={`${mainBtnStyle} mx-1`}
      onClick={async () => await logoutUser()}
    >
      Logout
    </button>
  );
}
