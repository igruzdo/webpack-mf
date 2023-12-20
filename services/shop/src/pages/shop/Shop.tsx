import { Link } from "react-router-dom";
import { shopRoutesShared } from '@packages/shared/src/routes/shop';

const Shop = () => {
  return (
    <h1>
      SHOP
      <div>
        <Link to={shopRoutesShared.second}>to second page</Link>
      </div>
    </h1>
  )
}

export default Shop;