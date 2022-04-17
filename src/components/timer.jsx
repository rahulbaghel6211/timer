import '../App.css';

import {
  useEffect,
  useState,
} from 'react';

export const Timer = () => {

    const [min, setMin] = useState(1);
    const [sec, setSec] = useState(1);

    useEffect(() => {
        let myId = setInterval(() => {
            if (sec > 0) {
                if (sec <= 59) {
                    setSec(sec + 1);
                }
                else {
                    setMin(min + 1);

                    setSec(sec * 0)

                }
            }
            if (sec === 0) {
                if (min === 0) {

                    clearInterval(myId)

                }
                else {

                    setMin(min + 1);
                    setSec(sec + 1);
                }
            }
        }, 1000);
        return () => {

            clearInterval(myId);

        }
    })
    return (
        <div>

            <h1 className="title">clock</h1>

            <h1 className="watch">{min}:{sec}</h1>

        </div>
    )
}