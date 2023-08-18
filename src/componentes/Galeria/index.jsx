import Tags from "../Tags";
import styles from "./Galeria.module.scss";
import Cards from "../Cards";
import fotos from "./fotos.json";
import { useState } from "react";

const Galeria = () => {
    const [itens, setItens] = useState(fotos);
    const tags = [...new Set(fotos.map(valor => valor.tag))];

    const filtrarFotos = (tag) => {
        const novasFotos = fotos.filter(foto => foto.tag === tag);

        setItens(novasFotos);
    };

    return (
        <section className={styles.galeria}>
            <h2>Navegue pela Galeria</h2>
            <Tags tags={tags} filtrarFotos={filtrarFotos} setItens={setItens} />
            <Cards itens={itens} />
        </section>
    )
};

export default Galeria;