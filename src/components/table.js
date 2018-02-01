import React, { Component } from 'react';

class EaronsTable extends Component {

  constructor(){
    super();
    this.state = { data: [] };
  }

  componentDidMount() {
    fetch('/data.json').then(function(responseData){
      return responseData.json();
    }).then(function(useableData){
      this.setState({ data: useableData });
    }.bind(this));
  }

  renderRow(rowData) {
    return Object.values(rowData).map(function(cellData) { // Object.values is a quick way to get the values of an object as an array
      return (<td>{cellData}</td>)
    });
  }

  renderBodyData() {
    if (this.state.data && this.state.data.length > 0){
      return this.state.data.map(function(row) {
        return (<tr>{this.renderRow(row)}</tr>)
      }.bind(this)); // bind this back to EaronsTable, since in functions, the value of this isn't always defined.
    }
    return null; // at first, this.state.data will be an empty array, so we return null. (basically it's still loading and parsing)
  }

  render() {
    return (
      <table>
        <tbody>
          { this.renderBodyData() }
        </tbody>
      </table>
    );
  }
}

export default EaronsTable;
