import React from 'react'
import './Card.css';

const Card = ({id, title, tag, status}) => {
  return (
    <div className="cardContainer flex-gap-10" style={{gap : '5px'}}>
        <div className="cardHeading flex-sb">
            <span style={{textTransform : "uppercase"}} className='color-grey'>{id}</span>
            <div className="imageContainer relative" style={{ width : "30px", height : "30px"}}>
                <img style={{width : "100%", height : "100%",  borderRadius : "50%" }}  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQM-iwVlNcR3MSkZGaTMkw6AF5Dlb3qJe0jwgr40RDQHC6xi9N9rtUrfJuxDTQSQZ0EpiI&usqp=CAU" alt="UserImage" />
                <div className="showStatus"></div>
            </div>
        </div>
        <div className="cardTitle" style={{fontWeight : 200 , fontSize:15}} >
            <p >{title}</p>
        </div>
        <div className="cardTags">
        <div className="tags color-grey"> ... </div>
            {
                tag?.map((elem, index) => {
                    return <div style={{ fontSize:12}}key={index} className="tags color-grey"> <span>•</span> {elem}</div>
                })
            }
        </div>
    </div>
  )
}

export default Card;