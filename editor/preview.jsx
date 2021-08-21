import { Workspace } from 'polotno/canvas/workspace';
import { createStore } from 'polotno/model/store';
import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';

// Create the store
const store = createStore({
  key: process.env.POLOTNO_API_KEY,
  showCredit: false,
});

const App = ({ store }) => {
  const [title, setTitle] = useState('Untitled');

  // Get the uuid from the URL
  const getCurrentId = () => {
    const paths = window.location.pathname.split('/');
    // Check if there are 3 paths
    if (paths.length === 3) {
      // Get the last path
      return paths.pop();
    } else {
      return null;
    }
  };

  // Load the design data
  useEffect(() => {
    // Get uuid of current design
    const currentUuid = getCurrentId();

    // Check if uuid exists
    if (currentUuid) {
      // Send AJAX request to server
      fetch(`/api/designs/${currentUuid}`)
        .then((res) => res.json())
        .then((result) => {
          // Check for errors
          if (result.error) {
            window.Swal.fire({
              icon: 'error',
              text: result.error,
            });
          } else {
            if (result.data) {
              // Set the title
              document.title = document.title.replace('Untitled', result.title);
              setTitle(result.title);
              // Load the data into the store
              store.loadJSON(JSON.parse(result.data));
            }
          }
        })
        .catch((error) => {
          // Error
          window.Swal.fire({
            icon: 'error',
            text: error.message,
          });
        });
    }
  }, []);

  // Handles exporting as image
  const handleExportImage = () => {
    window.showToast('success', 'Exporting...');
    store.saveAsImage({ fileName: title });
  };

  // Handles exporting as PDF
  const handleExportPDF = () => {
    window.showToast('success', 'Exporting...');
    store.saveAsPDF({ fileName: title });
  };

  return (
    <>
      <nav className="navbar">
        <img src="/img/icon.svg" className="logo" />
        <button type="button" onClick={handleExportImage} className="btn">
          Export as image
        </button>
        <button type="button" onClick={handleExportPDF} className="btn">
          Export as PDF
        </button>
      </nav>
      <main id="app">
        <Workspace store={store} pageControlsEnabled={false} />;
      </main>
    </>
  );
};

ReactDOM.render(<App store={store} />, document.getElementById('preview'));
