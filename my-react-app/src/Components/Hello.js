import React from 'react';
import {cekTahun, cekHari} from '../Utils/waktu';

const Hello = () => {
    return (
    <>
      <p>Hello, selamat datang di kleas web programing</p>
      <p>Hari ini adalah Tahun {cekTahun()}</p>
      <p>Hari ini adalah Tanggal {cekHari()}</p>
    </>
    );
  };

  export default Hello;