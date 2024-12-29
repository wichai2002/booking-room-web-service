import React from "react";

const PageNotFound: React.FC = () => {

  const url = new URL(window.location.href);
  url.searchParams.set('page', "404");
  window.history.pushState({}, '', url);

  return (
    
    <div className="h-screen flex flex-col items-center justify-center bg-gray-100 text-gray-700">
      <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
      <p className="mb-6">Oops! The page you are looking for does not exist.</p>
    </div>
  );
};

export default PageNotFound;
