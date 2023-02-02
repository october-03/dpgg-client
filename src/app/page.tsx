import NavBar from "@/components/common/NavBar";
import Input from "@/components/main/Input";
import "./style.css";

export default function Home() {
  return (
    <main>
      <div className="background" />
      <NavBar choose="홈" />
      <div className="inputWrapper">
        <Input />
      </div>
    </main>
  );
}
