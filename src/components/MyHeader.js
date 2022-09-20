import React from 'react';
import { FcSearch } from 'react-icons/fc';
import { FaEnvelope } from 'react-icons/fa';
import { FiSettings } from 'react-icons/fi';
import ImageUrl from '../images/man.png';
import MyIcons from './MyIcons';

const MyHeader = props => {
    return (
        <header style={styles.myHeader}>
            <div style={styles.left}>
                <div style={styles.logo}></div>
                <h1>InstaBook</h1>
            </div>
            <div style={styles.searchCont}>
                <span style={styles.inputIcon}><FcSearch /></span>
                <input
                    type='text'
                    style={styles.inputwithIcon}
                    placeholder="Search" />
            </div>
            <div style={styles.rightSide}>
                <button style={styles.rightIcon}><FaEnvelope /></button>
                <button style={styles.rightIcon}><FiSettings /></button>
                <MyIcons IconImg={ImageUrl} ImageAlt="My Icon"/>
            </div>          
        </header>
    )
}

export default MyHeader;

const styles= {
    myHeader: {
        padding: '1%',
        backgroudColor: 'black',
        color: 'rgb(163, 173, 194',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        boxShadow: '1px 6px 1px 1px rgba(0, 0, 255, .1'
    },
    left: {
        display: 'flex',
        flexDirection: 'row'
    },
    logo: {
        borderRadius: '50%',
        height: '50px',
        width: '60px',
        marginRight: '10px',
        backgroundColor: 'white',
        alignItems: 'center',
    },
    searchCont: {
        border: '1px solid #ddd',
        display: 'flex',
        flexDirection: 'row',
        borderRadius: '2px',
        width: '40%'
    },
    inputIcon: {
        background: '#ddd',
        padding: '10px',
        display: 'flex',
        alignItems: 'center',
        fontSize: '1rem'
    },
    inputwithIcon: {
        border: 'none',
        flex: '1',
        padding: '10px'
    },
    rightSide: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: '3%'
    },
    rightIcon: {
        margin: '10px'
    }
}