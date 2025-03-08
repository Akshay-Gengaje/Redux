import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "./context/theme/theme-provider";
import AppLayout from "./layout/AppLayout";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <BrowserRouter>
        <AppLayout />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
