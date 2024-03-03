import { Stack } from "@mui/material";
import Carousell from "../Components/Carousell";

const Home = () => {
  const homeMain = [
    {
      img: "https://assets.ajio.com/cms/AJIO/WEB/01032024-D-1.0-UHP-aass-5090-REVISED.gif",
    },
    {
      img: "https://assets.ajio.com/cms/AJIO/WEB/03032024-D-1.0-UHP-mainbanner-superdrysuperhours-5070--.jpg",
    },
    {
      img: "https://assets.ajio.com/cms/AJIO/WEB/D-1.0-UHP-03032024-MainBannerDailyChanging-Z1-P3-M&S-USPA-MIN50.png",
    },
  ];

  const bankOffer = [
    {
      img: "https://assets.ajio.com/cms/AJIO/WEB/ICICI-1440x128r.jpg",
    },
    {
      img: "https://assets.ajio.com/cms/AJIO/WEB/D-1.0-UHP-05012024-BankDiscount-Get5.jpg",
    },
    {
      img: "https://assets.ajio.com/cms/AJIO/WEB/1440x128 2P4.jpg",
    },
    {
      img: "https://assets.ajio.com/cms/AJIO/WEB/Mobikwik-1440x128 2.jpg",
    },
  ];

  const superSponsers = [
    {
      img: "https://assets.ajio.com/cms/AJIO/WEB/D-1.0-UHP-02032024-SPONSORBANNERCAROUSEL-Z2-superdry-min50.jpg",
    },
    {
      img: "https://assets.ajio.com/cms/AJIO/WEB/D-1.0-UHP-02032024-SPONSORBANNERCAROUSEL-Z2-.jpg",
    },
    {
      img: "https://assets.ajio.com/cms/AJIO/WEB/D-1.0-UHP-02032024-SPONSORBANNERCAROUSEL-Z2-Snitch-min60.jpg",
    },
    {
      img: "https://assets.ajio.com/cms/AJIO/WEB/D-1.0-UHP-02032024-SPONSORBANNERCAROUSEL-Z2-Sam-4060(1).jpg",
    },
  ];

  const topTrends = [
    {
      img: "https://assets.ajio.com/cms/AJIO/WEB/03032024-D-Ajio-AjioLuxe-TopTrendsetters-Hugo.jpg",
    },
    {
      img: "https://assets.ajio.com/cms/AJIO/WEB/D-1.0-UHP-03032024-TopBrandBanner-Z3-P2-ALLENSOLLY-LOUISPHILIPPE-MIN40.jpg",
    },
    {
      img: "https://assets.ajio.com/cms/AJIO/WEB/D-1.0-UHP-03032024-TopBrandBanner-Z3-P3-USPA-FortCOllins-MIN40.jpg",
    },
    {
      img: "https://assets.ajio.com/cms/AJIO/WEB/D-1.0-UHP-03032024-TopBrandBanner-Z3-P4-Kibo-BeingHuman-MIN60.jpg",
    },
  ];

  const brandLove = [
    {
      img: "https://assets.ajio.com/cms/AJIO/WEB/D-1.0-UHP-01022024-TOPBRANDS-nikepuma-min35.jpg",
      name : "brandLove"
    },
    {
      img: "https://assets.ajio.com/cms/AJIO/WEB/D-1.0-UHP-01022024-TOPBRANDS-gap-snitch-min40.jpg",
      name : "brandLove"
    },
    {
      img: "https://assets.ajio.com/cms/AJIO/WEB/D-1.0-UHP-01022024-TOPBRANDS-axsuperdry-min40.jpg",
      name : "brandLove"
    },
    {
      img: "https://assets.ajio.com/cms/AJIO/WEB/D-1.0-UHP-01022024-TOPBRANDS-dnmx-netplay-min50.jpg",
      name : "brandLove"
    },
    {
      img: "https://assets.ajio.com/cms/AJIO/WEB/D-1.0-UHP-01022024-TOPBRANDS-leecooper-johnplayers-min50.jpg",
      name : "brandLove"
    },
    {
      img: "https://assets.ajio.com/cms/AJIO/WEB/D-1.0-UHP-01022024-TOPBRANDS-avaasa-fig-min60.jpg",
      name : "brandLove"
    },
    {
      img: "https://assets.ajio.com/cms/AJIO/WEB/D-1.0-UHP-01022024-TOPBRANDS-teamspirit-performax-min50.jpg",
      name : "brandLove"
    },
  ];
  return (
    <div className="w-full">
      <Carousell carou={homeMain} />
      <Carousell carou={bankOffer} />
      <img
        src="https://assets.ajio.com/cms/AJIO/WEB/D-1.0-UHP-01032024-SponsorCarouselbanner-Header.jpg"
        alt=""
      />
      <Carousell carou={superSponsers} />
      <img
        src="https://assets.ajio.com/cms/AJIO/WEB/D-1.0-UHP-01022024-TopBannerCarousel-header.jpg"
        alt=""
      />
      <Carousell carou={topTrends} />
      <img
        src="https://assets.ajio.com/cms/AJIO/WEB/D-1.0-UHP-01022024-topbannercarouselMZ-header.jpg"
        alt=""
      />
      <img
        src="https://assets.ajio.com/cms/AJIO/WEB/D-1.0-UHP-01022024-TOPBRANDS-header.jpg"
        alt=""
      />
      <Carousell carou={brandLove} />
    </div>
  );
};

export default Home;
