import { Component } from "react";
import './App.css';
import { FiltrationPanel } from "./components/FiltrationPanel";
import { checkFilterStringValid } from "./services/checkFilterStringValid ";
import { stringLengthFilter } from "./services/stringLengthFilter";
import { substringFilter } from "./services/substringFilter";

export class App extends Component {

    constructor() {
        super()
        this.state = {
            list: [],
            currentList: [],
            doesCaseSensitive: false,
            filterValue: ''
        }
    }

    componentDidMount() {
        fetch(`https://thingproxy.freeboard.io/fetch/http://www.mrsoft.by/data.json`)
            .then(response => response.json())
            .then(data => {
                return this.setState({
                    list: [...data.data],
                    currentList: [...data.data]
                });
            });
    }

    inputHandler(event) {
        this.setState({
            filterValue: event.currentTarget.value
        })
    }

    checkboxHandler(event) {
        this.setState({
            doesCaseSensitive: event.currentTarget.checked
        })
    }

    stringLengthFilterButtonHandler() {
        let isNumber = checkFilterStringValid(this.state.filterValue)?.isNumber;

        if (!isNumber) return;

        this.setState({
            currentList: [...stringLengthFilter(this.state.filterValue, this.state.list)]
        })
    }

    substringFilterButtonHandler() {
        let isString = checkFilterStringValid(this.state.filterValue)?.isString;

        if (!isString) return;

        this.setState({
            currentList: [...substringFilter(this.state.filterValue, this.state.list, this.state.doesCaseSensitive)]
        })
    }

    render() {
        return (
            <div className="wrapper">
                <div className="list-scope">
                    <ul>
                        {!this.state.currentList.length ? "" :
                            this.state.currentList.map(((itemList, idx) => <li key={idx}>{itemList}</li>))}
                    </ul>
                </div>

                <FiltrationPanel
                    checkboxHandler={event => this.checkboxHandler(event)}
                    inputHandler={event => this.inputHandler(event)}
                    stringLengthFilterButtonHandler={() => this.stringLengthFilterButtonHandler()}
                    substringFilterButtonHandler={() => this.substringFilterButtonHandler()} />
            </div>
        )
    }
}

export default App;
