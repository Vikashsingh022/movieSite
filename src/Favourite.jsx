import React, { useContext, useEffect, useState } from 'react'
import Favrow from './Favrow'
import { SearchContext } from './Search'

const Favourite = () => {
  let { f, o } = useContext(SearchContext);
  let { fav, setFav } = f;
  let { ogData, setOgData } = o;
  let [arr, setArr] = useState([]);

  let getObjData = () => {
    let objArray = []
    for (let i = 0; i < fav.length; i++) {
      let id = fav[i];
      for (let j = 0; j < ogData.length; j++) {
        if (id == ogData[j].id) {
          objArray.push(ogData[j])
          break;
        }
      }
    }
    setArr(objArray);
  }

  let sortTheRating = (order) => {
    let copy = [...arr];
    if (order == 'a') {
      copy.sort((obj1, obj2) => obj1.vote_average - obj2.vote_average)
    } else {
      copy.sort((obj1, obj2) => obj2.vote_average - obj1.vote_average)
    }
    setArr(copy);
  }

  useEffect(() => {
    getObjData();
  }, [fav])



  return (
    <div className='my-5 mx-5 h-screen w-11/12 '>
      <div className="overflow-x-auto ">
        <table className="table">

          <thead>
            <tr className='text-4xl'>

              <th>Movie Name</th>
              <th>Popularity </th>
              <th className='flex justify-start'>  <svg onClick={() => { sortTheRating("d") }} height="42px" width="42px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 8L18 14H6L12 8Z"></path></svg>  Rating   <svg onClick={() => { sortTheRating("a") }} height="42px" width="42px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 16L6 10H18L12 16Z"></path></svg> </th>
            </tr>
          </thead>
          <tbody className='text-4xl'>


            {arr.map((obj) => <Favrow key={obj.id} obj={obj}></Favrow>)}

          </tbody>


        </table>
      </div>
    </div>
  )
}

export default Favourite