import { Component } from "react";
import { Row, Col } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';


class Member extends Component {
    render() {
        return (
            <body>
                <header1 className='membership'>
                    <div className='jumbo'>
                        <h1 className='member-page'>MEMBERSHIP</h1>
                    </div>
                </header1>

                <div className='container harga-member'>
                    <Row classnName='container'>
                        <Col className=''>
                            <h2 className='mt-5 gapake'>NgeGym Ga Pake Mahal</h2>
                            <h2 className='mulai'>Mulai dari Rp 249.000</h2>
                            <h5 className='akses'>Dapatkan akses tak terbatas ke seluruh premium gym CROSS FIT<br></br> dan kelas gratis setiap harinya</h5>
                        </Col>
                    </Row>
                </div>

                <div className="container box">
                    <div className="box1">
                        <h1 className="mt-5 waktu-bulan">12 Bulan</h1>
                        <h2 className='member-harga'>Rp 249.000<span className="bulan"> / Bulan</span></h2>
                        <div className="container"><hr></hr></div>
                        <ol>
                            <li>Akses tak terbatas ke seluruh CROSSFIT klub di Indonesia</li>
                            <li>Gratis kelas setiap harinya</li>
                            <li>Gratis 2 sesi Personal Training</li>


                        </ol>
                    </div>
                    <div className="box2">
                        <h1 className="mt-5 waktu-bulan">6 Bulan</h1>
                        <h2 className='member-harga'>Rp 295.000<span className="bulan"> / Bulan</span></h2>
                        <div className="container"><hr></hr></div>
                        <ol>
                            <li>Akses tak terbatas ke seluruh CROSSFIT klub di Indonesia</li>
                            <li>Gratis kelas setiap harinya</li>
                            <li>Gratis 1 sesi Personal Training</li>


                        </ol>

                    </div>
                    <div className="box3">
                    <h1 className="mt-5 waktu-bulan">3 Bulan</h1>
                        <h2 className='member-harga'>Rp 330.000<span className="bulan"> / Bulan</span></h2>
                        <div className="container"><hr></hr></div>
                        <ol>
                            <li>Akses tak terbatas ke seluruh CROSSFIT klub di Indonesia</li>
                            <li>Gratis kelas setiap harinya</li>
                            


                        </ol>

                    </div>


                </div>

                <div className='container'>
        <h1 className='m-5 judul-content'>WE WANT YOUR FEEDBACK</h1>
      </div>

      <div className='container'>
        <Form>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label className='label'>Email Address</Form.Label>
            <Form.Control type="email" placeholder="example@gmail.com" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label className='label'>Feedback</Form.Label>
            <Form.Control as="textarea" rows={3} />
          </Form.Group>
        </Form>
      </div>
      <div className='footer mt-5'>
        <p className='copy'>© Copyright Chex</p>
      </div>
            </body>
        );
    }

}

export default Member;
