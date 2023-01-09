import React from 'react';
import "./Statistics.css";
import EnergyChart from './Charts/EnergyChart';
import RangeChart from './Charts/RangeChart';
import FluidChart from './Charts/FluidChart';
import TireChart from './Charts/TireChart';
import BarsChart from './Charts/BarChart';
import AreasChart from './Charts/AreaChart';


const Statistics = () => {
  return (
    <section className="stats">
      <div className="stats-cards">
        <div className="energy flex">
          <div className="energy-logo">
            <img src="./assets/images/energy.png" alt="energy"/>
          </div>
          <p>Energy</p>
          <div className="chart">
            <p>45%</p>
            <EnergyChart />
          </div>
        </div>

        <div className="range flex">
          <div className="range-logo">
            <img src="./assets/images/range.png" alt="range"/>
          </div>
          <p>Range</p>
          <div className="chart">
            <p>157k%</p>
            <RangeChart />
          </div>
        </div>

        <div className="fluid flex">
          <div className="fluid-logo">
            <img src="./assets/images/fluid.png" alt="fluid"/>
          </div>
          <p>Break fluid</p>
          <div className="chart">
            <p>9%</p>
            <FluidChart />
          </div>
        </div>

        <div className="tire flex">
          <div className="tire-logo">
            <img src="./assets/images/tire.png" alt="tire" />
          </div>
          <p>Tire Wear</p>
          <div className="chart">
            <p>25%</p>
            <TireChart />
          </div>
        </div>

        <div className="bar">
          <p className="header">
            Miles <span>Statistics</span>
          </p>
          <div className="time flex">
            <div className="date flex">
              <div className="active">
                <p>Day</p>
              </div>
              <div>
                <p>Week</p>
              </div>
              <div>
                <p>Month</p>
              </div>
            </div>

            <div className="time-text">
              <p>256 Miles</p>
            </div>
          </div>

          <div className="chart">
            <BarsChart />
          </div>
        </div>

        <div className="car">
          <p className="header">
            Car <span>Statistics</span>
          </p>
          <div className="time flex">
            <div className="car-text">
              <p>20 February 2022</p>
            </div>

            <div className="date flex">
              <div className="active">
                <p>Day</p>
              </div>
              <div>
                <p>Week</p>
              </div>
              <div>
                <p>Month</p>
              </div>
            </div>
          </div>

          <div className="chart">
            <AreasChart />
          </div>
        </div>

        <div className="frames">
          <div className="car-frame">
            <div className="frame-head">
              <img src="./assets/images/Vector2.png" alt="vector" />
              <p>64% Recommend</p>
            </div>
            <div className="frame-img">
              <img src="./assets/images/cars/car10.png" alt="car"/>
            </div>
            <p>Mini Cooper</p>
            <div className="frame-footer flex">
              <div className="flex">
                <img src="./assets/images/frame1.png" alt="asset"/>
                <p>132K</p>
                <img src="./assets/images/frame-cog.png" alt="asset"/>
                <img src="./assets/images/frame3.png" alt="asset"/>
              </div>
              <p>$32/h</p>
            </div>
          </div>

          <div className="car-frame">
            <div className="frame-head">
              <img src="./assets/images/Vector2.png" alt="vector" />
              <p>74% Recommend</p>
            </div>
            <div className="frame-img">
              <img src="./assets/images/cars/car11.png" alt="car"/>
            </div>
            <p>Porsche 911 Carrera</p>
            <div className="frame-footer flex">
              <div className="flex">
                <img src="./assets/images/frame1.png" alt="asset"/>
                <p>130K</p>
                <img src="./assets/images/frame-cog.png" alt="asset"/>
                <img src="./assets/images/frame3.png" alt="asset"/>
              </div>
              <p>$28/h</p>
            </div>
          </div>

          <div className="car-frame">
            <div className="frame-head">
              <img src="./assets/images/Vector2.png" alt="vector" />
              <p>74% Recommend</p>
            </div>
            <div className="frame-img">
              <img src="./assets/images/cars/car12.png" alt="car"/>
            </div>
            <p>Porsche 911 Carrera</p>
            <div className="frame-footer flex">
              <div className="flex">
                <img src="./assets/images/frame1.png" alt="asset"/>
                <p>130K</p>
                <img src="./assets/images/frame-cog.png" alt="asset"/>
                <img src="./assets/images/frame3.png" alt="asset"/>
              </div>
              <p>$28/h</p>
            </div>
          </div>
        </div> 
        
      </div>
    </section>
  )
}

export default Statistics;