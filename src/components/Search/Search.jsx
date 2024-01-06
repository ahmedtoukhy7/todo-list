import React from 'react'
import { useSelector } from 'react-redux'

export default function Search() {

    let {searchList} =useSelector((state)=>state.user)
    console.log(searchList);
  return (
    <div>Search</div>
  )
}
