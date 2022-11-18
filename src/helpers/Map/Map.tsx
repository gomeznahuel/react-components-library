import React from "react";

interface IMapProps {
  map: string[] | number[] | object[];
  render: (item: any, index: number) => React.ReactNode;
}

const Map = ({ map, render }: IMapProps) => {
  return (
    <>
      {map.map((item, index) => { 
        return render(item, index);
      })}
    </>
  );
};

export default Map;
