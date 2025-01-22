import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Pages from "./pages"
import Login from "./pages/auth/login"
import { Provider } from "react-redux"
import store from './redux/store';
import ProtectedRoute from "./config/protectedRoute";
import Detail from "./pages/detail";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={
            <ProtectedRoute>
              <Pages />
            </ProtectedRoute>
          } />
          <Route path="/detail/:id" element={
            <ProtectedRoute>
              <Detail />
            </ProtectedRoute>
          } />
          <Route path="/sign-in" element={<Login />} />
        </Routes>
      </Router>
    </Provider>
  )
}

export default App
