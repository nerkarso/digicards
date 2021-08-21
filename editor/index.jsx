import { PolotnoContainer, SidePanelWrap, WorkspaceWrap } from 'polotno';
import { Workspace } from 'polotno/canvas/workspace';
import { createStore } from 'polotno/model/store';
import { BackgroundSection, ElementsSection, PhotosSection, SidePanel, SizeSection, TextSection } from 'polotno/side-panel';
import { Toolbar } from 'polotno/toolbar/toolbar';
import React, { useEffect, useState } from 'react';
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
  const [uuid, setUuid] = useState();
  const [title, setTitle] = useState(initialTitle);
  const [account, setAccount] = useState();

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
    setUuid(currentUuid);

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
              initialTitle = result.title;
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

    // Get the signed in account
    const currentAccount = window.getSignedInAccount();
    setAccount(currentAccount);
  }, []);

  // Show a toast message
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
  const handleNew = () => {
    // Redirect to editor app
    window.location = '/editor';
  };

  // Handles opening the designs page
  const handleOpen = () => {
    // Redirect to designs page
    window.location = '/designs.html';
  };

  // Handles saving the design
  const handleSave = () => {
    // Check if uuid exists
    if (uuid) {
      // Send AJAX request to server
      fetch(`/api/designs/${uuid}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          data: JSON.stringify(store.toJSON()),
          thumbnail: store.toDataURL(),
        }),
      })
        .then((res) => res.json())
        .then((result) => {
          // Check for errors
          if (result.error) {
            window.Swal.fire({
              icon: 'error',
              text: result.error,
            });
          } else {
            // Success
            showToast('Saved');
          }
        })
        .catch((error) => {
          // Error
          window.Swal.fire({
            icon: 'error',
            text: error.message,
          });
        });
    } else {
      /**
       * Start a new design
       */

      // Check if an account is not signed in
      if (!account) {
        // Redirect to sign in page
        window.location = '/signin.html';

        // Stop here
        return;
      }

      // Send AJAX request to server
      fetch('/api/designs', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          account_id: account.id,
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          // Check for errors
          if (data.error) {
            Swal.fire({
              icon: 'error',
              text: data.error,
            });
          } else {
            // Redirect to editor app
            window.location = `/editor/${data.uuid}`;
          }
        })
        .catch((error) => {
          // Error
          Swal.fire({
            icon: 'error',
            text: error.message,
          });
        });
    }
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
        // Redirect to home page
        window.location = '/';
      }
    });
  };

  // Handles sharing the design
  const handleShare = () => {
    // Create the preview URL
    const previewUrl = `${window.location.origin}/preview/${uuid}`;

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
      /**
       * Save the title to the database
       */

      // Check if uuid exists
      if (uuid) {
        // Send AJAX request to server
        fetch(`/api/designs/${uuid}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            title: title,
          }),
        })
          .then((res) => res.json())
          .then((data) => {
            // Check for errors
            if (data.error) {
              window.Swal.fire({
                icon: 'error',
                text: data.error,
              });
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
    }
  };

  return (
    <>
      <nav className="navbar">
        <img src="/img/icon.svg" className="logo" />
        <button type="button" onClick={handleNew} className="btn">
          New
        </button>
        <button type="button" onClick={handleOpen} className="btn">
          Open
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
        {uuid && (
          <button type="button" onClick={handleShare} className="btn">
            Share
          </button>
        )}
        <button type="button" onClick={handleExit} className="btn">
          Exit
        </button>
        <input type="text" value={title} onChange={handleInputChange} onBlur={handleInputBlur} className="inputTitle" placeholder="Title of your design" />
        {uuid && (
          <a href={`/preview/${uuid}`} className="btn" target="_blank">
            Preview
          </a>
        )}
        {account ? (
          <a href="/account.html" className="btn" target="_blank">
            {account?.first_name} {account?.last_name}
          </a>
        ) : (
          <a href="/signin.html" className="btn" target="_blank">
            Sign in
          </a>
        )}
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
