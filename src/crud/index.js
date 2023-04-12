import React, { Component } from "react";
import Fomulir from "./Fomulir";
import Tabel from "./Tabel";


export default class Crud extends Component {

  constructor(props) {
    super(props);

    this.state = {
      datas: [],
      nama: "",
      alamat: "",
      telepon: Number,
      id: "",
    }
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault();

    if (this.state.id === "") {
      this.setState({
        datas: [
          ...this.state.datas,
          {
            id: this.state.datas.length + 1,
            nama: this.state.nama,
            alamat: this.state.alamat,
            telepon: this.state.telepon,
          },
        ],
      });
    } else {
      const dataYangSelainDiPilih = this.state.datas
        .filter((data) => data.id !== this.state.id)
        .map((filterdata) => {
          return filterdata;
        });

      this.setState({
        datas: [
          ...dataYangSelainDiPilih,
          {
            id: this.state.datas.length + 1,
            nama: this.state.nama,
            alamat: this.state.alamat,
            telepon: this.state.telepon,
          },
        ],
      });
    }

    this.setState({
      nama: "",
      alamat: "",
      telepon: 0,
      id: "",
    });
  };

  editData = (id) => {
    const dataYangDiPilih = this.state.datas
      .filter((data) => data.id === id)
      .map((filterdata) => {
        return filterdata;
      });

    this.setState({
      nama: dataYangDiPilih[0].nama,
      alamat: dataYangDiPilih[0].alamat,
      telepon: dataYangDiPilih[0].telepon,
      id: dataYangDiPilih[0].id,
    });
  };

  hapusData = (id) => {
    const dataBaru = this.state.datas
      .filter((data) => data.id !== id)
      .map((filterdata) => {
        return filterdata;
      });

    this.setState({
      datas: dataBaru
    })

  }
  
  render() {
    console.log(this.state.datas);
    return (
     <div>
      <div class="container pelanggan">
            <h1 className="data">Data Pelanggan GYM</h1>

            <Tabel datas={this.state.datas} editData={this.editData} hapusData={this.hapusData} />
            <Fomulir {...this.state} handleChange={this.handleChange} handleSubmit={this.handleSubmit} />
          </div>

     </div>
    );
  }

}




