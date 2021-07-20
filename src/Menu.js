import React from 'react';

export class Menu extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(event) {
        const text = event.target.value;
        this.props.chooseVideo(text);
    }
    render() {
        return (
            <form onClick={this.handleClick} >
                <input type="radio" value="fast" name="src" /> Fast
                <input type="radio" value="slow" name="src" /> Slow
                <input type="radio" value="eec" name="src" /> Eec
                <input type="radio" value="cute" name="src" /> Cute
            </form>
        )
    }
}