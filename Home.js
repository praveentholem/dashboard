import React from 'react'
import { BsFileText, BsWallet2, BsHandbag, BsCurrencyDollar }
  from 'react-icons/bs';
import Charts1 from './Charts1';
import Charts2 from './Charts2';

function Home() {


  return (
    <main className='main-container'>

      <div className='main-cards'>
        <div className='card'>
          <div className="icon-content">
            <div className="icon-left">
              <div className="icon-background">
                <BsCurrencyDollar className='card_icon' />
              </div>
            </div>
            <div className="content-right">
              <h3>Earnings</h3>
              <h1>$198k</h1>
            </div>
          </div>
        </div>
        <div className='card'>
          <div className="icon-content">
            <div className="icon-left">
              <div className="icon-background">
                <BsFileText className='card_icon' />
              </div>
            </div>
            <div className="content-right">
              <h3>Orders</h3>
              <h1>$2.4k</h1>
            </div>
          </div>
        </div>
        <div className='card'>
          <div className="icon-content">
            <div className="icon-left">
              <div className="icon-background">
                <BsWallet2 className='card_icon' />
              </div>
            </div>
            <div className="content-right">
              <h3>Balance</h3>
              <h1>$2.4k</h1>
            </div>
          </div>
        </div>
        <div className='card'>
          <div className="icon-content">
            <div className="icon-left">
              <div className="icon-background">
                <BsHandbag className='card_icon' />
              </div>
            </div>
            <div className="content-right">
              <h3>Total Sales</h3>
              <h1>$89k</h1>
            </div>
          </div>
        </div>
      </div>

      <div className='charts'>

        <Charts1 className="charts1" />

        <div className="card">
          <h3>Customers</h3>
          <Charts2 className="charts2" />
        </div>

      </div>
    </main>
  )
}

export default Home;