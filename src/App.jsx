import { RouterProvider, createBrowserRouter } from "react-router-dom";

// Pages
import Home from "./pages/Home/Home";
import ProfileSchool from "./pages/Profile Sekolah/ProfileSchool";

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
  ]);
  return <RouterProvider router={router} />;
}

export default App;
