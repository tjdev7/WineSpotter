
import winepictest from './winepictest.svg';

import './App.css';

function App() {
  return (
    <div className="App">
        <img src={winepictest} className="App-logo" alt="logo" />
        <h1>WineSpotter</h1>
        <h2>Wine recommendation app using Machine learning</h2>

<section class="choiceParameter">
<h2>Taste</h2> 
    <form name = "Taste">
        <select placeholder="Taste">
        <option>Taste</option>
          <option>Bitter</option>
          <option>Tangy</option>
          <option>Sweet</option>
      </select>
    </form>
</section>

<section class="choiceParameter">
      <h2>Age</h2> 
        <select name="tevs">
          <option>Age</option>
          <option>Less than 10 years</option>
          <option>11-25 years</option>
          <option>26-50</option>
          <option>51-100</option>
          

      </select>

</section>

<section class="choiceParameter">

      <h2>Strength</h2> 
        <select name="age">
        <option>Strength</option>
          <option>Light</option>
          <option>Medium</option>
          <option>Strong</option>
      </select>
</section>



    </div>
  );
}

export default App;
