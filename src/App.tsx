import { Navigate, Route, Routes } from "react-router"
import { AppLayout } from "./components/layout/app-layout"
import { ProductPage } from "./components/pages/product-page"

function App() {

  return (
    <Routes>
      <Route element={<AppLayout />}>
        <Route index element={<Navigate to="/products" />} />
        <Route path="/products" element={<ProductPage />} />
      </Route>
    </Routes>
  )
}

export default App