import React from 'react'
import './styles.css'
import 'toolcool-range-slider';
import DisplayChart from './DisplayChart'
import DisplayRadial from './DisplayRadial'


export default function Display() {
  return (
    <div className='main' >
      <div className='section1' >

        <div className='profile' >
          <img src="https://i.pinimg.com/originals/32/60/fb/3260fb808fb2206f28452d40fd6b46ce.jpg" alt="pfp" className='pfp' />
          <div className='name' >
            <h3 className="heading" >Hey Mike,</h3>
            <p style={{ marginTop: -10, color: 'grey', fontSize: '14px' }} > welcome back </p>
          </div>
        </div>

        <div>
          <div className='mob-container' >

            <p className='subHeading' > Today</p>

            <div className='deets' >
              <p style={{ fontSize: 24, fontWeight: 700 }} >$19,892</p>
              <p className='text-g'>Account Balance</p>
            </div>

            <div className='info' >
              <div className='deets' >
                <p className='subHeading' >$4000</p>
                <p className='text-g' >Year-to-date Contributions</p>
              </div>

              <div className='deets' >
                <p className='subHeading' >$1893</p>
                <p className='text-g' >Total Interest</p>
              </div>
            </div>


            <button className='btn'>I want to ⏷</button>
          </div>


          <div className='mob-container' >

            <p className='subHeading' >Recent Transactions</p>

            <div className="deets">
              <p className='text-g' >2020-08-27</p>
              <p className='text-b' >Withdrawal Transfer to Bank-XX11</p>
            </div>
            <div className="deets">
              <p className='text-g' >2020-07-14</p>
              <p className='text-b' >Withdrawal Transfer to Bank-XX11</p>
            </div>
            <div className="deets">
              <p className='text-g' >2020-06-22</p>
              <p className='text-b' >Withdrawal Transfer to Bank-XX11</p>
            </div>

          </div>
        </div>

      </div>




      <div className='section2' >


        <div className='retirment' >
          <p className='subHeading' style={{ color: 'blue' }}>Retirement income</p>
          <h3 className='heading' >Starting Year 2056 </h3>
        </div>

        <div className='goals' >

          <div className="deets" style={{ textAlign: 'start' }} >
            <p style={{ fontSize: 24, fontWeight: 700 }} >$300,000</p>
            <p className='text-g' >My Goal</p>
          </div>

          <div className='goalRes' >
            <div className="deets" style={{ textAlign: 'start' }}>
              <p style={{ fontSize: 24, fontWeight: 700 }} >59%</p>
              <p className='text-g' >Goal Achieved</p>
            </div>
            <div className="deets" style={{ textAlign: 'start' }}>
              <p style={{ fontSize: 24, fontWeight: 700 }} >$300</p>
              <p className='text-g' >Monthly Income</p>
            </div>
          </div>
        </div>


        <div>
          <p className='subHeading' style={{ textAlign: 'start' }} >Contributions Overtime</p>
          <DisplayChart />
        </div>

        <div className="deets" style={{ textAlign: 'start' }}>
          <h3 className='subHeading'  >How do I compare to my peers?</h3>
          <p className='text-g' >These numbers represent current goal achivement </p>
        </div>

        <div className='currentGoals'>
          <div className='conditions' >
            <p className='text-b' >Age: Under 30 ⏷</p>
            <p className='text-b' >Salary: K 20 - K 30 ⏷</p>
            <p className='text-b' >Gender: Male ⏷</p>
          </div>

          <div className='results'>
            <DisplayRadial lbl={"Average"} percent={78} />
            <DisplayRadial lbl={"Top"} percent={95} />
            <DisplayRadial lbl={"Me"} percent={59} />

          </div>
        </div>

      </div>









      <div className='section3' style={{ textAlign: 'start' }} >
        <div className='part1  '  >
          <h3 className='subHeading' > Retirement Strategy </h3>


          <div className="deets">
            <p className='subHeading' >Employee Contribution</p>
            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }} >

              <input type="range" min="1" max="100" value="50" class="slider" id="myRange" />
              <p>12%</p>
            </div>
          </div>

          <div className="deets">
            <p className='subHeading' >Retirement Age</p>
            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }} >
              <input type="range" min="20" max="70" value="55" class="slider" id="myRange" />
              <p>65</p>
            </div>
          </div>


          <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }} >
            <p className='text-b' >Employer Contribution </p>
            <p className='text-b' > 8.4% </p>
          </div>
          <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }} >
            <p className='text-b' > Interest rate </p>
            <p className='text-b' >5%</p>
          </div>

          <button className='btn' style={{ width: '100%' }} >Update</button>
          <p className='text-b' style={{ textAlign: 'center', color: 'blue' }} >View Help Docs</p>
        </div>


        <div className="deets">
          <p style={{ fontSize: '12px' }} >Are you considering a</p>
          <h5>Housing advance?</h5>
          <p className='text-g' >Limited time reduced interest</p>
          <p className='text-g' style={{ color: 'blue' }} >Learn More {'>'}</p>
        </div>
      </div>
    </div>
  )
}
