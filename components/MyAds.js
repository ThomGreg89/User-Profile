import React from 'react';
import Coke from '../images/coke.jpg';

const MyAds = props => {
    return(
        <article style={styles.myArticle}>
            <img src={props.img} alt={props.alt} />
            <h1>PASS. PROPS THROUGH HERE. {props.h1}</h1>
            <p>{props.para}</p>
        </article>
    )
}

export default MyAds;

const styles = {
    myArticle: {
        display: 'flex',
        flexDirection: 'column',
        width: '250px',
        padding: '1%',
        backgroundColor: 'black',
        color: 'rgb(163, 173, 194)',
        justifyContent: 'space-between',
        borderRadius: '5px',
        boxShadow: '0 4px 8px 0 rgb(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
        textAlign: 'center',
        margin: '5%'
    }
}