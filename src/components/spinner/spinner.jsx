import React from "react";
import style from "./spinner.module.scss"

export default function Spinner() {
  return (
    <div className={style.container}>
      <div className={style.spinner}>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}
