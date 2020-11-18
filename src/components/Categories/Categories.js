import React, { useState } from 'react';
import classes from './Categories.module.css';

const Categories = props => {

    return (
        <div className={classes.container}>
        { props.categories.map(category => (
            <div
                key={category.id}
                className={classes.card}
                onClick= {() => {
                    props.setCurrentCategory(category.id)
                }}
            >
                    <img className={classes.img} src={category.icons[0].url} alt="img"/>
                    <p className={classes.name}>{category.name}</p>
            </div>
            ))
        }       
        {/* {console.log(props.categories)} */}
        </div>
    )
}

export default Categories;