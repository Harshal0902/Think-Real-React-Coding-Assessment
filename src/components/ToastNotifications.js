import React from 'react'

const ToastNotifications = ({ errorMsg, error, setError }) => {

    const handleClose = () => {
        setError(false);
    }


    return (
        <div>ToastNotificationsopen={error}
            autoHideDuration={3000}
            onClose={handleClose}
            message={errorMsg}</div>
    )
}

export default ToastNotifications