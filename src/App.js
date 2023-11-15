
import './App.css';
import BrandCard from './components/BrandCard';
import sedans from "../src/images/icon-sedans.svg";
import suvs from "../src/images/icon-suvs.svg";
import luxury from "../src/images/icon-luxury.svg";


function App() {
  
const BrandData =  [{
  brandlogo: <img src={sedans} alt='sedans'/>,
  brandtitle: <h1>SEDANS</h1>,
  brandinfo: 'Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city or on your next road trip'
}, {
  brandlogo: <img src={suvs} alt='suvs'/>,
  brandtitle: <h1>SUVS</h1>,
  brandinfo: 'Take an SUV for its spacious interior, power, and versatility. Perfect for your next family vacation and off-road adventures'
}, {
  brandlogo: <img src={luxury} alt='luxury'/>,
  brandtitle: <h1>LUXURY</h1>,
  brandinfo: 'Cruise in the best car brands without the bloated prices. Enjoy the enhanced comfort of a luxury rental and arrive in style'
}];
  return (
    <div className="App brand-card">
      {BrandData.map((BrandData, index) => (
        <BrandCard
        key={index}
        brandlogo={BrandData.brandlogo}
        brandtitle={BrandData.brandtitle}
        brandinfo={BrandData.brandinfo}
        />
     ))}
    </div>
  );
}

export default App;
