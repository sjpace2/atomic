import React, { Component } from 'react';



class StoreLocator extends Component {
  render() {
    return (
      <div>
        <div className='store-locator'>
            <div>
                <div>Store Locator</div>
                <i class="fas fa-angle-right"></i>
            </div>
            <div>
                <div>FAQs</div>
                <i class="fas fa-angle-right"></i>
            </div>
            <div>
                <div>Technology</div>
                <i class="fas fa-angle-right"></i>
            </div>
        </div>
      </div>
    );
  }
}

export default StoreLocator;
