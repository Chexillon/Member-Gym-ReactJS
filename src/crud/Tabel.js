import React from 'react'
import Table from 'react-bootstrap/Table';

const Tabel = ({ datas, editData, hapusData }) => {
  return (
    <Table bg="dark" variant="dark" className="table mt-3" striped bordered hover>
      <thead>
        <tr>
          <th>No</th>
          <th>Nama</th>
          <th>Alamat</th>
          <th>Telepon</th>
          <th>Opsi</th>

        </tr>
      </thead>
      <tbody>
        {datas.map((data, index) => {
        return (
          <tr key={index}>
            <td>{index+1}</td>
            <td>{data.nama}</td>
            <td>{data.alamat}</td>
            <td>{data.telepon}</td>
            <td>
              <button className="btn btn-warning" onClick={() => editData(data.id)}>Edit</button>
              <button className="btn btn-danger" onClick={() => hapusData(data.id)}>Hapus</button>
            </td>
          </tr>

        );
        })}
      </tbody>
    
      
    
      
    </Table>
  );
}

export default Tabel

