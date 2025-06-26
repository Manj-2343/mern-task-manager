import React from "react";

const GoogleLoginButton = () => {
  const handleGoogleLogin = () => {
    window.location.href = "http://localhost:5002/api/auth/google";
  };

  return (
    <button
      onClick={handleGoogleLogin}
      className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 w-full mt-4"
    >
      Login with Google
    </button>
  );
};

export default GoogleLoginButton;
