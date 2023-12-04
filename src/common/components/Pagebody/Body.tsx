import { Header } from "../heder/Header.component";
import { MainSection } from "../Mainsection/MainSection";
import "./main.css";
export const Body = () => {
  return (
    <div className='bg-[#CADCD2] w-full h-full '>
      <Header />
      <MainSection />
    </div>
  );
};
