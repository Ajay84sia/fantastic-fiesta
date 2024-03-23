import { useContext } from "react";
import CardCloth from "../Components/Card/CardCloth";
import Sitebar from "../Components/Sitebar/Bar";
import { AppContext } from "../context/productContext";




const Clothing = () => {
  const {products} =useContext(AppContext)
  
  const mensCat = products.filter((elem) => elem.endpoint === "mens")
  return (
    <div>
      <div className="flex justify-between">
        <div className="w-[30%]">
          <Sitebar />
        </div>
        <div className="w-[68%] flex flex-wrap justify-between"> 
        
          {
            mensCat?.map((elem) => (
              <div key={elem.id} className="w-[30%]">
                <CardCloth elem = {elem}/>
              </div>
            ))
           
          }
          
        </div>
      </div>
    </div>
  );
};

export default Clothing;
