import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AboutUs from "./components/AboutUs/AboutUs";
import AdminRoute from "./components/AdminRoute/AdminRoute";
import AddProduct from "./components/Dashboard/AdminDash/AddProduct";
import MakeAdmin from "./components/Dashboard/AdminDash/MakeAdmin";
import MakeDoctor from "./components/Dashboard/AdminDash/MakeDoctor";
import ManageOrders from "./components/Dashboard/AdminDash/ManageOrders";
import ManageProducts from "./components/Dashboard/AdminDash/ManageProducts";
import Dashboard from "./components/Dashboard/Dashboard";
import MyProfile from "./components/Dashboard/MyProfile";
import AddReview from "./components/Dashboard/UserDash/AddReview";
import DoctorApp from "./components/Dashboard/UserDash/DoctorApp";
import MyOrders from "./components/Dashboard/UserDash/MyOrders";
import Payment from "./components/Dashboard/UserDash/Payment";
import DoctorDetails from "./components/Doctors/DoctorDetails";
import Doctors from "./components/Doctors/Doctors";
import Home from "./components/Home/Home";
import NotFound from "./components/NotFound/NotFound";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import ProductDetails from "./components/Products/ProductDetails";
import Products from "./components/Products/Products";
import Footer from "./components/Shared/Footer";
import Navbar from "./components/Shared/Navbar";
import Signin from "./components/Signin/Signin";
import Signup from "./components/Signup/Signup";

function App() {
  return (
    <div className="of-x-h">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/services" element={<Products></Products>}></Route>
        <Route
          path="/services/:productId"
          element={
            <PrivateRoute>
              <ProductDetails></ProductDetails>
            </PrivateRoute>
          }
        ></Route>
        <Route
          path="/doctors/:doctorId"
          element={<DoctorDetails></DoctorDetails>}
        ></Route>
        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <Dashboard></Dashboard>
            </PrivateRoute>
          }
        ></Route>
        <Route
          path="/dashboard/editprofile"
          element={
            <PrivateRoute>
              <MyProfile></MyProfile>
            </PrivateRoute>
          }
        ></Route>
        <Route
          path="/dashboard/myappointments"
          element={<MyOrders></MyOrders>}
        ></Route>
        <Route
          path="/dashboard/docappointments"
          element={<DoctorApp></DoctorApp>}
        ></Route>
        <Route
          path="/dashboard/payment/:id"
          element={
            <PrivateRoute>
              <Payment></Payment>
            </PrivateRoute>
          }
        ></Route>
        <Route
          path="/dashboard/manageorders"
          element={
            <AdminRoute>
              <ManageOrders></ManageOrders>
            </AdminRoute>
          }
        ></Route>
        <Route
          path="/dashboard/manageproducts"
          element={
            <AdminRoute>
              <ManageProducts></ManageProducts>
            </AdminRoute>
          }
        ></Route>
        <Route
          path="/dashboard/addproduct"
          element={
            <AdminRoute>
              <AddProduct></AddProduct>
            </AdminRoute>
          }
        ></Route>
        <Route
          path="/dashboard/mkadmin"
          element={<MakeAdmin></MakeAdmin>}
        ></Route>
        <Route path="/dashboard/mkdoctor" element={<MakeDoctor />}></Route>
        <Route path="/about" element={<AboutUs></AboutUs>}></Route>
        <Route path="/doctors" element={<Doctors></Doctors>}></Route>
        <Route path="/signin" element={<Signin></Signin>}></Route>
        <Route path="/signup" element={<Signup></Signup>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
      <ToastContainer />
    </div>
  );
}

export default App;
