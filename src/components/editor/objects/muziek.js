import React from 'react';
import { BaseObject } from './_baseObject';

class Muziek extends React.Component {

  constructor(props){
    super(props);
  }

  componentDidMount(){
    if(!this.props.main) {
      return;
    }

    this.audio = new Audio('http://icecast.omroep.nl/3fm-sb-mp3');
  }

  componentDidUpdate(){
    if(!this.props.main) {
      return;
    }

    if(this.props.data.object.state === this.prevState) {
      return;
    }
    this.prevState = this.props.data.object.state;

    switch(this.props.data.object.state){
      case 'uit':
        this.audio.pause();
        break;
      case 'piano':
      case 'zang':
      case 'gitaar':
        this.audio.play();
        break;
    }
  }

  render() {
    return <div className="icon">
      <div className="off"></div>
      <div className="on"></div>
    </div>;
  }
}

export default BaseObject(Muziek, 'muziek');
