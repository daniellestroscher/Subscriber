import React from 'react';
import { Link } from 'react-router-dom';

import Logout from '../Logout/logout-btn';
import SubscriptionList from '../SubList/sub-list';
import { Subscription } from '../../Types';

import './home.css';

function Home({ subscriptions }: { subscriptions?: Array<Subscription> }) {

  const getMonthlyAverageCost = () => {
    return subscriptions?.map((sub) =>
      sub.cycle === 'Annually' ?
        Number(sub.price) / 12
        : Number(sub.price)
    ).reduce((prev, curr) => prev + curr)
  }

  const count = getMonthlyAverageCost();

  return (
    <>
      <header>
        <img className="logo"
          src="https://static.wixstatic.com/media/3dbed1_c21e470da4924ae2abf0fa851a4464e0~mv2.png/v1/fill/w_499,h_108,al_c,q_85,enc_auto/3dbed1_c21e470da4924ae2abf0fa851a4464e0~mv2.png"
          alt="Subscriber Logo"
        />
        <Logout />
      </header>
      {count !== 0 &&
        <footer>
          <div className='header-notice'>
            <h2 className='header-cont-title'>My monthly average subscription expenses:</h2>
            <h2 className='header-cont-price'>${count?.toFixed(2)}</h2>
          </div>
        </footer>
      }
      <div className='body-cont'>
        <section className='body-header'>
          <h3 className='title'>My Subscriptions</h3>
          <Link to='/add'><button className='add-btn'>Add Subscription</button></Link>
        </section>
        <div className='underline'></div>

        <SubscriptionList subscriptions={subscriptions} />
      </div>
    </>
  )
}

export default Home;