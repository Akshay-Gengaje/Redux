import { Routes, Route } from "react-router-dom";
import DocWriter from "@/components/doc/DocWriter";
import DocPage from "@/components/doc/DocPage";
import MoviesLayout from "@/layout/movies/MoviesLayout";
import Cart from "@/pages/project/Cart";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/project/" element={<MoviesLayout />} />
      <Route path="/project/cart" element={<Cart />} />
      <Route path="/create" element={<DocWriter />} />
      <Route path="/doc/:id" element={<DocPage />} />
    </Routes>
  );
}

export default AppRoutes;
