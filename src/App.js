import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Articles from "./components/Articles";
import Article from "./components/Article";
import Navbar from "./components/Navbar";
import NotFound from "./components/NotFound";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Navbar />
      <Routes>
        <Route path="/" element={<Articles />} />
        <Route path="/topics/:topic_name" element={<Articles />} />
        <Route path="/articles/:article_id" element={<Article />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
