import { createRoot } from 'react-dom/client'
import './style.css'
import { Experience } from './Experience'
import { Leva } from 'leva'


createRoot(document.getElementById('root')).render(
  <>
    <Experience />
    <Leva collapsed hidden />
  </>
)
