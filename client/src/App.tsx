import "./App.css";
import React, { useEffect, useState, useCallback } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { onMessageListener } from "./firebase";
import { auth } from "./firebase";
import { useAuthState } from "react-firebase-hooks/auth";

import { Toast } from "react-bootstrap";

import { getAllSubs } from "./api-service/api-service";
import { Routes, Route } from "react-router-dom";

import Login from "./components/Login/login";
import Register from "./components/Register/register";
import Home from "./components/Home/home";
import AddSubForm from "./components/AddSubForm/add-sub-form";
import EditSubItem from "./components/EditSubForm/edit-sub-form";
import { Subscription } from "./Types";

function App() {
  const [user] = useAuthState(auth);
  console.log(user);
  const [subscriptions, setSubs] = useState<Subscription[] | undefined>([]);
  const [show, setShow] = useState(false);
  const [notification, setNotification] = useState({ title: "", body: "" });

  onMessageListener()
    .then((payload: any) => {
      setShow(true);
      setNotification({ title: payload.data.title, body: payload.data.body });
    })
    .catch((err) => {
      console.log("Error in onMessageListener", err);
    });

  useEffect(() => {
    getAllSubs().then((subs) => setSubs(subs));
  }, []);

  return (
    <>
      <Toast
        className="toast-notify"
        onClose={() => setShow(false)}
        show={show}
        delay={9000}
        animation
        autohide
      >
        {/* <Toast.Header>
      </Toast.Header> */}
        <img
          src="https://res.cloudinary.com/dovw0n8pd/image/upload/v1671065444/subLogoCroped_y8ldxh.png"
          alt="logo"
          width="70"
          height="70"
        />
        <Toast.Body>
          <div className="toast-info">
            <strong className="notify-title">
              {notification && notification.title}
            </strong>
            {notification && notification.body}
          </div>
        </Toast.Body>
      </Toast>

      <div className="app-body">
        <Router>
          <Routes>
            <Route
              path="/"
              element={
                user ? <Home subscriptions={subscriptions} /> : <Login />
              }
            />
            <Route
              path="/add"
              element={
                user ? (
                  <AddSubForm
                    subscriptions={subscriptions as Subscription[]}
                    setSubs={setSubs}
                  />
                ) : (
                  <Login />
                )
              }
            />
            <Route
              path="/edit-sub/:id"
              element={
                user ? (
                  <EditSubItem
                    subscriptions={subscriptions}
                    setSubs={setSubs}
                  />
                ) : (
                  <Login />
                )
              }
            />
            <Route path="/register" element={<Register />} />
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
