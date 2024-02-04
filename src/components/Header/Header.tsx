import { useAppSelector} from "../../store/store";
import heartIcon from "../../assets/icons/heart.png";
import cartIcon from "../../assets/icons/shopping-cart.png";
import { NavLink } from "react-router-dom";

const Header = () => {
  //accessing cart and favorites states
  const cart = useAppSelector((state) => state.cart.value);
  const favorites = useAppSelector((state) => state.favorites.value);

  //calcualting the discount end date
  const currentDate = new Date();
  currentDate.setDate(currentDate.getDate() + 20);
  const discountDate = currentDate.toString();

  return (
    <header className="flex flex-wrap items-center justify-center md:justify-around">
      <NavLink to="/">
        <h2 className=" text-black md:text-2xl  text-center tracking-widest p-2">
          S<span className="font-semibold">EU</span>PHORIA
        </h2>
      </NavLink>
      <nav className="flex items-center gap-4 md:order-2 ml-24 mr-2 md:ml-0">
        <NavLink to="/favorites" className="flex">
          <img
            className=" w-5 h-5 cursor-pointer "
            src={heartIcon}
            alt="favorites list"
          />
          {!!favorites.length && <p className="w-4 h-4 bg-red-700 rounded-full text-xs text-center text-white -translate-x-1 -translate-y-1">
            {favorites.length}
          </p>}
        </NavLink>
        <NavLink to="/cart" className="flex">
          <img
            className=" w-5 h-5 cursor-pointer"
            src={cartIcon}
            alt="shopping cart"></img>
          {!!Object.values(cart).length && <p className="w-4 h-4 bg-red-700 rounded-full text-xs text-center text-white -translate-x-1 -translate-y-1">
            {Object.values(cart).reduce(
              (accumulator, current) => accumulator + current
            )}
          </p>}
        </NavLink>
      </nav>
      <p className="sm:p-2 md:p-4 font-semibold md:order-1 shrink-0 w-full md:w-auto mb-2 text-center">
        Free shiping on all orders until {discountDate.slice(0, 10)}
      </p>
    </header>
  );
};

export default Header;
