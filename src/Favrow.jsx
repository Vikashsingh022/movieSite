import React , {useContext} from "react";
import { SearchContext } from "./Search";

const Favrow = ({obj}) => {

    let {f} = useContext(SearchContext);
    let {fav ,setFav} = f;
    let imagePath = "https://image.tmdb.org/t/p/w1280/";

    let handleClick=(id)=>{
        let updatedArray = fav.filter((ele)=>{
            return ele!=id;
       })
       setFav(updatedArray);
    }
  return (
    
      <tr>
        <td>
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img
                  src={imagePath + obj.backdrop_path}
                  alt="movie poster "
                />
              </div>
            </div>
            <div>
              <div className="font-bold text-base md:text-xl">{obj.title}</div>
            </div>
          </div>
        </td>
        <td><span className="text-base md:text-xl">{obj.popularity}</span></td>
        <td><span className="text-base md:text-xl">{obj.vote_average}</span></td>
        <th>
          <button className="btn btn-outline btn-error text-sm md:text-2xl px-2 py-1 md:px-4 md:py-2" onClick={()=>{handleClick(obj.id)}}>
            
            Remove from Favourite
          </button>
        </th>
      </tr>
   
  );
};

export default Favrow;