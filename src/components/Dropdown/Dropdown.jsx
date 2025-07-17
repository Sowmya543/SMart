import React from 'react'
import "./Dropdown.css"

const Dropdown = () => {
  return (
    <>
      <div className='drop'>
        <select name="Groceries" id="">
          <option value="g">Groceries</option>
        </select>

        <select name="Premium-Fruits" id="" >
          <option value="pf">Premium Fruits</option>
          <option value="pf">Premium Fruits1</option>
          <option value="pf">Premium Fruits2</option>
          <option value="pf">Premium Fruits3</option>
          <option value="pf">Premium Fruits4</option>
        </select>

        <select name="HomeKitchen" id="">
          <option value="hk">Home & Kitchen</option>
        </select>

        <select name="Fashion" id="">
          <option value="f">Fashion</option>
        </select>

        <select name="Electronics" id="">
          <option value="elec">Electronics</option>
        </select>

        <select name="Beauty" id="">
          <option value="bea">Beauty</option>
        </select>

        <select name="HomeImprovement" id="">
          <option value="hi">Home Improvement</option>
        </select>

        <select name="SportsToysLuggage" id="">
          <option value="stl">Sports, Toys & Luggage</option>
        </select>
      </div>
      <hr />
    </>
  )
}

export default Dropdown
