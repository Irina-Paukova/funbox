import './App.css';
import './Tablet.css';
import './Mobile.css';
import './Script.js';
import Header from './components/Header';
import Container1 from './components/Container1'
import Container2 from './components/Container2'
import Container3 from './components/Container3'

function App() {
  return (
    <>
      <Header />

      <main className="content_flex">
        <Container1 />
        <Container2 />
        <Container3 />
      </main>
    </>
  );
}

export default App;