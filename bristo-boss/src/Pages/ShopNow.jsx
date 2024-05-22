import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import SheafServices from '../Layout/sheafServices';
import banner2 from "../assets/shop/banner2.jpg"
import useDataget from '../Layout/shared/useDataget';
import OurShop from '../Layout/shared/OurShop';
import {useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const ShopNow = () => {
  const [tabIndex, setTabIndex] = useState(0);
    const [menu] = useDataget();
    const findsdata = ["/salad", "/pizza", "/soup", "/dessert", "/offered"];
    const findsindex = useLocation();
    const findtext = findsdata.indexOf(findsindex.pathname);
    const indexfounds = findtext >= 0 ? findtext : 0;
    useEffect(()=>{
      setTabIndex(indexfounds)
    }, [indexfounds])
    const offered = menu.filter((item)=> item.category === "offered");
    const dessert = menu.filter((item)=> item.category === "dessert");
    const pizza = menu.filter((item)=> item.category === "pizza");
    const salad = menu.filter((item)=> item.category === "salad");
    const soup = menu.filter((item)=> item.category === "soup");
  return (
    <>
<SheafServices textcolor="200" image={banner2} title="OUR SHOP" desc="Would you like to try a dish?" colorsfind="rgba(36, 34, 34, 0.623)"></SheafServices>
<Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
    <TabList>
      <Tab>Salad</Tab>
      <Tab>pizza</Tab>
      <Tab>soups</Tab>
      <Tab>desserts</Tab>
      <Tab>drinks</Tab>
    </TabList>

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
