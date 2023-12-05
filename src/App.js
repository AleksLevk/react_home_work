import logo from './logo.svg';
import Navigation from './components/Navigation/Navigation';
import SingleCard from './components/SingleCard/SingleCard';
import './App.css';
import { Grid } from '@mui/material';
import Footer from './components/Footer/Footer';


const mockData = [
    {id: 1, name: 'Home Alone', image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7mWjfJVPRvAu-A4yofmVuQVXBJ6Hr8n0Y0GllWThb8UiDLL4lQkT-yYIYT4nrMe7wGnc&usqp=CAU", time: '1hr: 50mins'}, 
    {id: 2, name: 'Black Adam', image: "https://i.ytimg.com/vi/f9ydfcm5UTM/maxresdefault.jpg", time: '2hr: 10mins'}, 
    {id: 3, name: 'Back to the Future', image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRj4F8iNsvi7OamSPUJ6LQ8o8Y0jZIzEU3dDQ5w2a4n_LbNjWZQj4zReHa9rT1VhL0bgfk&usqp=CAU", time: '2hr: 50mins'}, 
    {id: 4, name: 'Avengers', image: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/cd5c6675-1dcf-43f0-aeb7-00079ad924dd/d4isr83-00cbef56-9bbf-4f67-9103-1f800f20ee29.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2NkNWM2Njc1LTFkY2YtNDNmMC1hZWI3LTAwMDc5YWQ5MjRkZFwvZDRpc3I4My0wMGNiZWY1Ni05YmJmLTRmNjctOTEwMy0xZjgwMGYyMGVlMjkucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.a9OYEerCV49X8fDAF9yL-LBQduvnH8tRkxHzXtyxAhQ", time: '2hr:30mins'}]

function App() {
  const handleMovieClick = (movieId) => {
    console.log('Clicked on movie with ID:', movieId);
  };
  return (
    <div className="App" style={{height: '100%', backgroundImage: `url(https://img3.akspic.ru/crops/3/1/1/0/60113/60113-kinovselennaya_marvel-grut-morda-vymyslennyj_personaz-grafika-3840x2160.jpg)`, backgroundSize: 'cover'}}>
      <Navigation/>
      <Grid container spacing={2}>
      {mockData.map(({id, name, time, image, onClickHandler}) => (
        <Grid item xs={4} key={id}>
        <SingleCard 
        id = {id}
        name = {name} 
        time = {time}  
        image= {image}
        onClickHandler={handleMovieClick}
        />
        </Grid>
      ))}
      </Grid>
      <Footer/>
    </div>
  );
}

export default App;
