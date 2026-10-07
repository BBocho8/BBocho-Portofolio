import React from 'react'
import ReactDOM from 'react-dom/client'
import { MotionConfig } from 'framer-motion'
import HighlightsCase from './pages/HighlightsCase.tsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <MotionConfig reducedMotion="user">
      <HighlightsCase />
    </MotionConfig>
  </React.StrictMode>,
)
