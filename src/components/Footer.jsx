import React, { Component } from 'react'

export default class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            seconds: 0,
        };
        this.intervalId = null; // додаткове поле, інтервал краще не кидати в стейт. Просто рандомне поле. Принцип теж самий як і useRef()
    };

    componentDidMount() { // Використовується коли компонент створився коли компонент повністю готовий. Зарезервоване ім'я. Тут роблятся запити з апі, інтервали і т.д..
        this.intervalId = setInterval(() => {
            this.setState({seconds: this.state.seconds + 1});
            console.log(this.state.seconds + 1);;
        }, 1000);
    };

    componentWillUnmount() { // зворотній метод componentDidMount()
        clearInterval(this.intervalId);
    };

    render() {
        return (
            <div>
                Seconds visible:
                <span>Footer title is: {this.props.footerTitle}</span>
            </div>
        );
    };
};
