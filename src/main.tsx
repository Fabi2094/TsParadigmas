import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles.css'
import { ToDo } from './components/ToDo';

import React from 'react'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ToDo></ToDo>
  </StrictMode>,
)
