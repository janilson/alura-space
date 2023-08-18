import styles from "./Cards.module.scss";

import open from "./open.png";
import favorito from "./favorito.png";

const Cards = ({itens}) => {
    return (
        <ul className={styles.cards__cards}>
            {itens.map(foto => {
                return (
                    <li 
                        key={foto.id}
                        className={styles.cards__card}>
                        <img 
                            className={styles.cards__imagem}
                            src={foto.imagem} 
                            alt={foto.titulo} />
                        <p className={styles.cards__descricao}>
                            {foto.titulo}
                        </p>
                        <div>
                            <p>{foto.creditos}</p>
                            <span>
                                <img src={favorito} alt="ícone coração de curtir"/>
                                <img src={open} alt="ícone de abrir modal"/>
                            </span>
                        </div>
                    </li>
                );
            })}
        </ul>
    )
};

export default Cards;