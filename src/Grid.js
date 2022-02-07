import React from "react";
import "./Grid.css";

const renderValue = (value) => {
    if (value === "cross") {
        return "X";
    } else if (value === "circle") {
        return "O";
    } else {
        return null;
    }
};

const Grid = (props) => {
    return (
        <>
            <h3 className="grid-turn">{`turn: ${props.turn}`}</h3>
            {props.winner ? (
                <h2 className="grid-result">{`player with ${
                    props.turn === "cross" ? "circle" : "cross"
                } won`}</h2>
            ) : null}
            {!props.data.filter((grid) => grid === null).length &&
            !props.winner ? (
                <h3 className="grid-result">Match draw!!!</h3>
            ) : null}
            <div style={{ marginTop: "15px" }} className="container">
                {props.data.map((value, index) => {
                    return (
                        <div
                            key={index}
                            onClick={() => {
                                props.setGrid(index);
                            }}
                        >
                            {renderValue(value)}
                        </div>
                    );
                })}
            </div>
        </>
    );
};

export default Grid;
