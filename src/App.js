import React, { Component } from "react";
import HomeView from "./HomeView";
import CategorySelectionView from "./CategorySelectionView";
import NewEntryView from "./NewEntryView";

class App extends Component {
    state = { location: "homeView"}

    getView() {
        const {location} = this.state;

        switch(location) {
            case "homeView":
                return <HomeView />;
            case "categorySelection":
                return <CategorySelectionView />
            case "newEntry":
                return <NewEntryView />;
            default:
                return null;
        }
    }

    onButtonClick = (event) => {
        console.log(event.target)
    }
    render() {
        return (
            <div>
                <button onClick={this.onButtonClick}>Home</button>
                {this.getView()}
            </div>
        );
    }
}

export default App;