import { RouterProvider, createBrowserRouter } from "react-router-dom";

// Pages
import Home from "./pages/Home/Home";
import ProfileSchool from "./pages/Profile Sekolah/ProfileSchool";
import DetailBlog from "./components/Blog/Detail Blog/DetailBlog";
import Artikel from "./pages/Artikel/Artikel";

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
  ]);
  return <RouterProvider router={router} />;
}

export default App;
