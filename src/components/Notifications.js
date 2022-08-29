import React from "react";
import { Alert } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { uiAction } from "../store/ui-Slice";
const Notifications = ({ type, message }) => {
  const dispatch = useDispatch();
  const notification = useSelector((state) => {
    return state.ui.notification;
  });
  const closeHandle = () => {
    dispatch(
      uiAction.showNotification({
        open: false,
      })
    );
  };
  return (
    <div>
      {notification.open && (
        <Alert onClose={closeHandle} severity={type}>
          {message}
        </Alert>
      )}
    </div>
  );
};

export default Notifications;
