import React from 'react';

let log =
    [{
        id:1,
        exercise: 'Flat Bench',
        date: '8.2.21',
        record: [{
            id:10,
            set: 1,
            weight: 165,
            reps: 10
        }, {
            id:11,
            set: 2,
            weight: 175,
            reps: 10
        }, {
            id:12,
            set: 3,
            weight: 185,
            reps: 10
        }],
    },
    {
        id:2,
        exercise: 'Squat',
        date: '8.2.21',
        record: [{
            id:20,
            set: 1,
            weight: 165,
            reps: 10
        }, {
            id:21,
            set: 2,
            weight: 175,
            reps: 10
        }, {
            id:22,
            set: 3,
            weight: 185,
            reps: 10
        }],
    }]


const CurrentWorkout = () => {
    return (
        <div>
            {log.map((e) => {

                return (
                    <div key={e.id}>
                        <h1 >{e.exercise}</h1>
                        {e.record.map((i) => {

                            return (
                                <div key={i.id}>
                                    <li >{i.set} | {i.weight} | {i.reps}</li>
                                </div>
                                
                            )
                        })}
                    </div>
                )
            })}
        </div>
    );
}

export default CurrentWorkout;