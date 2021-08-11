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
    <div className="absolute grid w-full h-full p-6 place-items-center">
      <div className="flex flex-col items-center justify-center p-4">
        <img src="/img/undraw-floating.svg" className="mb-8 w-72 animate-pulse" alt />
        <h1 className="font-medium text-neutral-500">Initializing...</h1>
      </div>
    </div>
  );
}
