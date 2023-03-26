import { useState } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas } from './components'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="bg-hero-pattern bg-cover bg-no-repeat w-100 h-100">
      <Router>
        <div className='relative z-0 bg-primary'>
          <Navbar />
          <div className="bg-hero-pattern bg-cover bg-no-repeat mb-12" style={{ border: '2px solid red', boxSizing: 'border-box', height: '100vh' }}>

            {/* 
            <About />
            <Experience />
            <Works />
            <Tech />
            <Feedbacks /> */}



            {/* <div className="relative z-0"> */}
            {/* < Contact />
            <StarsCanvas /> */}
            {/* </div> */}
            <Hero />
          </div >
        </div >
      </Router >
    </div >
  )
}

export default App
