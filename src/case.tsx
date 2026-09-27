import React from 'react'
import ReactDOM from 'react-dom/client'
import { MotionConfig } from 'framer-motion'
import MyAnnotatorCase from './pages/MyAnnotatorCase.tsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <MotionConfig reducedMotion="user">
      <MyAnnotatorCase />
    </MotionConfig>
  </React.StrictMode>,
)
