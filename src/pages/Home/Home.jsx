
import Banner from '../../components/Banner/Banner';
import Faq from '../../components/Faq/Faq';
import Gallery from '../../components/Gallery/Gallery';
import ShopCategory from '../../components/ShopCategory/ShopCategory';
import Testimonial from '../../components/Testimonial/Testimonial';
const Home = () => {
    return (
        
       <div>
         <Banner></Banner>
         <ShopCategory></ShopCategory>
         <Gallery></Gallery>
         <Testimonial></Testimonial>
         <Faq></Faq>
       </div>

    );
};

export default Home;