import '../blocks/weather.css'
const weatherOptions=[
    {url: require('../images/cloudy-day.svg').default, day: true, type:"cloudy"},
    {url: require('../images/cloudy-night.svg').default, day: false, type:"cloudy"},
    {url: require('../images/fog-day.svg').default, day: true, type:"fog"},
    {url: require('../images/fog-night.svg').default, day: false, type:"fog"},
    {url: require('../images/rain-day.svg').default, day: true, type:"rain"},
    {url: require('../images/rain-night.svg').default, day: false, type:"rain"},
    {url: require('../images/snow-day.svg').default, day: true, type:"snow"},
    {url: require('../images/snow-night.svg').default, day: false, type:"snow"},
    {url: require('../images/storm-day.svg').default, day: true, type:"storm"},
    {url: require('../images/storm-night.svg').default, day: false, type:"storm"},
    {url: require('../images/sunny-day.svg').default, day: true, type:"sunny"},
    {url: require('../images/sunny-night.svg').default, day: false, type:"sunny"}


]


const Weather =({day, type, temp =''})=>{
    console.log('Weather');
    const imageSrc = weatherOptions.filter((i)=>{
        console.log(i);
        return i.day === day && i.type === type;
    })
    console.log(imageSrc[0].url)
    const imageSrcUrl = imageSrc[0].url || '';
return (
<div>
<section className='weather' id='weather' >
          <div className='weather__temp'>{temp}</div>
         <img className='weather__bar' src={imageSrcUrl} alt='weather__bar' />
        </section>
        </div>
)
}
export default Weather;