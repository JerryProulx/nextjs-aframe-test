import React from 'react';
import { Canvas } from 'react-three-fiber'
import Thing from './thing';

function Three() {

    return (
        <div className="canvas">
            <Canvas>
            <Thing />
            </Canvas>
        </div>

    )
  }

  export default Three;