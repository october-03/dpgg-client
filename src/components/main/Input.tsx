import Image from "next/image";
import React from "react";
import "./style.css";
import searchIcon from "../../../public/images/search.png";

export default function Input() {
  return (
    <div className="input">
      <Image
        src={searchIcon}
        alt=""
        style={{ width: 18, height: 18, marginRight: 16 }}
      />
      <input type="text" placeholder="소환사님의 전적을 검색해보세요." />
    </div>
  );
}
