import { RouterProvider, createBrowserRouter } from "react-router-dom";

// Pages
import ArtikelDetailCMS from "./pages/Mikrotik/ArtikelDetailCMS";
import Mikrotik from "./pages/Mikrotik/Mikrotik";

function App() {
  const router = createBrowserRouter([
    {
      path: "/artikel-cms/:id",
      element: <ArtikelDetailCMS />,
    },
    {
      path: "/mikrotik-academny",
      element: <Mikrotik />,
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
