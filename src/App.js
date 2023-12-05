import logo from './logo.svg';
import Navigation from './components/Navigation/Navigation';
import SingleCard from './components/SingleCard/SingleCard';
import './App.css';
import { Grid } from '@mui/material';


const mockData = [
    {id: 1, name: 'Home Alone', image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7mWjfJVPRvAu-A4yofmVuQVXBJ6Hr8n0Y0GllWThb8UiDLL4lQkT-yYIYT4nrMe7wGnc&usqp=CAU", time: '1hr: 50mins'}, 
    {id: 2, name: 'Black Adam', image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4qQI33n2gKAA_nm23o7EMpMw0DfF-cHa7y7QK_sU9KfIG_kHAIjbI-Tb_ptfmi6FRSAA&usqp=CAU", time: '2hr: 10mins'}, 
    {id: 3, name: 'Back to the Future', image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRj4F8iNsvi7OamSPUJ6LQ8o8Y0jZIzEU3dDQ5w2a4n_LbNjWZQj4zReHa9rT1VhL0bgfk&usqp=CAU", time: '2hr: 50mins'}, 
    {id: 4, name: 'Avengers', image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMD4Q-hsjS0d9vo1FzhuoETgnROdgXMJIJlAd-8Luy4fp0TcxpGKJ_Tj52MZSCRhkVHi0&usqp=CAU", time: '2hr:30mins'}]

function App() {
  const handleMovieClick = (movieId) => {
    console.log('Clicked on movie with ID:', movieId);
  };
  return (
    <div className="App" style={{height: '100vh', backgroundImage: `url(https://img3.akspic.ru/crops/3/1/1/0/60113/60113-kinovselennaya_marvel-grut-morda-vymyslennyj_personaz-grafika-3840x2160.jpg)`, backgroundSize: 'cover'}}>
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
    </div>
  );
}

export default App;
