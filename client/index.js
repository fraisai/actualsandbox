import React from 'react';
import { createRoot } from 'react-dom/client';
import Rtconnect from '../node_modules/rtconnect/dist/src/components/Rtconnect'


console.log(Rtconnect)

const container = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<Rtconnect URL={'localhost:3000'} />);