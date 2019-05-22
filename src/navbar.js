import React, { Component } from 'react';

class Navbar extends Component {
  render() {
    return (
      <div>
        <ul>
          <li><i class="fa fa-wrench"></i>SETTINGS</li>
          <li><i class="fa fa-code"></i>GISTS</li>
          <li><i class="fa fa-stack-overflow"></i>STACK OVERFLOW</li>
          <li><i class="fa fa-line-chart"></i>TRENDING</li>
          <li><i class="fa fa-pencil"></i>SCRATCH PAD</li>
          <li><i class="fa fa-lightbulb-o"></i>PLAYGROUND</li>
          <li><i class="fa fa-question"></i>HELP/INTRO</li>
        </ul>
      </div>
    )
  }
}

export default Navbar;