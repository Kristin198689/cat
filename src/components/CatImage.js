import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from './CatImage.module.css';

const CatImage = () => {
    const [catImage, setCatImage] = useState('');

    const fetchCatImage = async () => {
        try {
            const response = await axios.get('https://api.thecatapi.com/v1/images/search');
            setCatImage(response.data[0].url);
        } catch (error) {
            console.error('Ошибка при загрузке изображения:', error);
        }
    };

    useEffect(() => {
        fetchCatImage();
    }, []);

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>кошки</h1>
            {catImage && <img src={catImage} alt="Cat" className={styles.image} />}
            <button className={styles.button} onClick={fetchCatImage}>Показать другое изображение</button>
        </div>
    );
};

export default CatImage;
