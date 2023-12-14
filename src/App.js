import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import SideBarLayout from "./layout/SideBarLayout.jsx";
import ProductsDisplay from "./components/ProductsDisplay.jsx";
import NotFound from "./pages/NotFound.jsx";
import LogInForm from "./pages/LogInForm.jsx";
import Cart from "./pages/Cart.jsx";
import Orders from "./pages/Orders.jsx";
import NavigationLayout from "./layout/NavigationLayout.jsx";
import { useEffect, useState } from "react";
import axios from "axios";
import { Context } from "./components/ReactContext.jsx";

function App() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    // Hàm này sẽ chạy sau khi component được mount
    const fetchProducts = async () => {
      try {
        // Thực hiện yêu cầu GET đến API
        const response = await axios.get(
          "https://6576af1c0fd5d07e432ed3ca.mockapi.io/dataUITShop"
        );

        // Lấy dữ liệu từ phản hồi và cập nhật state
        setProducts(response.data);
        console.log(products);
      } catch (error) {
        console.error("Error fetching product data:", error);
      }
    };

    // Gọi hàm để tải danh sách sản phẩm
    fetchProducts();
  }, []); // [] đảm bảo useEffect chỉ chạy một lần sau khi component được mount
  return (
    <Context.Provider value={products}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<NavigationLayout />}>
            <Route path="/" element={<SideBarLayout />}>
              <Route index element={<HomePage />} />
              <Route path="laptop" element={<ProductsDisplay title='Laptop' />} />
              <Route path="mousepad" element={<ProductsDisplay title='Lót chuột' />} />
              <Route path="mouse" element={<ProductsDisplay title='Chuột' />} />
              <Route path="keyboard" element={<ProductsDisplay title='Bàn phím' />} />
              <Route path="UITproducts" element={<ProductsDisplay title='Đồ UIT' />} />
              <Route path="others" element={<ProductsDisplay title='Khác' />} />
            </Route>
            <Route path="orders" element={<Orders />} />
            <Route path="cart" element={<Cart />} />
          </Route>
          <Route path="login" element={<LogInForm />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </Context.Provider>

  );
}

export default App;
