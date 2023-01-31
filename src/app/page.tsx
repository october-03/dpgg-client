import NavBar from "@/components/common/NavBar";
import "./style.css";

export default function Home() {
  return (
    <main>
      <div className="background" />
      <NavBar choose="홈" />
      <div>Home</div>
    </main>
  );
}
