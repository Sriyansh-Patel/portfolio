import { useContext} from 'react'
import { Row, Col, Container } from 'react-bootstrap'
import header_image from '../assets/img/header-img.svg'
import 'animate.css'
import {DataContext} from '../App'



export default function Banner() {
  const {toggle} = useContext(DataContext);
  return (
    <section className="banner">
      <Container className={toggle ? "toggled banner-head" : "banner-head"}>
        <Row>
          <Col className="headline align-item-center" xs={20} md={5} xl={7}>
            <div className='headline-tag'>
              Welcome To My Portfolio
            </div>
            <div className='headline-content'>
              Hi! Sriyansh here I am <span className='rotating'>Web Developer</span>
            </div>
            <div className='brief-content'>
              I am passionate Web Developer Learning new technolgy and implementing the technology. 
            </div>
          </Col>
          <Col className="head_img animate__animated animate__zoomIn"  md={6} xl={5}>
            <img src={header_image} alt="header img" />
          </Col>
        </Row>
      </Container>
    </section>
  )
}