import Category from "../Layout/Category"
import Slider from "../Layout/Slider"
import HeadingSection from "../Layout/shared/HeadingSection"
import SheafServices from "../Layout/sheafServices"


const Home = () => {
  return (
    <div className="container mx-auto">
        <Slider></Slider>
        <HeadingSection subtitle="From 11:00am to 10:00pm" heading="ORDER ONLINE"></HeadingSection>
        <Category></Category>
        <SheafServices></SheafServices>
        <HeadingSection subtitle="Check it out" heading="FROM OUR MENU"></HeadingSection>
    </div>
  )
}

export default Home