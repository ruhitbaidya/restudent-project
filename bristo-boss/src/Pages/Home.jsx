import Category from "../Layout/Category"
import Slider from "../Layout/Slider"
import HeadingSection from "../Layout/shared/HeadingSection"
import SheafServices from "../Layout/sheafServices"
import OurForum from "../Layout/OurForum";
import ContactNumber from "../Layout/ContactNumber";
import Recomendation from "../Layout/Recomendation";
import OurMenu from "../Layout/OurMenu";
import ReviewSlider from "../Layout/ReviewSlider";
import { Helmet } from "react-helmet";
import images from "../assets/home/chef-service.jpg"
import useDataget from "../Layout/shared/useDataget";

const Home = () => {
  const [menu] = useDataget();
  const popular = menu.filter((item)=> item.category === "popular")
  return (
    <div>
      <Helmet>
        <title>Home</title>
      </Helmet>
        <Slider></Slider>
        <HeadingSection subtitle="From 11:00am to 10:00pm" styles="800" heading="ORDER ONLINE"></HeadingSection>
        <Category></Category>
        <SheafServices textcolor="800" image={images} title="Bistro Boss" desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, libero accusamus laborum deserunt ratione dolor officiis praesentium! Deserunt magni aperiam dolor eius dolore at, nihil iusto ducimus incidunt quibusdam nemo." colorsfind="#ffffff"></SheafServices>
        <HeadingSection subtitle="Check it out" styles="800" heading="FROM OUR MENU"></HeadingSection>
        <OurForum menu={popular} buttons="View Full  Menu"></OurForum>
        <ContactNumber></ContactNumber>
        <HeadingSection subtitle="Should Try" styles="800" heading="CHEF RECOMMENDS"></HeadingSection>
        <Recomendation></Recomendation>
        <OurMenu></OurMenu>
        <HeadingSection subtitle="What Our Clients Say" styles="800" heading="TESTIMONIALS"></HeadingSection>
        <ReviewSlider></ReviewSlider>
    </div>
  )
}

export default Home