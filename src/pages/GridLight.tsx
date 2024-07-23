import { useState } from "react";
import { AppBar } from "../components/AppBar";
import { Cell } from "../components/Cell";

const config = [
  [1, 1, 1],
  [1, 0, 1],
  [1, 1, 1],
];

export const GridLight = () => {
  const [order, setOrder] = useState<number[]>([]);
  const [isDeactivating, setIsDeactivating] = useState(false);

  const deactivateCells = () => {
    setIsDeactivating(true);
    const timer = setInterval(() => {
      setOrder((origOrder) => {
        const newOrder = origOrder.slice();
        newOrder.pop();

        if (newOrder.length === 0) {
          clearInterval(timer);
          setIsDeactivating(false);
        }

        return newOrder;
      });
    }, 300);
  };

  const activateCells = (index: number) => {
    const newOrder = [...order, index];
    setOrder(newOrder);

    if (newOrder.length === config.flat(1).filter(Boolean).length) {
      deactivateCells();
    }
  };

  return (
    <div className="bg-gray-900 min-h-screen">
      <AppBar />
      <h1 className="text-gray-300 font-bold text-3xl text-center mt-10">
        Grid-Light
      </h1>
      <div className="flex justify-center items-center flex-col bg-gray-900  mt-10">
        <div className={`grid grid-cols-3 gap-2`}>
          {config
            .flat(1)
            .map((value, index) =>
              value ? (
                <Cell
                  filled={order.includes(index)}
                  onClick={() => activateCells(index)}
                  isDisabled={order.includes(index) || isDeactivating}
                  key={index}
                />
              ) : (
                <span />
              )
            )}
        </div>
      </div>
    </div>
  );
};
