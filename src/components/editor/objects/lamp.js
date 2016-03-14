import React from 'react';
import { BaseObject } from './_baseObject';

class Lamp extends React.Component {
  render() {
    let state;
    if(this.props.data.object)
      state = this.props.data.object.state;

    let style = {};
    if(this.props.data.object && this.props.data.object.values.indexOf(state) === -1){
      style = {
        backgroundColor: 'rgb(' + state.r + ',' + state.g + ',' + state.b + ')'
      };
    }

    let classes = 'icon';
    if(this.props.data && this.props.data.digibord  && this.props.data.digibord.state !== '0' && this.props.data.digibord.state !== 0) {
      classes += ' on-digiboard';
    }

    return <div className={ classes } style={ style }>
      <div className="off"></div>
      <div className="on"></div>
    </div>;
  }
}

export default BaseObject(Lamp, 'lamp');