
import winespotter from './winespotter.svg';
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';

function App() {
  return (
    <div className="App">
        <img src={winespotter} className="App-logo" alt="logo" />
        <br/>
        <br/>
        <h1>WineSpotter</h1>
        <br/>
        <h2>Recommendation and classifier app</h2>

<div className="container">
<br/>
<br/>
  <article className=" row">

    <section className="choiceParameter col">
    <h2 className ="">🍇Taste</h2> 
        <form name = "Taste" className="">
            <select placeholder="Taste">
            <option>🍇Taste</option>
              <option>Bitter</option>
              <option>Tangy</option>
              <option>Sweet</option>
          </select>
        </form>
    </section>

    <section className="choiceParameter col">
    <h2 className ="">📆Age</h2> 
        <form name = "Taste" className="">
            <select name="tevs">
              <option>📆Age</option>
              <option>{`>`} 10 years</option>
              <option>11-25 years</option>
              <option>26-50</option>
              <option>51-100</option>
          </select>
      </form>
    </section>


    <section className="choiceParameter col">
    <h2 className ="">💪 Strength</h2> 
        <form name = "Taste" className="">
                    <select name="age">
                    <option>💪 Strength</option>
                      <option>Light</option>
                      <option>Medium</option>
                      <option>Strong</option>
                  </select>
                  </form>
            </section>

</article>

</div>
  <br/>
  <br/>
   {/* <h2>Based on your choices, WineSpotter recommends: Caurdoney, Spätburgunder, Pinot noir </h2>*/}

    </div>
  );
}

export default App;
