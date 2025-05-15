import Title from '../pages/titles.jsx';
import Tatum from '../assets/Tatum.jpg';
import Brown from '../assets/jaylen-brown.jpg';
import White from '../assets/d-white.jpeg';
import Porz from '../assets/porz.jpg';
import Jrue from '../assets/holiday.jpg';

const Family = () => {
    return (
        <div className = "container py-5">
            <div className = "row">
              <Title text = {"Quinteto"} />
                <div className = "col-md-12">
                    <ul>
                        <li> 
                            <strong>Ala-pívot (PF): Jayson Tatum</strong> – La estrella del equipo. Líder en anotación, con talento para decidir partidos importantes.
                        <img src={Tatum} alt="Jayson Tatum" width={600}/>
                        </li>
                        <li> <strong>Alero (SF): Jaylen Brown </strong> - Potente y explosivo, clave en el juego físico y en el contraataque.
                        <img src={Brown} alt="Jaylen Brown" width={620} />
                        </li>
                        <li> <strong>.Escolta (SG): Derrick White </strong>– Versátil y constante, aporta tanto en defensa como en anotación.
                        <img src={White} alt="Derrick White" width={600}/>
                        </li>
                        <li><strong>Pívot (C): Kristaps Porziņģis </strong> – Altura, tiro exterior y protección del aro; un complemento ideal para el núcleo del equipo.
                        <img src={Porz} alt="Kristaps Porzingis" width={600}/>
                        </li>
                        <li> <strong>Base (PG): Jrue Holiday</strong> - Defensor élite y cerebro del juego. Su experiencia y liderazgo marcan el ritmo del equipo.
                        <img src={Jrue} alt="Jrue Holiday" width={600}/>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
export default Family;
