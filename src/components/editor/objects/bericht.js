import React from 'react';
import { BaseObject } from './_baseObject';
import Rebase from 're-base';

const base = Rebase.createClass('https://blink-ct.firebaseio.com/classes/1');

class Bericht extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      display: {},
    }
  }

  componentDidMount() {
    this.postMessage();
  }

  componentDidUpdate() {
    this.postMessage();
  }

  postMessage() {
    const object = this.props.data.object;

    if(!object) {
      return;
    }

    this.ref = base.post('display/message', {
      data: object.state
    });
  }

  render() {
    return <div className="icon">
      <div className="on"></div>
      <div className="off"></div>
    </div>;
  }
}

export default BaseObject(Bericht, 'bericht');
