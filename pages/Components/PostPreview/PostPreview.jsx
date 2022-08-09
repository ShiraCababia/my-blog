import React from 'react';
import styles from './PostPreview.module.css';


export default function PostPreview() {
    return (
        <div>
            <h3>
                <a></a>
            </h3>
            <div className={styles.date}>date</div>
            <p>post content : 4 rows</p>

        </div>
    );
  }