import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import SheafServices from '../Layout/sheafServices';
import banner2 from "../assets/shop/banner2.jpg"
import useDataget from '../Layout/shared/useDataget';
import OurShop from '../Layout/shared/OurShop';
const ShopNow = () => {
    const [menu] = useDataget();
    const offered = menu.filter((item)=> item.category === "offered");
    const dessert = menu.filter((item)=> item.category === "dessert");
    const pizza = menu.filter((item)=> item.category === "pizza");
    const salad = menu.filter((item)=> item.category === "salad");
    const soup = menu.filter((item)=> item.category === "soup");
  return (
    <>
<SheafServices textcolor="200" image={banner2} title="OUR SHOP" desc="Would you like to try a dish?" colorsfind="rgba(36, 34, 34, 0.623)"></SheafServices>

<Tabs direction="center">
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