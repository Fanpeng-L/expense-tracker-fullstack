import { Route, Routes } from "react-router-dom";
import SignUpPage from "./pages/SignUpPage";
import NotFoundPage from "./pages/NotFoundPage";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
import TransactionPage from "./pages/TransactionPage";
import Header from "./components/ui/Header";

function App() {
  const authUser = true;
  return (
    <>
      {authUser && <Header />}

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/transaction/:id" element={<TransactionPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}

export default App;
