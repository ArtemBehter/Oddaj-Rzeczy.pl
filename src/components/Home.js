import React, { Component } from 'react';
import HomeHeader from './HomeHeader';
import HomeThreeColumns from './HomeThreeColumns';
import HomeFourSteps from './HomeFourSteps';
import HomeAboutUs from './HomeAboutUs';
import HomeProgram from './HomeProgram';
import HomeFooter from './HomeFooter';


export default function Home() {
  return (
    <div>
      <HomeHeader />
        <HomeThreeColumns />
        <HomeFourSteps />
        <HomeAboutUs />
        <HomeProgram />
        <HomeFooter /> 
        </div>
  )
}


