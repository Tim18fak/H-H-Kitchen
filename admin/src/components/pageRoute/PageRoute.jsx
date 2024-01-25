import React from 'react'

export default function PageRoute ({currentRoute}){
  return (
    <div>
      <h4>Pages/ {currentRoute}</h4>
      <h3>{currentRoute}</h3>
    </div>
  )
}
