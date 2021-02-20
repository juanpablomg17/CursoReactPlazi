import React, { Children, useState } from 'react';
import '../assets/styles/Componets/Categories.scss';

const Categories = ({ children, title}) =>{

    var [title,useTitle] = useState(title);

    return(
        <div className="categories">
            <h3 className="categories__title">{title}</h3>
            {children}
        </div>
        
    );
}


export default Categories;