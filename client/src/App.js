import React from "react";
import "./App.css";
import UploadForm from "./components/UploadForm";
import ImageList from "./components/ImageList";

function App() {
  return (
    <div className="app">
      <UploadForm />
      <ImageList />
    </div>
  );
}

export default App;
