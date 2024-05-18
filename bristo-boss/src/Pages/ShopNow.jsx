import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import SheafServices from '../Layout/sheafServices';
import banner2 from "../assets/shop/banner2.jpg"
import useDataget from '../Layout/shared/useDataget';
import OurShop from '../Layout/shared/OurShop';
<<<<<<< HEAD
import { useState } from 'react';
const ShopNow = () => {
  const [tabIndex, setTabIndex] = useState(0);
    const [menu] = useDataget();
    const offered = menu.filter((item)=> item.category === "offered");
    const dessert = menu.filter((item)=> item.category === "dessert");
    const pizza = menu.filter((item)=> item.category === "pizza");
    const salad = menu.filter((item)=> item.category === "salad");
    const soup = menu.filter((item)=> item.category === "soup");
    console.log(tabIndex)
=======
import { useLocation } from 'react-router';
import "./styles.css"
const ShopNow = () => {

  const [menu] = useDataget();
  const categorysurl = useLocation();
  const urlLink = ["/salad", "/pizza", "/soup", "/dessert", "/offered"];
  const linksfi = urlLink.indexOf(categorysurl.pathname);
  const findindex = linksfi >= 0 ? linksfi : 0;
  const offered = menu.filter((item) => item.category === "offered");
  const dessert = menu.filter((item) => item.category === "dessert");
  const pizza = menu.filter((item) => item.category === "pizza");
  const salad = menu.filter((item) => item.category === "salad");
  const soup = menu.filter((item) => item.category === "soup");
>>>>>>> db1df3fc2a0a1511a68a5e17c89812f23319afb1
  return (
    <>
      <SheafServices textcolor="200" image={banner2} title="OUR SHOP" desc="Would you like to try a dish?" colorsfind="rgba(36, 34, 34, 0.623)"></SheafServices>

<<<<<<< HEAD
<Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
    <TabList>
      <Tab>Salad</Tab>
      <Tab>pizza</Tab>
      <Tab>soups</Tab>
      <Tab>desserts</Tab>
      <Tab>drinks</Tab>
    </TabList>
=======
      <Tabs defaultIndex={findindex}>
        <TabList>
          <Tab>Salad</Tab>
          <Tab>pizza</Tab>
          <Tab>soups</Tab>
          <Tab>desserts</Tab>
          <Tab>drinks</Tab>
        </TabList>
>>>>>>> db1df3fc2a0a1511a68a5e17c89812f23319afb1

        <TabPanel>
          <OurShop datas={salad} />
        </TabPanel>
        <TabPanel>
          <OurShop datas={pizza} />
        </TabPanel>
        <TabPanel>
          <OurShop datas={soup} />
        </TabPanel>
        <TabPanel>
          <OurShop datas={dessert} />
        </TabPanel>
        <TabPanel>
          <OurShop datas={offered} />
        </TabPanel>
      </Tabs>



    </>
  )
}

export default ShopNow
