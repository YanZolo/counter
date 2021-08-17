import React from "react";

class Counter extends React.Component {

    changeColor() {
        let h2ClassName = { color: "blue" };
        if (this.props.count > 0) h2ClassName = { color: "green" }
        if (this.props.count < 0) h2ClassName = { color: "red" }
        return h2ClassName
    };

    render() {
        const h2ClassName = this.changeColor()
        console.log(this.props)

        return (
            <>
                <h2 style={h2ClassName}>{this.props.count}</h2>
                <button className="btn btn-danger mx-2" onClick={() =>
                    this.props.substract()
                }
                > -1 </button>
                <button className="btn btn-success" onClick={() =>
                    this.props.increment()
                }>+1</button>

            </>
        )
    }
}

export default Counter