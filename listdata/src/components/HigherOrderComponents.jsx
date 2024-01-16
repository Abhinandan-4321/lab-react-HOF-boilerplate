import React, {Component} from "react"


class HigherOrderComponent extends Component {
    constructor(){
        super();
        this.state = {
            userData: [
                { id: '1', name: 'Joe', user_type: 'Developer', age:31, years:11 },
                { id: '2', name: 'Hill', user_type: 'Designer', age:26, years:4 },
                { id: '3', name: 'John', user_type: 'Teacher', age:24, years: 2},
                { id: '4', name: 'Sam', user_type: 'Entreprenuer', age:58,years:25},
                { id: '5', name: 'Jack', user_type: 'Designer', age:43, years: 18}
            ]
        }
    }

    // display all items
    renderItems = () => {
        const data = this.state.userData;
        const mapRows = data.map((item) => (
            <React.Fragment key={item.id}>
                <li className="list-elements">
                    {/* Passing unique value to 'key' prop, eases the process for virtual DOM to remove the specific element and update HTML tree  */}
                    <span>Id: {item.id}</span>
                    <span>Name : {item.name}</span>
                    <span>User Type: {item.user_type}</span>
               </li>
            </React.Fragment>
        ));
        return mapRows;
    };


    renderByUserType = () => {
        const data = this.state.userData;
        const filtering = data.filter((item) => item.user_type == "Designer");
            
        const usingMap = filtering.map((item) => (
            <React.Fragment key={item.id}>
                <li className="list-elements">
                    <span>Id: {item.id}</span>
                    <span>Name : {item.name}</span>
                    <span>User Type: {item.user_type}</span>
                </li>
            </React.Fragment>
        ));
        return usingMap;
    };

    renderByJ = () => {
        const data = this.state.userData;
        const filtering = data.filter((item) => item.name[0] === "J");
            
        const usingMap = filtering.map((item) => (
            <React.Fragment key={item.id}>
                <li className="list-elements">
                    <span>Id: {item.id}</span>
                    <span>Name : {item.name}</span>
                    <span>User Type: {item.user_type}</span>
                </li>
            </React.Fragment>
        ));
        return usingMap;
    };

    renderByAge = () => {
        const data = this.state.userData;
        const filtering = data.filter((item) => item.age>28 && item.age <= 50);
            
        const usingMap = filtering.map((item) => (
            <React.Fragment key={item.id}>
                <li className="list-elements">
                    <span>Id: {item.id}</span>
                    <span>Name : {item.name}</span>
                    <span>User Type: {item.user_type}</span>
                </li>
            </React.Fragment>
        ));
        return usingMap;
    };

    renderByReduce = () => {
        const data = this.state.userData;
        const filtering = data.filter((item) => item.user_type == "Designer");
        const usingReduce = filtering.reduce((accumalator, item) => 
            accumalator + item.years, 0

            
        );
        return usingReduce;
    };






    render() {
        return (
        // instead of a parent div tag, we can also use React.Fragment
          <React.Fragment>
            <h1>Display all items</h1>
            <div className="display-box">
            <ul>{this.renderItems()} </ul>
            </div>

            <h1>Display based on user type</h1>
            <div className="display-box">
            <ul>{this.renderByUserType()} </ul>
            </div>

            <h1>Filter all data starting with J</h1>
            <div className="display-box">
            <ul>{this.renderByJ()} </ul>
            </div>

            <h1>Filter all data based on age greater than 28 and age less than or equal to 50</h1>
            <div className="display-box">
            <ul>{this.renderByJ()} </ul>
            </div>

            <h1>Filter the total years of the designer</h1>
            <div className="display-box">
            <ul>{this.renderByReduce()}</ul>     
            </div>


          </React.Fragment>)
    }
}

export default HigherOrderComponent;
