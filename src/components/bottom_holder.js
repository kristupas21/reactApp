import React from 'react';
import { BottomHolderInner } from './bottom_holder_inner';

export class BottomHolder extends React.Component {
  render() {
    return (
      <div className="bottom_holder flex-container border_shade">
        <BottomHolderInner />
      </div>
    );
  }
}
