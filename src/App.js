import './App.css';
import './Tablet.css';
import './Mobile.css';
import './Script.js';
import Header from './components/Header';
import Container_1 from './components/Container_1'
import Container_2 from './components/Container_2'
import Container_3 from './components/Container_3'

function App() {
  return (
    <>
      <Header />

      <main className="content_flex">
        <Container_1 />
        <Container_2 />
        <Container_3 />
      </main>
    </>
  );
}

export default App;