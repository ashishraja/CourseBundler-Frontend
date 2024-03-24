import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Forgot from './components/Auth/Login/Forgot.jsx';
import Login from './components/Auth/Login/Login.jsx';
import ResetPassword from './components/Auth/Login/ResetPassword.jsx';
import Register from './components/Auth/Register/Register.jsx';
import Contact from './components/Contact/Contact.jsx';
import Course from './components/Courses/Courses.jsx';
import Home from "./components/Home/Home.jsx"
import Footer from './components/Layout/Footer/Footer.jsx';
import Header from './components/Layout/Header/Header.jsx';
import Notfound from './components/Layout/NotFound/Notfound.jsx';
import PaymentFail from './components/Payments/PaymentFail.jsx';
import PaymentSuccess from './components/Payments/PaymentSuccess.jsx';
import Subscribe from './components/Payments/Subscribe.jsx';
import Request from './components/Request/Request.jsx';
import CoursePage from './components/CoursePage/CoursePage.jsx';
import Profile from './components/Profile/Profile.jsx';
import UpdateProfile from './components/Profile/UpdateProfile.jsx';
import ChangePassword from './components/Profile/ChangePassword.jsx';
import Dashboard from './components/Admin/DashBoard/Dashboard.jsx';
import CreateCourse from './components/Admin/CreateCourse/CreateCourse.jsx';
import CreateRoom from './components/Admin/CreateRoom/CreateRoom.jsx';
import Users from './components/Admin/Users/Users.jsx';
import AdminCourses from './components/Admin/AdminCourses/AdminCourses.jsx';
import { useDispatch, useSelector } from 'react-redux';
import { getMyProfile } from './redux/actions/userAction.js';
import Loader from './components/Layout/Loader/Loader.jsx';
import { ProtectedRoute } from "protected-route-react"
import About from './components/About/About.jsx';
import Cookies from 'js-cookie';
import ForumRoom from './components/Community/ForumRoom.jsx';
// import LiveVideo from './livevideo/index.jsx';
import Tweet from './components/feedback/feedback.jsx';
import Room from './liveroom/room.jsx'
function App() {

  const { loading, isAuthenticated, user } = useSelector(state => state.user);
  const [loadingUser, setLoadingUser] = useState(true);
  const dispatch = useDispatch();


  useEffect(() => {
    const token = Cookies.get('userToken');
    if (token) {
      dispatch(getMyProfile()).then(() => setLoadingUser(false));
    } else {
      setLoadingUser(false);
    }
  }, [dispatch]);

  if (loadingUser) {
    return <Loader />
  }

  return (
    <Router>
      {loading ? (
        <Loader />
      ) : (
        <>
          <Header isAuthenticated={isAuthenticated} user={user} />
          <Routes>
            {/* protected Routes */}

            <Route
              path="/changepassword"
              element={
                <ProtectedRoute isAuthenticated={isAuthenticated}>
                  <ChangePassword />
                </ProtectedRoute>
              }
            />

            <Route
              path="/forgotpassword"
              element={
                <ProtectedRoute isAuthenticated={!isAuthenticated} redirect="/profile">
                  <Forgot />
                </ProtectedRoute>
              }
            />


            <Route
              path="/resetpassword/:token"
              element={
                <ProtectedRoute isAuthenticated={!isAuthenticated} redirect="/profile">
                  <ResetPassword />
                </ProtectedRoute>
              }
            />

            <Route
              path="/updateprofile"
              element={
                <ProtectedRoute isAuthenticated={isAuthenticated}>
                  <UpdateProfile user={user} />
                </ProtectedRoute>
              }
            />

            <Route
              path="/subscribe"
              element={
                <ProtectedRoute isAuthenticated={isAuthenticated}>
                  <Subscribe user={user} />
                </ProtectedRoute>
              }
            />

            <Route
              path="/profile"
              element={
                <ProtectedRoute isAuthenticated={isAuthenticated}>
                  <Profile user={user} />
                </ProtectedRoute>
              }
            />

            <Route
              path="/login"
              element={
                <ProtectedRoute isAuthenticated={!isAuthenticated} redirect="/profile">
                  <Login />
                </ProtectedRoute>
              }
            />

            {/* other routes */}
            <Route path="/" element={<Home />} />
            <Route path="/courses" element={<Course />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/request" element={<Request />} />
            <Route path="*" element={<Notfound />} />

            <Route path="/course/:id" element={
              <ProtectedRoute isAuthenticated={isAuthenticated}>
                <CoursePage user={user} />
              </ProtectedRoute>
            } />

            <Route
              path="/paymentsuccess"
              element={
                <ProtectedRoute isAuthenticated={isAuthenticated}>
                  <PaymentSuccess />
                </ProtectedRoute>
              } />

            <Route
              path="/paymentfail"
              element={
                <ProtectedRoute isAuthenticated={isAuthenticated}>
                  <PaymentFail />
                </ProtectedRoute>
              } />

            <Route
              path="/register"
              element={
                <ProtectedRoute isAuthenticated={!isAuthenticated} redirect="/profile">
                  <Register />
                </ProtectedRoute>
              }
            />

            {/* admin routes */}
            <Route
              path="/admin/dashboard"
              element={
                <ProtectedRoute isAuthenticated={isAuthenticated} isAdmin={user && user.role === "admin"} adminRoute={true}>
                  <Dashboard />
                </ProtectedRoute>
              }
            />

            <Route
              path="/admin/createcourse"
              element={
                <ProtectedRoute isAuthenticated={isAuthenticated} isAdmin={user && user.role === "admin"} adminRoute={true}>
                  <CreateCourse />
                </ProtectedRoute>
              }
            />
            <Route
              path="/admin/createroom"
              element={
                <ProtectedRoute isAuthenticated={isAuthenticated} isAdmin={user && user.role === "admin"} adminRoute={true}>
                  <CreateRoom />
                </ProtectedRoute>
              }
            />

            <Route
              path="/admin/courses"
              element={
                <ProtectedRoute isAuthenticated={isAuthenticated} isAdmin={user && user.role === "admin"} adminRoute={true}>
                  <AdminCourses />
                </ProtectedRoute>
              }
            />

            <Route
              path="/admin/users"
              element={
                <ProtectedRoute isAuthenticated={isAuthenticated} isAdmin={user && user.role === "admin"} adminRoute={true}>
                  <Users />
                </ProtectedRoute>
              }
            />

            <Route
              path="/room/:roomId"
              element={
                <ProtectedRoute isAuthenticated={isAuthenticated}>
                  <Room />
                </ProtectedRoute>
              } />

            <Route
              path="/forum"
              element={
                <ProtectedRoute isAuthenticated={isAuthenticated}>
                  <ForumRoom />
                </ProtectedRoute>
              } />

            <Route
            path="feedbacks"
            element={<Tweet/>}/>  

          </Routes>
          <Footer />
        </>
      )}
    </Router>
  );
}

export default App;
