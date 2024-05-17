import React, { useEffect, useState } from "react";
import Totalscore from "./Totalscore";
import NumberSelector from "./NumberSelector";
import Rolldice from "./Rolldice";
import Rule from "./Rule";

const GameStart = () => {
    const [score, setscore] = useState(0);
    const [selectedValue, setSelectedValue] = useState(null);
    const [currentdice, setCurrentDice] = useState(null);
    const [isrulepageactive, setRulePageActive] = useState(false);

    const makeActiveRulePage = () => setRulePageActive(prev => !prev);

    useEffect(() => {
        if (currentdice === selectedValue) {
            setscore(prev => prev + selectedValue);
        } else {
            setscore(prev => prev - 2);
        }
    }, [currentdice]);

    const generateRandomNumber = () => {
        let randomnum = Math.floor(Math.random() * 6) + 1;
        setCurrentDice(randomnum);
    }

    const reset = () => {
        setCurrentDice(null);
        setscore(0); // Reset the score
    }
   console.log(currentdice)
    return (
        <>
            <main className="flex justify-between mt-6 ">
                <Totalscore score={score} />
                <NumberSelector selectedValue={selectedValue} setSelectedValue={setSelectedValue} />
            </main>

            <Rolldice
                change={makeActiveRulePage}
                currentdice={currentdice}
                generateRandomNumber={generateRandomNumber}
                reset={reset}
            />

            {isrulepageactive && <Rule />}
        </>
    );
};

export default GameStart;
