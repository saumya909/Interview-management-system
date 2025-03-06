import React from 'react'
import AddEmployee from './_component/AddEmployee'

const Employee = () => {
  return (
    <div >
        <h1 className='font-bold justify-between flex '>
        Employees <AddEmployee/>
        </h1>
    </div>
  )
}

export default Employee