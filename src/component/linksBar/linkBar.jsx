import React from 'react';
import styles from './linkBar.module.css';
import githubIcon from '../../assets/images/iconImages/githubIcon.png';
import linkedinIcon from '../../assets/images/iconImages/LinkedIn.png';
import mail_Icon from '../../assets/images/iconImages/mail_Icon.png';
import resumeIcon from '../../assets/images/iconImages/resumeIcon.png';

const LinkBar = () => {
    return (
        <div className={styles.linkBar}>
            <div className={styles.icon}>
            <a href="https://github.com/Rprasad2400">
                <img src={githubIcon} alt="Github link" />
            </a>
            </div>
            <div className={styles.icon}>
            <a href="https://www.linkedin.com/in/rohan-prasad-402184233/">
                <img src={linkedinIcon} alt="Icon 2" />
            </a>
            </div>
            <div className={styles.icon}>
            <a href="r.prasad@ufl.edu">
                <img src={mail_Icon} alt="Icon 3" />
            </a>
            
            </div>
            <div className={styles.icon}>
            <a href="https://example.com">
                <img src={resumeIcon} alt="Icon 4" />
            </a>
            </div>
        </div>
    );
};

export default LinkBar;