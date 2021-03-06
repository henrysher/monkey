import React from 'react';
import Graph from 'react-graph-vis';
import Dimensions from 'react-dimensions'

class GraphWrapper extends React.Component {
  render() {
    let newOptions = this.props.options;
    newOptions.height = this.props.containerHeight.toString() + 'px';
    newOptions.width = this.props.containerWidth.toString() + 'px';
    return (<Graph graph={this.props.graph} options={newOptions} events={this.props.events}/>)
  }
}

let ReactiveGraph = Dimensions()(GraphWrapper);
export {ReactiveGraph};
