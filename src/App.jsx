import { RouterProvider, createBrowserRouter } from "react-router-dom";

// Pages
import Home from "./pages/Home/Home";
import ProfileSchool from "./pages/Profile Sekolah/ProfileSchool";
import DetailBlog from "./components/Blog/Detail Blog/DetailBlog";
import ArtikelDetailCMS from "./pages/Artikel/ArtikelDetailCMS";
import Artikel from "./pages/Artikel/Artikel";
import Mikrotik from "./pages/Mikrotik/Mikrotik";
import MitraIndustri from "./pages/Mitra Industri/MitraIndustri";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/profile-sekolah",
      element: <ProfileSchool />,
    },
    {
      path: "/artikel",
      element: <Artikel />,
    },
    {
      path: "/artikel/:id",
      element: <DetailBlog />,
    },
    {
      path: "/artikel-cms/:id",
      element: <ArtikelDetailCMS />,
    },
    {
      path: "/mikrotik-academny",
      element: <Mikrotik />,
    },
    {
      path: "/mitra-industri",
      element: <MitraIndustri />,
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
