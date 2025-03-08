import { Routes, Route } from "react-router-dom";
import Moives from "@/pages/project/Moives";
import DocWriter from "@/components/doc/DocWriter";
import DocPage from "@/components/doc/DocPage";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/project" element={<Moives />} />
      <Route path="/create" element={<DocWriter />} />
      <Route path="/doc/:id" element={<DocPage />} />
    </Routes>
  );
}

export default AppRoutes;
