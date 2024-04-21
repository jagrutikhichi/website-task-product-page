import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
// import { useParams } from "react-router-dom";

export default function ProductDetails() {
  const [photos, setPhotos] = useState([]);
  const { productId } = useParams();

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/photos/${productId}`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setPhotos(data);
      });
  }, []);
  console.log(photos);

  // console.log(photos[index].url);

  return (
    <>
      <h1 className="text-center text-xl py-2">Product Details</h1>
      <div className="flex px-10 bg-gray-100 h-96">
        <div className="w-2/4 pt-5">
          <img src={photos.url} className="h-40 w-40" />
        </div>
        <div className="pt-5">
          <p className="text-center ">product details</p>
          <p className="text-center ">
            <span className="font-bold">Product title: </span>
            {photos.title}
          </p>
        </div>
      </div>
    </>
  );
}
