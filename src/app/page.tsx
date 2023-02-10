"use client"; // this is a client component

import NavBar from "@/components/common/NavBar";
import Input from "@/components/main/Input";
import Image from "next/image";
import "./style.css";
import Icon from "../../public/images/purpleIcon.png";
import axios from "axios";
import { useEffect } from "react";

export default function Home() {
  const login = async () => {
    const res = await axios.post(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/auth/login`,
      {
        email: process.env.NEXT_PUBLIC_ROOT_EMAIL,
        password: process.env.NEXT_PUBLIC_ROOT_PASSWORD,
      },
      { withCredentials: true }
    );
    console.log(res);
  };
  const checkToken = async () => {
    await axios.get(`${process.env.NEXT_PUBLIC_API_BASE_URL}/auth`);
  };
  return (
    <main>
      <div className="background" />
      <NavBar choose="홈" />
      <div className="flex-center">
        <Image src={Icon} alt="" style={{ width: 240, height: 197, marginBottom: 33 }} />
      </div>
      <div className="flex-center">
        <Input />
      </div>
      <div onClick={login}>로그인</div>
      <div onClick={checkToken}>확인토큰</div>
    </main>
  );
}
