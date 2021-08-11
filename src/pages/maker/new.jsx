import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

export default function MakerNew() {
  const history = useHistory();

  useEffect(() => {
    setTimeout(() => {
      history.replace(`/maker/${uuidv4()}`);
    }, 2000);
  }, []);

  return (
    <div className="absolute inset-0 grid place-items-center">
      <div className="flex flex-col items-center justify-center px-4 py-8 text-center">
        <img src="/img/undraw-floating.svg" className="mb-8 w-72 animate-pulse" />
        <h1 className="font-medium text-neutral-600">Initializing...</h1>
      </div>
    </div>
  );
}
