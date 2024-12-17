import React from 'react';
import './styles/OverlayComponent.css';

function OverlayComponent() {
  return (
    <div className={`overlay ${prop.isOpen?'active':''}`}></div>
  );
}

export default OverlayComponent;