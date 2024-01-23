import React from 'react'
import Navigator from './Components/Navigator/Navigator'
import AnimatedCursor from "react-animated-cursor"
import styles from '../src/App.module.css'
import { ReactLenis, useLenis } from '@studio-freight/react-lenis'


function Layout() {
  const lenis = useLenis(({ scroll }) => {
  })
}

const App = () => {
  return (
    <div className={styles.main}>
         <ReactLenis root {...Layout}>
          <AnimatedCursor
      innerSize={8}
      outerSize={8}
      color='193, 11, 111'
      outerAlpha={0.5}
      innerScale={0.7}
      outerScale={5}/>
        <Navigator />
        </ReactLenis>
    </div>
  )
}

export default App