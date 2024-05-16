import { Helmet } from "react-helmet";
import SheafServices from "../Layout/sheafServices";
import banner1 from "../assets/menu/banner3.jpg"
import banner2 from "../assets/menu/dessert-bg.jpeg"
import HeadingSection from "../Layout/shared/HeadingSection";
import useDataget from "../Layout/shared/useDataget";
import OurForum from "../Layout/OurForum";
const Ourment = () => {
    const [menu] = useDataget();
    const offered = menu.filter((item)=> item.category === "offered");
    const dessert = menu.filter((item)=> item.category === "dessert");
    const pizza = menu.filter((item)=> item.category === "pizza");
    const salad = menu.filter((item)=> item.category === "salad");
    const soup = menu.filter((item)=> item.category === "soup");
    console.log(offered)
    return(
    <>
      <Helmet>
        <title>My Menu</title>
      </Helmet>
      <SheafServices textcolor="200" image={banner1} title="Bistro Boss" desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, libero accusamus laborum deserunt ratione dolor officiis praesentium! Deserunt magni aperiam dolor eius dolore at, nihil iusto ducimus incidunt quibusdam nemo." colorsfind="rgba(36, 34, 34, 0.623)"></SheafServices>
      <HeadingSection subtitle="Don't miss" styles="800" heading="TODAY'S OFFER"></HeadingSection>
      <OurForum menu={offered} buttons="ORDER YOUR FAVOURITE FOOD"></OurForum>
      <SheafServices textcolor="200" image={banner2} title="DESSERTS" desc="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book." colorsfind="rgba(36, 34, 34, 0.623)"></SheafServices>
      <OurForum menu={dessert} buttons="ORDER YOUR FAVOURITE FOOD"></OurForum>
      <SheafServices textcolor="200" image={banner1} title="Bistro Boss" desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, libero accusamus laborum deserunt ratione dolor officiis praesentium! Deserunt magni aperiam dolor eius dolore at, nihil iusto ducimus incidunt quibusdam nemo." colorsfind="rgba(36, 34, 34, 0.623)"></SheafServices>
      <OurForum menu={pizza} buttons="ORDER YOUR FAVOURITE FOOD"></OurForum>
      <SheafServices textcolor="200" image={banner1} title="Bistro Boss" desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, libero accusamus laborum deserunt ratione dolor officiis praesentium! Deserunt magni aperiam dolor eius dolore at, nihil iusto ducimus incidunt quibusdam nemo." colorsfind="rgba(36, 34, 34, 0.623)"></SheafServices>
      <OurForum menu={salad} buttons="ORDER YOUR FAVOURITE FOOD"></OurForum>
      <SheafServices textcolor="200" image={banner1} title="Bistro Boss" desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, libero accusamus laborum deserunt ratione dolor officiis praesentium! Deserunt magni aperiam dolor eius dolore at, nihil iusto ducimus incidunt quibusdam nemo." colorsfind="rgba(36, 34, 34, 0.623)"></SheafServices>
      <OurForum menu={soup} buttons="ORDER YOUR FAVOURITE FOOD"></OurForum>
    </>
  );
};

export default Ourment;
