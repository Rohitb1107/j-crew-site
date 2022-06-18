import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Mens = () => {
  const [bed, setbed] = useState([]);

  useEffect(() => {
    async function getData() {
      const data = await fetch(
        "https://ancient-dawn-26797.herokuapp.com/men_top_rated?_limit=12"
      ).then((d) => d.json());
      setbed(data);
    }
    getData();
  }, []);

  return (
    <div>
      <div id="top2">
        <h1 id="top-text2">MEN'S TOP RATED</h1>
      </div>
      <div id="top3">
        <select name="" id="">
          <option value="">Show Filters</option>
        </select>
        <select name="" id="">
          <option value="">Features</option>
          <option value="high">Price:High to Low</option>
          <option value="low">Price:Low to High</option>
          <option value="">Top Rated </option>
          <option value="">New Arrivals</option>
        </select>
        <div className="second">
          <select name="" id="">
            <option value="">1</option>
            <option value="">2</option>
            <option value="">3</option>
            <option value="">4</option>
            <option value="">5</option>
            <option value="">6</option>
            <option value="">7</option>
            <option value="">8</option>
            <option value="">9</option>
            <option value="">10</option>
          </select>
          <span>Of 10</span>
        </div>
      </div>
      <div id="div-6">
        {bed.map((e) => {
          return (
            <Link to={`/MenTopRated/${e.id}/men_top_rated`} id="card-1">
              <div id="img-1">
                <img id="img-i-1" src={e.image} alt="" />
                <button id="button-1">QUICK SHOP</button>
              </div>
              <div id="demo-1">
                <span id="name-1">{e.name}</span>
                <br />
                <span id="name-2">
                  INR <span>{e.price}</span>{" "}
                </span>
              </div>
            </Link>
          );
        })}
      </div>
      {/* <Footer/>  */}
    </div>
  );
};

export default Mens;
