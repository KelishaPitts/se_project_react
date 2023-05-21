import '../blocks/main.css'
import Weather from './Weather.js';
import ItemCard from './ItemCard.js';
import { defaultClothingItems } from "../utils/constants.js";
const Main =({temp})=>{

return(
<main className='main'>

    <Weather day={false} type='rain' temp={temp}/>
    <section className="card__section" id="card-section">
        Today is {temp}F / You may want to wear:
      <div className='card__items'>
        {defaultClothingItems.map((item) => (
        <ItemCard item={item}/>
      ))}
      </div>

    
    </section>
      </main>)
}
export default Main;


