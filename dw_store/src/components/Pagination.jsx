import { useEffect, useState } from "react";
import { MyButton } from "./MyButton";

export const Pagination = ({nbrButton, handleClick}) => {

    

    const numbers = Array.from({length : nbrButton}, (_, idx) => idx + 1);
  return (
        <div className="w-fit m-auto">
            {numbers.map((n) =>(
                <MyButton handleClick={handleClick} key={n}>
                    {n}
                </MyButton>
            ))}
        </div>
  );
}