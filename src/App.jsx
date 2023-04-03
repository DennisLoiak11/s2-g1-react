import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import BookList from './components/BookList';
import MyNav from './components/MyNav'
import MyFooter from './components/myFooter';
import Welcome from './components/welcome';
import fantasy from './data/fantasy.json'
import AllTheBooks from './components/AllTheBooks';
import SingleBook from './components/SingleBook';


function App() {
  return (
    <>
    <MyNav />
    <Welcome />
    <BookList />
    <MyFooter />
    </>
  );
}

export default App;