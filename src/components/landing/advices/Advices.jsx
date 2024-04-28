import luna from '../../../assets/luna-nube.webp'
import te from '../../../assets/te.webp'

function Advices() {

    return (
    <section>
        <picture>
        <img src={luna} alt="Luna en cuarto creciente verde tapada por una nube rosa" className='luna' width="303" height="187"/>
        <img src={te} alt="Bolsita te de rosa, colgade de una de las puntas de la luna" className='te'/>
        </picture>
        <h2>Consejos</h2>
        <p>un</p>
        <p>dos</p>
    </section>
    )

}

export default Advices;