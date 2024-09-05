import React from 'react';
import styles from './Card.module.css';
import { useState } from 'react';

function Card({ image = 'https://images.unsplash.com/photo-1717157746019-57940e47648b?q=80&w=1896&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', title,link, description, onClick }) {
 
    return (
        <a href={link} className={styles.cardLink}>
        <div className={styles.card}>
            <img src={image}
            className={styles.imageContainer}/>
            <div className={styles.textContainer}>
                <h2 className={styles.taskTitle}>{title}</h2>
                <div className={styles.textDescription}>
                    <p>{description}</p>
                    </div>
            </div>
            </div>
            </a>

    );

    
}

export default Card;
