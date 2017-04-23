import React from 'react';
import {Link} from 'react-router-dom';

export default ({children}) =>
  (
    <div style={{
      border: '2px solid red'
    }}>
      Hello<br/>
      <Link to="/">/</Link><br/>
      <Link to="/catalog">catalog</Link><br/>
      <Link to="/catalog/page3">page3</Link><br/>
      <div>{children}</div>
    </div>
  )
