import './sub-list.css';
import SubItem from '../SubItem/sub-item';
import React from 'react';
import { Subscription } from '../../Types';

function SubscriptionList({ subscriptions }: { subscriptions?: Subscription[] }) {

  return (
  <div className='list-cont'>
    <select
      className='category-filter' name="category"
      // onChange={(e) => setSub({ ...sub, category: e.target.value })}
    >
      <option value="all">all</option>
      <option value="entertainment">entertainment</option>
      <option value="education">education</option>
      <option value="work">work</option>
      <option value="home">home</option>
      <option value="food">food</option>
      <option value="other">other</option>
    </select>
    {subscriptions && subscriptions.map((sub) =>
      <SubItem key={sub._id} subscription={sub} />
    )}

  </div>
  );
}

export default SubscriptionList;