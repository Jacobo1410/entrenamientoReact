import homeImg from '../assets/celtics-home.jpg';
import Title from '../pages/titles.jsx';


const Home = () => {
    return (
        <div className = "container py-5">
            <div className = "row">
                <Title text = {"Home"} />
                <div className = "col-md-9">
                    <p>Los Boston Celtics no son solo un equipo de baloncesto: son una leyenda viva del deporte. Fundados en 1946, los Celtics representan la tradición, la excelencia y el espíritu competitivo de la NBA. Con 17 campeonatos a lo largo de su historia, han sido protagonistas de algunas de las rivalidades más intensas y de los momentos más emocionantes del baloncesto profesional. Con sede en el TD Garden de Boston, Massachusetts, los Celtics han construido una cultura basada en el trabajo en equipo, la defensa intensa y el compromiso con la victoria. Íconos como Bill Russell, Larry Bird, Paul Pierce y Kevin Garnett han vestido con orgullo la camiseta verde, convirtiéndose en referentes históricos. Hoy, una nueva generación continúa el legado, manteniendo viva la pasión celta en cada partido. Esta página es tu punto de encuentro para conocer al quinteto actual, repasar la historia gloriosa del equipo y vivir el presente con orgullo verde.
                    </p>
                </div>
                <div className="col-md-3">
                    <img src = {homeImg} alt="Imagen Home"  width={500} className='img-fluid'/>
                </div>
            </div>
        </div>
    )
}
export default Home;