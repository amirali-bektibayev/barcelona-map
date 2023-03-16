import BeerImg from "../../assets/img/beer.jpg";
import CafeImg from "../../assets/img/cafe.jpg";
import TapasImg from "../../assets/img/tapas.jpg";
import PizzaImg from "../../assets/img/pizza.jpg";
import BurgerImg from "../../assets/img/burger.jpg";
import ShopImg from "../../assets/img/shop.jpg";
import PharmacyImg from "../../assets/img/pharmacy.jpg";
import SeaFoodImg from "../../assets/img/sea-food.jpg";
import DessertImg from "../../assets/img/dessert.jpg";
import ParkingImg from "../../assets/img/parking.jpg";
import FastFoodImg from "../../assets/img/fast-food.jpg";

export const PointTypeImage = ({ point }) => {
  if (point.type == "bar") {
    return (
      <div>
        <img className="point-type-image" src={BeerImg} />
      </div>
    );
  }
  if (point.type == "cafe") {
    return (
      <div>
        <img className="point-type-image" src={CafeImg} />
      </div>
    );
  }
  if (point.type == "pizza") {
    return (
      <div>
        <img className="point-type-image" src={PizzaImg} />
      </div>
    );
  }
  if (point.type == "burger") {
    return (
      <div>
        <img className="point-type-image" src={BurgerImg} />
      </div>
    );
  }
  if (point.type == "shop") {
    return (
      <div>
        <img className="point-type-image" src={ShopImg} />
      </div>
    );
  }
  if (point.type == "tapas") {
    return (
      <div>
        <img className="point-type-image" src={TapasImg} />
      </div>
    );
  }
  if (point.type == "sea") {
    return (
      <div>
        <img className="point-type-image" src={SeaFoodImg} />
      </div>
    );
  }
  if (point.type == "pharmacy") {
    return (
      <div>
        <img className="point-type-image" src={PharmacyImg} />
      </div>
    );
  }
  if (point.type == "dessert") {
    return (
      <div>
        <img className="point-type-image" src={DessertImg} />
      </div>
    );
  }
  if (point.type == "parking") {
    return (
      <div>
        <img className="point-type-image" src={ParkingImg} />
      </div>
    );
  }
  if (point.type == "fast-food") {
    return (
      <div>
        <img className="point-type-image" src={FastFoodImg} />
      </div>
    );
  }
};
