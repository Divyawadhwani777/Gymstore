import { Link } from "react-router-dom"
import gymImage from "../../public/gym.jpeg"
export function Home(){
    return (
        <>
          <h1>Welcome to gym supplement store </h1>
           <img src={gymImage}/>
           <Link to="/Products">
               <button>
                view all Products
               </button>
            </Link>
        </>
    )
}