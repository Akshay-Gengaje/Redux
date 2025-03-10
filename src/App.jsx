import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "./context/theme/theme-provider";
import AppLayout from "./layout/AppLayout";
import { Provider } from "react-redux";
import { store } from "./store/index.js";

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <BrowserRouter>
          <AppLayout />
        </BrowserRouter>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
