import { PolotnoContainer, SidePanelWrap, WorkspaceWrap } from 'polotno';
import { Workspace } from 'polotno/canvas/workspace';
import { createStore } from 'polotno/model/store';
import { BackgroundSection, ElementsSection, PhotosSection, SidePanel, SizeSection, TextSection } from 'polotno/side-panel';
import { Toolbar } from 'polotno/toolbar/toolbar';
import React, { useState } from 'react';
import ReactDOM from 'react-dom';

// Create the store
const store = createStore({
  key: process.env.POLOTNO_API_KEY,
  showCredit: false,
});

// Create a page
store.setSize(960, 640);
store.addPage();

// Save the initial title of the design
let initialTitle = 'Untitled';

const App = ({ store }) => {
  const [title, setTitle] = useState(initialTitle);

  const showToast = (message) => {
    window.Swal.fire({
      icon: 'success',
      title: message,
      timer: 2000,
      timerProgressBar: true,
      toast: true,
      position: 'bottom-end',
      width: 300,
      padding: '0.75rem',
      showConfirmButton: false,
    });
  };

  // Handles creating a new design
  const handleNew = () => {};

  // Handles saving the design
  const handleSave = () => {
    showToast('Saved');
  };

  // Handles exporting as image
  const handleExportImage = () => {
    showToast('Exporting...');
    store.saveAsImage({ fileName: title });
  };

  // Handles exporting as PDF
  const handleExportPDF = () => {
    showToast('Exporting...');
    store.saveAsPDF({ fileName: title });
  };

  // Handles exiting the app
  const handleExit = () => {
    window.Swal.fire({
      title: 'Do you really want to exit?',
      text: 'Make sure you have saved your design before exiting.',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Exit',
    }).then((result) => {
      if (result.isConfirmed) {
        window.location = '/designs.html';
      }
    });
  };

  // Handles sharing the design
  const handleShare = () => {
    const previewUrl = 'https://example.com/preview/50dcd56d-0843-4aff-9cb5-dab96bc481db';

    // Show a modal to copy the link
    window.Swal.fire({
      iconHtml: `<i class="bx bx-share-alt"></i>`,
      iconColor: '#3B82F6',
      title: 'Share your design',
      html: `<a href="${previewUrl}" target="_blank">${previewUrl}</a>`,
      showCloseButton: true,
      confirmButtonText: 'Copy link',
    }).then((result) => {
      if (result.isConfirmed) {
        // Copy the link to the clipboard
        if (navigator.clipboard) {
          showToast('Link copied');
          navigator.clipboard.writeText(previewUrl).then(() => {});
        }
      }
    });
  };

  // Handles when the title input changes
  const handleInputChange = (e) => setTitle(e.target.value);

  // Handles when the title input loses focus
  const handleInputBlur = (e) => {
    // Set the initial title if it's empty
    if (e.target.value === '') {
      setTitle(initialTitle);
    } else {
      // Save the title to the database
    }
  };

  return (
    <>
      <nav className="navbar">
        <button type="button" onClick={handleNew} className="btn">
          New
        </button>
        <button type="button" onClick={handleSave} className="btn">
          Save
        </button>
        <button type="button" onClick={handleExportImage} className="btn">
          Export as image
        </button>
        <button type="button" onClick={handleExportPDF} className="btn">
          Export as PDF
        </button>
        <button type="button" onClick={handleExit} className="btn">
          Exit
        </button>
        <input type="text" value={title} onChange={handleInputChange} onBlur={handleInputBlur} className="inputTitle" placeholder="Title of your design" />
        <button type="button" onClick={handleShare} className="btn">
          Share
        </button>
        <a href="/account.html" className="btn" target="_blank">
          My account
        </a>
      </nav>
      <main id="app">
        <PolotnoContainer>
          <SidePanelWrap>
            <SidePanel store={store} defaultSection="text" sections={[TextSection, ElementsSection, PhotosSection, BackgroundSection, SizeSection]} />
          </SidePanelWrap>
          <WorkspaceWrap>
            <Toolbar store={store} downloadButtonEnabled={false} />
            <Workspace store={store} />
          </WorkspaceWrap>
        </PolotnoContainer>
      </main>
    </>
  );
};

ReactDOM.render(<App store={store} />, document.getElementById('root'));
