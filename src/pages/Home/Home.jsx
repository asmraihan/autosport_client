
import Banner from '../../components/Banner/Banner';
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
         <ShopCategory></ShopCategory>
         <Gallery></Gallery>
         <Testimonial></Testimonial>
         <Services></Services>
         <Stats></Stats>
         <Faq></Faq>
       </div>

    );
};

export default Home;