import { useState } from "react";
import styles from "../styles/exTen.module.css"

export function GaleriaDeImagens({ urls }) {
    const [enlargedImage, setEnlargedImage] = useState(null);

    return (
        <>
            <h1>Galeria de Imagens</h1>
            {urls.map(url => (
                <img src={url} key={url} className={styles['thumbnail-image']} onClick={() => setEnlargedImage(url)} />
            ))}

            {enlargedImage && (
                    <img src={enlargedImage} className={styles['enlarged-image']} onClick={() => setEnlargedImage(null)} />
            )}
        </>
    )
}