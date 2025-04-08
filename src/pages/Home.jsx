import Header from 'components/Header'
import MissionStatement from 'components/MissionStatement'
import OpenPositions from 'components/OpenPositions'
import PositionDescription from 'components/PositionDescriptionPopup'
import React from 'react'

const Home = () => {
  return (
    <div className='column-layout'>
    <Header/>
    <MissionStatement/>
    {/* <PositionDescription/> */}
    <OpenPositions />
    </div>
  )
}

export default Home