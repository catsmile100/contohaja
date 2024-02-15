import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Ensure that the DOM is fully loaded before accessing elements
document.addEventListener('DOMContentLoaded', function() {
  // Retrieve the container element with id "root"
  const rootContainer = document.getElementById('root');

  // Check if the container element exists
  if (rootContainer) {
    // Create a root element for rendering React components
    const root = ReactDOM.createRoot(rootContainer);
  
    // Render the main application component within StrictMode
    root.render(
      <React.StrictMode>
        <App />
      </React.StrictMode>
    );
  } else {
    // If the container element does not exist, log an error
    console.error("Root container 'root' not found in the DOM.");
  }
});

// Optional: Measure performance with reportWebVitals
reportWebVitals();


function openTab(tabName) {
    var i;
    var tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    document.getElementById(tabName).style.display = "block";
}
