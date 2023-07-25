import Banner from './components/Banner/index';
import Companies from './components/Companies/index';
import Work from './components/Work/index';
// import Features from './components/Features/index';
import Contact from "./components/Contact/index"
import Faq from './components/Faq/index';


export default function Home() {
  return (
    <main>
      <Banner />
      <Companies />
      <Work />
      {/* <Features /> */}
      <Contact/>
      <Faq />
    </main>
  )
}
