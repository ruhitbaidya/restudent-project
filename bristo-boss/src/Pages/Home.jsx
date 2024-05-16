import Category from "../Layout/Category"
import Slider from "../Layout/Slider"
import HeadingSection from "../Layout/shared/HeadingSection"
import SheafServices from "../Layout/sheafServices"
import OurForum from "../Layout/OurForum";
import ContactNumber from "../Layout/ContactNumber";
import Recomendation from "../Layout/Recomendation";
import OurMenu from "../Layout/OurMenu";
import ReviewSlider from "../Layout/ReviewSlider";


const Home = () => {
  return (
    <div className="container mx-auto">
        <Slider></Slider>
        <HeadingSection subtitle="From 11:00am to 10:00pm" heading="ORDER ONLINE"></HeadingSection>
        <Category></Category>
        <SheafServices></SheafServices>
        <HeadingSection subtitle="Check it out" heading="FROM OUR MENU"></HeadingSection>
        <OurForum></OurForum>
        <ContactNumber></ContactNumber>
        <HeadingSection subtitle="Should Try" heading="CHEF RECOMMENDS"></HeadingSection>
        <Recomendation></Recomendation>
        <OurMenu></OurMenu>
        <HeadingSection subtitle="What Our Clients Say" heading="TESTIMONIALS"></HeadingSection>
        <ReviewSlider></ReviewSlider>
    </div>
  )
}

export default Home