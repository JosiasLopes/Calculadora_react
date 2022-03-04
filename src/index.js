import ReactDOM from 'react-dom'
import React from 'react'
import './css/index.css'

import App from './main/components/App.jsx'

const el = document.getElementById("root");

const msg = <div>Hello world</div>

ReactDOM.render(
<App></App>,el
);