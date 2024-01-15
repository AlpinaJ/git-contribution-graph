import './Graph.css';
import {Cell} from "../Cell/Cell";
import {add, format} from "date-fns";
import {monthsToRepresent} from "../../utils/monthsToRepresnt";
import {Months} from "../../consts/Months";
import {useEffect, useState} from "react";
import {makeCellsTemplate} from "../../utils/makeCellsTemplate";
import {data} from "../../consts/data";

export const Graph = () => {
    const daysNames = ["Пн", "", "Ср", "", "Пт", "", ""];

    const endDate = add(new Date(), {
        days: 7 - new Date().getDay()
    })
    const startDate = add(endDate, {
        weeks: -51,
        days: 1
    })
    const emptyCells = makeCellsTemplate(startDate, endDate);

    const monthsNames = monthsToRepresent(startDate);

    const [contributions, setContributions] = useState(null);
    const [cells, setCells] = useState(emptyCells);

    //С какого-то момента сервер стал возвращать ошибку 403, поэтому решила захардкодить это
    useEffect(() => {
        fetch('https://dpg.gg/test/calendar.json').then((response) => response.json()).then((data) => setContributions(data)).catch((err) => setContributions(data));
    })

    useEffect(() => {
        if (contributions != null) {
            const result = cells;
            for (const [key, value] of Object.entries(contributions)) {
                if (result.has(key)) {
                    result.set(key, value);
                }
            }
            setCells(result);
        }
    }, [contributions])

    return (
        <div className="graph">
            <div className="graph-months">
                {
                    monthsNames.map((monthInfo) => <p className="graph-month" style={{left:`${monthInfo.week * 20 +10 }px`}}> {Months[monthInfo.month]}</p>)
                }
            </div>
            <div className="flex">
                <div className="graph-days">
                    {
                        daysNames.map((name) => <p className="graph-day">{name}</p>)
                    }
                </div>
                <div className="graph-cells">
                    {
                        Array.from(cells).map((cell) => <Cell params={cell}/>
                        )
                    }
                </div>
            </div>

        </div>
    )
}