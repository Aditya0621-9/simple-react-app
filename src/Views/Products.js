import React, { useState } from "react";
import axios from "axios";

export default function Products() {
  // axios.get(https://jsonplaceholder.typicode.com/photos)

  const url = "https://jsonplaceholder.typicode.com/photos";
  const [product, setproduct] = useState(null);

  axios.get(url).then((res) => {
    setproduct(res.data);
  });

  return (
    <div>
      <h1>This is the product page</h1>
    </div>
  );
}
