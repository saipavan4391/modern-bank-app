import React from 'react'

const Client = (props:any) => {
  const {id,logo}=props
  console.log(logo)
  return (
    <img src={logo} alt={logo} className={`w-[200px] h-[60px] object-contain`} />

  )
}

export default Client