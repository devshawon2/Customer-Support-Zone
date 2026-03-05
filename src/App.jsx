import './App.css'
import Navbar from './components/Navbar/Navbar';
import Body from './components/Body/Body';
import Footer from './components/Footer/Footer';
import { Suspense } from 'react';

function App() {
  const ticketsPromise = fetch('../tickets.json')
    .then(res => res.json());
  return (
    <>
      {/* Navbar Component called */}
      <Navbar>

      </Navbar>
      {/* Main Section */}
      <Suspense fallback={<p>The Data is Loading...</p>}>
        <Body ticketsPromise={ticketsPromise}>

        </Body>
      </Suspense>
      {/* Footer */}
      <Footer></Footer>
    </>
  )
}

export default App;
