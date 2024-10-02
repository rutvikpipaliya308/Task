import './App.css';
import { About } from './Component/About';
import { CompanyInfo } from './Component/CompanyInfo';
import { CustomerReview } from './Component/CustomerReview';
import { FAQ } from './Component/FAQ';
import { Footer } from './Component/Footer';
import { Hero } from './Component/Hero';
import { Products } from './Component/Products';

function App() {
  return (
    <div className="App w-[1920px]">
      <Hero />
      <Products />
      <CompanyInfo />
      <CustomerReview />
      <FAQ />
      <About />
      <Footer />
    </div>
  );
}

export default App;
