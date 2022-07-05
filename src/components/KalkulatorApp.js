import React from 'react';
import '../app';

export const KalkulatorApp = () => {
   return(
      <React.Fragment>
         <section>
            <div className="kalkybody">
               <div className="header">
                  <p>Kalkulator Sommeroppgave</p>
               </div>
               <div>
                  <input type="text" placeholder="0" className="skjerm"/>
               </div>
               <div className="tastatur">
                  <button className="knapp">7</button>
                  <button className="knapp">8</button>
                  <button className="knapp">9</button>
                  <button className="del">DEL</button>

                  <button className="knapp">4</button>
                  <button className="knapp">5</button>
                  <button className="knapp">6</button>
                  <button className="knapp">+</button>

                  <button className="knapp">1</button>
                  <button className="knapp">2</button>
                  <button className="knapp">3</button>
                  <button className="knapp">-</button>

                  <button className="knapp">.</button>
                  <button className="knapp">0</button>
                  <button className="knapp">/</button>
                  <button className="knapp">x</button>

                  <button className="reset">RESET</button>
                  <button className="equal">=</button>

               </div>
            </div>
         </section>
      </React.Fragment>
   )
}