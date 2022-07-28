import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "../components/layouts";

import About from "./about";
import Contact from "./contact";
import Skills from "./skills";
import Home from "./home";
import Work from "./work";

import { Projects } from "./work/components/List";
import Trivia from "./work/components/Trivia";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="work" element={<Work />}>
            <Route index element={<Projects />} />
            <Route path="trivia" element={<Trivia />} />
            <Route path="*" />
          </Route>
          <Route path="about" element={<About />} />
          <Route path="skills" element={<Skills />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
