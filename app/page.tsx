import Approach from "@/Components/Approach";
import Experience from "@/Components/Experience";
import Footer from "@/Components/Footer";
import Grid from "@/Components/Grid";
import Hero from "@/Components/Hero";
import RecentProjects from "@/Components/RecentProjects";
import  Skills  from "@/Components/Skills";
import { FloatingNavBar } from "@/Components/UI/FloatingNavBar";




export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNavBar />
        <Hero />
        <Grid />
        <RecentProjects />
        <Skills />
        <Experience />
        <Approach />
        <Footer />
      </div>
    </main>
  );
}
