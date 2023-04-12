import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


import Home from './Home';
import { BrowserRouter as Router, Route, Switch, Link } from "react";


const home = () => {
  return (
    <body>
      <header className='kotak'>
        <div className='jumbo'>
          <h1 className='tantang'>I CHALLENGE YOU</h1>
        </div>
      </header>
      <div className='container harga'>
        <Row classnName='container'>
          <Col className=''>
          <h2 className='mt-5 gapake'>NgeGym Ga Pake Mahal</h2>
          <h2 className='mulai'>Mulai dari Rp 249.000</h2>
          <h5 className='akses'>Dapatkan akses tak terbatas ke seluruh premium gym CROSS FIT<br></br> dan kelas gratis setiap harinya</h5>
          <a href ='/member'button type="submit" class="btn btn-primary btn-lg member">Mulai Membership Anda</a>   
          </Col>
          <Col>
          <div className=' mt-5 thumb'>
          </div>
          </Col>
        </Row>
      </div>
      <div className='container mt-5 siap'>
        <h1 className='judul-content'>What should you practice</h1>
      </div>
      <hr></hr>
      <div className='container-gambar'>
        <div className='bisep'>
          <Row className=' container mt-5'>
            <Col>
              <div className='kolom-gambar-bisep mb-5'>
              </div>
            </Col>
            <Col>
              <h4> OTOT BISEP </h4>
              <hr></hr>
              <p className='paraf'>Otot bisep berperan penting pada sistem pergerakan manusia. Otot bisep bisa terlihat ketika posisi lengan tertekuk. Dalam kondisi tersebut, otot bisep akan membesar pada lengan bagian atas. Fungsi otot bisep juga bisa terasa saat melakukan beragam olahraga yang memerlukan kekuatan tangan. Seperti voli, panjat tebing, panahan, dan mendayung.
                Biasanya, orang-orang akan melatih otot bisep untuk latihan pertama dalam gym dengan tujuan menjadikannya lebih besar dan lebih kekar. Gerakan yang dapat membentuk otot bisep di antaranya front double biceps, back double biceps, front lat spread, dan must-muscular.</p>
            </Col>
          </Row>

          <Row className='container mt-5'>
            <Col>
              <div className='kolom-gambar-trisep mb-5'>
              </div>
            </Col>
            <Col>
              <h4> OTOT TRISEP </h4>
              <hr></hr>
              <p className='paraf'>Otot trisep terletak pada lengan bagian belakang yang terdiri dari tiga bagian atau caput otot. Latihan membentuk otot trisep tidak akan terlihat hasilnya jika dilakukan dengan gerakan biasa. Artinya, kita harus melakukan program yang intensif dan teknik yang berbeda di dalam gym.
                Otot trisep bekerja untuk membantu pergerakan sendi siku atau meluruskan lengan. Sehingga, beberapa gerakannya pun akan difokuskan pada titik tengah lengan yang dilatih untuk memanggul beban. Gerakan yang dapat membentuk otot trisep di antaranya tricep dips, seated overhead drumbell extension, dan close grip push up.</p>
            </Col>
          </Row>

          <Row className='container mt-5'>
            <Col>
              <div className='kolom-gambar-dada mb-5'>
              </div>
            </Col>
            <Col>
              <h4> OTOT DADA </h4>
              <hr></hr>
              <p className='paraf'>Otot dada terdiri dari dua buah bagian yaitu pectoralis mayor dan pectoralis minor. Di mana kedua bagian tersebut bertanggung jawab untuk menggerakkan naik turun dan gerakan rotasi lengan.
                Gerakan push-up dapat digunakan dalam latihan otot dada. Faktanya, saat push-up, otot bahu dan lengan juga terlibat aktif sehingga bisa membakar lebih banyak kalori.
                Latihan dada juga berfungsi sebagai pemanasan yang bagus untuk mengawali gym dengan menggerakkan otot-otot yang lebih kecil secara bersamaan. Namun perlu penjadwalan untuk melatih otot dada ini karena kebanyakan gerakannya yang fokus mengangkat beban berat.
                Karena itu juga, kamu hanya dapat melatih otot dada 1-2 kali dalam seminggu. Jika ingin mengencangkan otot tubuh bagian atas, kamu bisa menggunakan 1-3 set berisi 12 sampai 16 repetisi jeda setidaknya satu hari untuk mengistirahatkan otot dada.</p>
            </Col>
          </Row>

          <Row className='container mt-5'>
            <Col>
              <div className='kolom-gambar-fore mb-5'>
              </div>
            </Col>
            <Col>
              <h4> OTOT LENGAN BAWAH </h4>
              <hr></hr>
              <p className='paraf'>Ada banyak otot di lengan bagian bawah. Paling tidak, ada 3 otot penyusun di dalamnya yaitu superficial, intermediate, dan deep. Otot lengan bawah memiliki fungsi untuk fleksibilitas pergelangan tangan dan jari, serta rotasi telapak tangan.
                Otot lengan bawah sering diabaikan ketika melakukan latihan di gym. Padahal jika dilatih secara rutin, otot ini akan membuat genggaman dan pukulan semakin kencang.
                Bentuk latihan otot lengan bawah yang paling umum digunakan adalah deadlifts, bench press, wrist grips, dan farmer’s walks.</p>
            </Col>
          </Row>

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
  )
}

export default home;
