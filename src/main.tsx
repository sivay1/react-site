import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.tsx'
import {Hero} from './components/hero/Hero.tsx'
import { GroupList } from './components/hero/GroupList.tsx'
import {Nav} from './components/navbar/nav.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* <App /> */}
    <Nav onConnectWallet={() => console.log("connect")} />
    <Hero />
    <GroupList />
  </StrictMode>,
)
