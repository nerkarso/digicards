import Menubar from '@/components/Menubar';
import MenubarButton from '@/components/MenubarButton';
import ToolbarButton from '@/components/ToolbarButton';
import ToolbarSelect from '@/components/ToolbarSelect';
import { Button } from '@/elements';
import {
  FormatAlignCenterTwoTone,
  FormatAlignJustifyTwoTone,
  FormatAlignLeftTwoTone,
  FormatAlignRightTwoTone,
  ZoomInTwoTone,
  ZoomOutTwoTone,
} from '@material-ui/icons';
import React from 'react';
import { Link, useHistory } from 'react-router-dom';

export default function MakerEdit() {
  const history = useHistory();

  return (
    <div className="absolute inset-0 flex flex-col min-h-screen">
      <header className="z-10">
        <div className="flex items-center h-20 px-4 space-x-4 border-b">
          <Link to="/" className="flex-shrink-0 w-10 h-10 transition duration-150 focus:outline-none focus:opacity-50">
            <img src="/img/icon.svg" className="object-cover object-center" />
          </Link>
          <div className="flex flex-col justify-center flex-1">
            <div className="flex-grow-0 flex-shrink-0">
              <input
                type="text"
                value="Untitled"
                onChange={() => {}}
                placeholder="File name"
                className="h-8 px-2 text-xl font-medium transition duration-150 border-transparent rounded-md hover:bg-neutral-100 focus:border-primary-500 focus:ring-primary-500"
              />
            </div>
            <nav className="flex space-x-1">
              <Menubar
                text="File"
                items={[
                  {
                    text: 'New',
                    handler: () => {
                      history.replace('/maker');
                    },
                  },
                  { text: 'Open', handler: () => {} },
                  { text: 'Save', handler: () => {} },
                  { text: 'Save as', handler: () => {} },
                  { text: 'Export', handler: () => {} },
                  {
                    text: 'Exit',
                    handler: () => {
                      history.replace('/');
                    },
                  },
                ]}
              />
              <Menubar
                text="Insert"
                items={[
                  { text: 'Box', handler: () => {} },
                  { text: 'Text', handler: () => {} },
                  { text: 'Video', handler: () => {} },
                  { text: 'Audio', handler: () => {} },
                ]}
              />
              <Menubar
                text="Interactions"
                items={[
                  { text: 'Mobile number', handler: () => {} },
                  { text: 'Phone number', handler: () => {} },
                  { text: 'Map', handler: () => {} },
                  { text: 'Email', handler: () => {} },
                  { text: 'Website', handler: () => {} },
                  { text: 'Facebook', handler: () => {} },
                  { text: 'Twitter', handler: () => {} },
                ]}
              />
              <MenubarButton>Help</MenubarButton>
            </nav>
          </div>
          <div className="flex items-center space-x-4">
            <Button>Share</Button>
            <Link
              to="/profile"
              className="w-12 h-12 overflow-hidden transition duration-150 rounded-full focus:outline-none focus:ring-2 focus:ring-primary-400 focus:ring-offset-2">
              <img src="https://randomuser.me/api/portraits/women/76.jpg" className="object-cover" />
            </Link>
          </div>
        </div>
        <div className="flex h-12 px-4 space-x-2 overflow-y-auto border-b">
          <div className="flex items-center space-x-1">
            <ToolbarButton>
              <ZoomInTwoTone />
            </ToolbarButton>
            <ToolbarButton>
              <ZoomOutTwoTone />
            </ToolbarButton>
          </div>
          <div className="flex items-center space-x-1">
            <ToolbarSelect
              items={[
                { text: 'Arial', value: 'Arial' },
                { text: 'Calibri', value: 'Calibri' },
                { text: 'Segoe UI', value: 'Segoe UI' },
              ]}
            />
            <ToolbarSelect
              items={[
                { text: 'Light', value: 'light' },
                { text: 'Regular', value: 'normal' },
                { text: 'Bold', value: 'bold' },
              ]}
            />
            <ToolbarSelect
              items={Array.from(Array(5)).map((x, i) => ({
                text: i,
                value: i,
              }))}
            />
            <input type="color" className="w-8" />
          </div>
          <div className="flex items-center space-x-1">
            <ToolbarButton>
              <FormatAlignLeftTwoTone />
            </ToolbarButton>
            <ToolbarButton>
              <FormatAlignCenterTwoTone />
            </ToolbarButton>
            <ToolbarButton>
              <FormatAlignRightTwoTone />
            </ToolbarButton>
            <ToolbarButton>
              <FormatAlignJustifyTwoTone />
            </ToolbarButton>
          </div>
        </div>
      </header>
      <main className="grid flex-1 p-6 overflow-auto place-items-center bg-neutral-100">
        <div className="bg-white shadow w-72 h-96"></div>
      </main>
    </div>
  );
}
