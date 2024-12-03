import React from "react";
import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd";
import Stock from "./Stock";

const StockList = ({ stocks, updateQuantity, deleteStock, setStock }) => {
  const headers = [
    "Stock",
    "Price",
    "Quantity",
    "Equity",
    "Dividend",
    "Income",
  ];

  const mapHeaders = headers.map((item, index) => {
    return <div key={index}>{item}</div>;
  });

  const handleOnDragEnd = (result) => {
    const { source, destination } = result;

    if (!destination) return;

    if (source.index === destination.index) return;

    const reorderedStocks = Array.from(stocks);
    const [movedStock] = reorderedStocks.splice(source.index, 1);
    reorderedStocks.splice(destination.index, 0, movedStock);

    setStock(reorderedStocks);
  };

  return (
    <DragDropContext onDragEnd={handleOnDragEnd}>
      <div className="pt-3 bg-white shadow-card p-3 rounded">
        <div className="grid grid-cols-7 gap-4 border-b border-white text-center">
          {mapHeaders}
        </div>

        <Droppable droppableId="droppable">
          {(provided) => (
            <div
              className="stock-list"
              ref={provided.innerRef}
              {...provided.droppableProps}
            >
              {stocks.map((stock, index) => (
                <Draggable
                  key={stock.symbol}
                  draggableId={stock.symbol}
                  index={index}
                >
                  {(provided) => (
                    <div
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      style={{
                        ...provided.draggableProps.style,
                        marginBottom: "10px",
                      }}
                    >
                      <Stock
                        stock={stock}
                        updateQuantity={updateQuantity}
                        deleteStock={deleteStock}
                      />
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </div>
    </DragDropContext>
  );
};

export default StockList;
