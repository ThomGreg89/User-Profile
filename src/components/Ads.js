import React from 'react';
import Coke from '../images/subway.jpg';



const Ads = props => {
    return(
        <article style={styles.myArticle}>
            <img src={Coke} alt="Coca-Cola Advertisement" />
            <h1>Subway</h1>
            <p>If you are eating at Subway, then you are eating fresh.</p>
        </article>
    )
}

export default Ads;

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