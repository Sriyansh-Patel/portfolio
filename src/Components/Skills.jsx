import PropTypes from 'prop-types';
import s from '../assets/img/meter1.svg'

function Card({card, cardTitle}){
    return(
        <div className="card">
        <div className="card-img">
            <img src={card} alt="Img" />
        </div>
        <div className="card-title">
            <h1>{cardTitle}</h1>
        </div>
        </div>
    )
}

Card.propTypes = {
    card: PropTypes.string.isRequired
};

export default function Skills(){
    return(
        <>
        <section className="skill-bg">
            <div className="box">
            <div className="box-title">
                Skills
            </div>
            <div className="cards">
                <Card card={s} cardTitle="HTML"/>
                <Card card={s} cardTitle="CSS"/>
                <Card card={s} cardTitle="Web Designing"/>
                <Card card={s} cardTitle="Web Designing"/>
            </div>
            </div>
        </section>
        </>
    );
}