import bolaAdv from '../../../assets/bola-adv.webp'
import manos from '../../../assets/manos.webp'

function MainContent() {

    return (
    <section>
        <picture className='main-content'>
        <img src={manos} alt="manos de adivina con uñas pintadas en rosa" className='manos' width="225" height="121"/>
        <img src={bolaAdv} alt="bola de adivinacion rosa con brillos verdes" className='bola' width="189" height="181"/>
        </picture>
        <h2>¿Por qué una web de tarot?</h2>
        <p>En esta web pretendemos insistir en el matiz de realidad que pueda haber en la lectura del tarot.</p>
        <p>No se trata de predecir el futuro si no que a través de la lectura de cartas usando la intución, la meditación y la conexión con uno/a mismo/a 
        tengamos otro enfoque o punto de vista que nos ayuden a buscar respuestas más pausadas y meditadas</p>
    </section>
    )

}

export default MainContent;