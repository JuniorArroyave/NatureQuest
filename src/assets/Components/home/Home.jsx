import { Activities } from "../../Array/Activities";
import "../home/Home.css";

export function Home() {

    const activities = Activities();

    return (
        <>

        <div className="Initialtext">
        <h1>La vida es aventura, la naturaleza es el escenario.</h1>
<p>La vida es una aventura en la que la naturaleza nos brinda la oportunidad de explorar, soñar y crecer. Cada momento al aire libre es una puerta hacia la tranquilidad y la reflexión, donde encontramos la fuerza para enfrentar los desafíos y la inspiración para disfrutar de cada instante.</p>
        </div>

            <div className="containerMain">
                
                {activities.map((actividad, index) => (
                    <div className="target" key={index}>
                        <img className="imageActiviti" src={actividad.imagen} alt={actividad.nombre} />
                        <div className="content">
                            <h3>{actividad.nombre}</h3>
                            <p>{actividad.descripcion}</p>
                        </div>
                        <div className="viewMoreButton">
                                <a className="linkActiviti" href="#">Ver mas...</a>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}
