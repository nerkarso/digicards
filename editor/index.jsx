import { PolotnoContainer, SidePanelWrap, WorkspaceWrap } from 'polotno';
import { Workspace } from 'polotno/canvas/workspace';
import { createStore } from 'polotno/model/store';
import { BackgroundSection, ElementsSection, PhotosSection, SidePanel, SizeSection, TemplatesSection, TextSection } from 'polotno/side-panel';
import { Toolbar } from 'polotno/toolbar/toolbar';
import { downloadFile } from 'polotno/utils/download';
import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';

// Create the store
const store = createStore({
  key: process.env.POLOTNO_API_KEY,
  showCredit: false,
});

// Create a page
store.setSize(1280, 720);
store.addPage();

// The initial store data
let oldStoreData;

// Listen for changes
store.on('change', () => {
  const dirty = document.getElementById('dirty');
  const newStoreData = JSON.stringify(store.toJSON());
  if (oldStoreData) {
    if (oldStoreData !== newStoreData) {
      if (dirty) {
        // Show the indicator
        dirty.classList.remove('hidden');
      }
      oldStoreData = newStoreData;
    }
  }
});

// Save the initial title of the design
let initialTitle = 'Untitled';

function App({ store }) {
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
              // Save the old store
              oldStoreData = result.data;
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
    } else {
      // Add button dirty indicator
      document.getElementById('dirty').classList.remove('hidden');
    }

    // Get the signed in account
    const currentAccount = window.getSignedInAccount();
    setAccount(currentAccount);
  }, []);

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

  // Handles loading the design from a JSON file
  const handleLoadProject = (e) => {
    const input = e.target;

    if (!input.files.length) return;

    const reader = new FileReader();
    reader.onloadend = () => {
      const text = reader.result;
      let json;
      try {
        json = JSON.parse(text);
      } catch (e) {
        window.Swal.fire({
          icon: 'error',
          text: 'Cannot load project',
        });
      }
      if (json) store.loadJSON(json);
    };
    reader.onerror = () => {
      window.Swal.fire({
        icon: 'error',
        text: 'Cannot load project',
      });
    };
    reader.readAsText(input.files[0]);
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
            // Save the old store
            oldStoreData = JSON.stringify(store.toJSON());
            // Remove button dirty indicator
            document.getElementById('dirty').classList.add('hidden');
            // Success
            window.showToast('success', 'Saved');
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

  // Handles saving the design as JSON file
  const handleSaveProject = () => {
    const json = store.toJSON();
    const url = `data:text/json;base64,${window.btoa(unescape(encodeURIComponent(JSON.stringify(json))))}`;
    downloadFile(url, `${title}.json`);
  };

  // Handles exporting as image
  const handleExportImage = () => {
    window.showToast('success', 'Exporting...');
    store.saveAsImage({ fileName: title, mimeType: 'image/jpg' });
  };

  // Handles exporting as PDF
  const handleExportPDF = () => {
    window.showToast('success', 'Exporting...');
    store.saveAsPDF({ fileName: title, mimeType: 'image/jpg' });
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
        const textarea = document.createElement('textarea');
        textarea.value = previewUrl;
        textarea.style.position = 'fixed';
        textarea.style.top = 0;
        textarea.style.left = 0;
        document.body.appendChild(textarea);
        textarea.focus();
        textarea.select();
        try {
          document.execCommand('copy');
          window.showToast('success', 'Link copied');
        } catch (error) {
          // Error
          Swal.fire({
            icon: 'error',
            text: error.message,
          });
        }
        document.body.removeChild(textarea);
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
        {account && (
          <button type="button" onClick={handleOpen} className="btn">
            Open
          </button>
        )}
        <button type="button" onClick={() => document.getElementById('load-project').click()} className="btn">
          Open project
        </button>
        <input type="file" id="load-project" accept=".json" onChange={handleLoadProject} style={{ display: 'none' }} />
        <button type="button" onClick={handleSave} className="btn">
          Save
          <span id="dirty" className="hidden">
            *
          </span>
        </button>
        <button type="button" onClick={handleSaveProject} className="btn">
          Save project
        </button>
        <button type="button" onClick={handleExportImage} className="btn">
          Export image
        </button>
        <button type="button" onClick={handleExportPDF} className="btn">
          Export PDF
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
          <a href="/account.html" className="btn">
            {account?.first_name} {account?.last_name}
          </a>
        ) : (
          <a href="/signin.html" className="btn">
            Sign in
          </a>
        )}
      </nav>
      <main id="app">
        <PolotnoContainer>
          <SidePanelWrap>
            <SidePanel store={store} defaultSection="templates" sections={[TemplatesSection, TextSection, ElementsSection, PhotosSection, BackgroundSection, SizeSection]} />
          </SidePanelWrap>
          <WorkspaceWrap>
            <Toolbar store={store} downloadButtonEnabled={false} />
            <Workspace store={store} />
          </WorkspaceWrap>
        </PolotnoContainer>
      </main>
    </>
  );
}

ReactDOM.render(<App store={store} />, document.getElementById('editor'));
