import { useState } from "react";
import { data as placeData } from "./data";
import "./App.css";


function App() {
  const [place, setPlace] = useState(0);
  const [data, setData] = useState(placeData);
  
  const [showMore, setShowMore] = useState(false);

  const removePlace = (id) => {
    const newPlace = place === 0 ? place : place - 1;
    setPlace(newPlace);
    setData(data.filter((element) => element.id !== id));
  };

  const previousPlace = () => {
    setPlace((place) => {
      place--;
      if (place < 0) {
        return data.length - 1;
      }
      return place;
    });
  };
  const nextPlace = () => {
    setPlace((place) => {
      place++;
      if (place > data.length - 1) {
        place = 0;
      }
      return place;
    });
  };
  
  if (data.length === 0) {
    return (
      <div>
        <h2 className="container">Нет достопримечательностей</h2></div>
    )
  }
  const { id, sight, description, image } = data[place];
  return (
    <div key={id}>
      <div className="container">
        <h1>Топ {data.length} достопримечательностей Екатеринбурга</h1>
      </div>
      <div className="container">
        <h2>
         {sight}
        </h2>
      </div>
      <div className="container">
        <img src={image} width="800px" alt="foto" />
      </div>
      <div className="container">
        <p>
          {" "}
          {showMore ? description : description.substring(0, 300) + "..."}
          <button className="show" onClick={() => setShowMore(!showMore)}>
            {showMore ? "Скрыть" : "Читать ещё"}
          </button>
        </p>
      </div>

      <div className="container">
        <button className="remov" onClick={() => removePlace(id)}>Удалить</button>
      </div>

      <div className="container">
        <button className="removall" onClick={() => setData([])}>Удалить всё</button>
      </div>

      <div className=" container">
        <div className="btn-next">
          <button className="btn " onClick={previousPlace}>
            Предыдущий
          </button>
          <button className="btn " onClick={nextPlace}>
            Следующий
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
