import React from 'react'
import BasicBox from './layoutcomponents/BasicBox'
import BoxSystemProps from './layoutcomponents/BoxSystemProps'
import BoxSx from './layoutcomponents/BoxSx'
import FluidContainer from './layoutcomponents/FluidContainer'
import FixedContainer from './layoutcomponents/FixedContainer'

const page = () => {
  return (
    <>
    <h1>Layout components</h1>
    <h3>Box</h3>
    <BasicBox/>
    <BoxSystemProps/>
    <BoxSx/>
    <h3>Containers</h3>
    <FluidContainer/>
    <FixedContainer/>
      
    </>
  )
}

export default page
