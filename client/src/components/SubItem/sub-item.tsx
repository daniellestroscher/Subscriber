import './sub-item.css';
import { Link } from 'react-router-dom';
import { Subscription } from '../../Types';
import React from 'react';


function SubItem({ subscription }:{subscription:Subscription}) {

  return (<>
  <Link to={`/edit-sub/${subscription._id}`}>
    <div className='item-cont'>
      <div className='icon-window'>
        <img className='sub-item-icon' src={subscription.icon} alt='icon'></img>
      </div>
      <h4 className='sub-item-title'>{subscription.title}</h4>

      <div className='sub-info'>
      <h5>Started: {subscription.prettyStart}</h5>
      <h5>${subscription.price}/{subscription.cycle}</h5>
      </div>
    </div>
  </Link>

</>);
}

export default SubItem;