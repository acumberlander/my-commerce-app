import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar"
import './page.css';

const app = () => {
  return (
    <div className='app-container'>
      <Navbar />
      <Hero />
    </div>
  )
}

export default app