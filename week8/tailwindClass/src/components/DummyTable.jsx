import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const DummyTable = () => {
  const [product, setProducts] = useState([]);
  const [buffer, setBuffer] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("https://dummyjson.com/products");
      if (!response.ok) {
        return;
      }
      const resData = await response.json();
      console.log(resData);
      setBuffer(false);
      setProducts(resData.products);
    };

    setTimeout(() => {
      fetchData();
    }, 3000);
  }, []);

  return (
    <div>
      <DataLoader />
      {buffer && <BufferItem />}
      {product.map((item) => {
        return (
          <div key={item.id} className="grid grid-cols-3 gap-1 bg-red-300">
            <div className="mx-3"> {item.id} </div>
            <div className="mx-3"> {item.title} </div>
            <div className="mx-3"> {item.price} </div>
          </div>
        );
      })}
    </div>
  );
};

export default DummyTable;

function DataLoader() {
  const data = [
    {
      orderId: 1,
      status: "Delivered",
      TransactionId: 1,
      refundDate: "01-01-2024",
      amount: 12100,
    },
    {
      orderId: 2,
      status: "Delivered",
      TransactionId: 121,
      refundDate: "01-01-2024",
      amount: 3120,
    },
    {
      orderId: 3,
      status: "Delivered",
      TransactionId: 12121,
      refundDate: "02-01-2024",
      amount: 120000,
    },
  ];
  return (
    <div className="mt-4 w-200 bg-blue-500 rounded shadow flex flex-col">
      {data.map((item) => {
        return (
          <div key={item.orderId} className="grid grid-cols-5 gap-1">
            <div className="mx-3"> {item.orderId} </div>
            <div className="mx-3"> {item.status} </div>
            <div className="mx-3"> {item.TransactionId} </div>
            <div className="mx-3"> {item.refundDate} </div>
            <div className="mx-3"> {item.amount} </div>
          </div>
        );
      })}
    </div>
  );
}

function BufferItem() {
  return (
    <div className="h-10 w-10 bg-gray-300 animate-pulse rounded-full">
      <h1 className="text-4xl">loading...</h1>
    </div>
  );
}
