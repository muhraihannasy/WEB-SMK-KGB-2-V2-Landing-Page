import { RouterProvider, createBrowserRouter } from "react-router-dom";

// Pages
import ArtikelDetailCMS from "./pages/Osis/ArtikelDetailCMS";
import Mikrotik from "./pages/Osis/Osis";

function App() {
  const router = createBrowserRouter([
    {
      path: "/artikel-cms/:id",
      element: <ArtikelDetailCMS />,
    },
    {
      path: "/",
      element: <Mikrotik />,
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
