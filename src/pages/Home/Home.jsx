
import Banner from '../../components/Banner/Banner';
import Contact from '../../components/Contact/Contact';
import Faq from '../../components/Faq/Faq';
import Gallery from '../../components/Gallery/Gallery';
import Services from '../../components/Services/Services';
import ShopCategory from '../../components/ShopCategory/ShopCategory';
import Stats from '../../components/Stats/Stats';
import Testimonial from '../../components/Testimonial/Testimonial';
import useTitle from '../../hooks/useTitle';
const Home = () => {
  useTitle('Home')
    return (
        
       <div>
         <Banner></Banner>
         <Gallery></Gallery>
         <ShopCategory></ShopCategory>
         <Testimonial></Testimonial>
         <Stats></Stats>
         <Services></Services>
         <Faq></Faq>
         <Contact></Contact>
       </div>

    );
};

export default Home;