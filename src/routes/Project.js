import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import HeroImg2 from '../components/HeroImg2';
import Work from '../components/Work';


function Project() {


  return (
    <div>
      <Navbar/>
      <HeroImg2 heading="PROJECTS"  text="Some of my most recent works"  />
      <Work/>
      <Footer/>
    </div>
  )
}

export default Project