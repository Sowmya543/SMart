import "./TopCategories.css"


import img1 from "../../../../assets/tc1.png"
import img2 from "../../../../assets/tc2.png"
import img3 from "../../../../assets/tc3.png"
import img4 from "../../../../assets/tc4.png"
import img5 from "../../../../assets/tc5.png"
import img6 from "../../../../assets/tc6.png"
import img7 from "../../../../assets/tc7.png"


const cate = [
  {
    id: 1,
    name: 'Mobile',
    image: img1
  },
  {
    id: 2,
    name: 'Cosmetics',
    image: img2
  },
  {
    id: 3,
    name: 'Electronics',
    image: img3
  },
  {
    id: 4,
    name: 'Furniture',
    image: img4
  },
  {
    id: 5,
    name: 'Watches',
    image: img5
  },
  {
    id: 6,
    name: 'Decor',
    image: img6
  },
  {
    id: 7,
    name: 'Accessories',
    image: img7
  }
]


const TopCategories = () => {
  return (
    <div className="topcategories">
      <div className='topcontent'>
        <div className="head">
          <h1>Shop From Top Categories</h1>
          <button><p>View all &gt;</p></button>
        </div>
        <div>
          <div className="underline" id="tcu"></div>
          <div className="divider"></div>
        </div>
      </div>
      <div className='cards'>
        {cate.map(cate => (
          <div key={cate.id} className="topcard">
            <button><img src={cate.image} alt="" /></button>
            <h3>{cate.name}</h3>
          </div>
        ))}
      </div>
    </div>
  )
}

export default TopCategories
