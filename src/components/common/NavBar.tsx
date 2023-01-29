import Image from "next/image";
import React from "react";
import TopLogo from "../../../public/images/DP.png";
import "./style.css";

export default function NavBar({ choose }: propsType) {
  const topMenu = ["홈", "챔피언 분석"];
  return (
    <div className="flex items-center justify-center" style={{ height: 88 }}>
      <div
        className="flex items-center"
        style={{ width: "80%", justifyContent: "space-between" }}
      >
        <div style={{ display: "flex" }} className="topbar-left">
          <Image
            alt="logo"
            src={TopLogo}
            style={{ width: 41, height: 22 }}
            className="topbar-item"
          />
          {topMenu.map((menu, _i) => {
            return (
              <p
                key={_i}
                className="cursor-pointer topbar-item"
                style={{ color: `${choose === menu ? "#202020" : "#8A8A8A"}` }}
              >
                {menu}
              </p>
            );
          })}
        </div>
        <div
          style={{
            padding: "14px 13px",
            backgroundColor: "#202020",
            borderRadius: 8,
            color: "#fff",
          }}
        >
          Be Pro
        </div>
      </div>
    </div>
  );
}

type propsType = {
  choose: string;
};
