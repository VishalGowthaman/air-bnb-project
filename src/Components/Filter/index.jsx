import React, { useState } from 'react';
import { links } from '../../assets/images-links';
import "./style.css";

function Filter() {
    const [selectedFilter, setselectedFilter]= useState();
  return (
    <div className="filter-div">
        {links.map((item, i) => (
            <div key={i} className={`links-box ${i == selectedFilter && "selected=box"}`}
            onClick={() => {
                console.log("selecting key",i);
                setselectedFilter(i);
            }
            }>
                <img src={item.imgSrc} className="links-img"alt={`filter-${i}`} />
                <p className={`links-box ${i == selectedFilter && "selected-box"}`}>{item.label}</p>
            </div>
        ))}
    </div>
  );
}

export default Filter;
