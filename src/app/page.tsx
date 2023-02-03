import NavBar from "@/components/common/NavBar";
import Input from "@/components/main/Input";
import Image from "next/image";
import "./style.css";
import Icon from "../../public/images/purpleIcon.png";

export default function Home() {
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
    </main>
  );
}
