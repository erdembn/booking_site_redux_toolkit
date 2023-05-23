import "./App.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import AccountPage from "./pages/AccountPage";
import ApartmentPage from "./pages/ApartmentPage";
import EditPage from "./pages/EditPage";
import ContactPage from "./pages/ContactPage";
import PageNotFound from "./pages/PageNotFound";
import AboutPage from "./pages/AboutPage";

function App() {
  return (
    <>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/account/:subpage?" element={<AccountPage />} />
        <Route path="/apart/:id?" element={<ApartmentPage />} />
        <Route path="/edit/:id?" element={<EditPage />} />
        <Route path="*" element={<PageNotFound />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </>
  );
}

export default App;
