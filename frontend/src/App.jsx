import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Book from "./pages/Book";
import Navbar from "./components/Navbar";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { persistor, store } from "./store/store.js";
import Footer from "./components/Footer.jsx";

function App() {
  return (
    <div className="p-4 bg-blueGray-800 text-white">
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <BrowserRouter>
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/books/:bookId" element={<Book />} />
            </Routes>
            <Footer />
          </BrowserRouter>
        </PersistGate>
      </Provider>
    </div>
  );
}

export default App;
