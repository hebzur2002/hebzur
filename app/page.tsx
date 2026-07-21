import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Blog from "@/components/Blog";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="min-h-screen bg-bg text-text">
      <Nav />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Blog />
      <Testimonials />
      <Contact />
    </main>
  );
}
