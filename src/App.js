import DateToday from './components/Date';
import Quote from './components/Quote';
import Time from './components/Time';
import Weather from './components/Weather';
function App() {
  return (
    <div className="App">
      <Weather/>
      <Time/>
      <DateToday/>
      <Quote/>
    </div>
  );
}

export default App;
