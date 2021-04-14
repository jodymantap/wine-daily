import {Link} from 'react-router-dom'; 
import {useState} from 'react';

function List() {
    const sendData = (nama, telepon, alamat) => {
      localStorage.setItem("nama", nama );
      localStorage.setItem("telepon", telepon );
      localStorage.setItem("alamat", alamat );
      console.log("onclickkkk")
    }
    const [data] = useState([
      {
            nama: "Afgan", telepon: 8126952564, alamat: "Bandung", email : "afganteng@gmail.com"},
            {nama: "Syahrini", telepon: 8524569523, alamat: "Lembang", email : "4120942@mail.com"},
            {nama: "Boy William", telepon: 8132564825, alamat: "Jakarta", email : "kjglkrtr@mail.com"},
            {nama: "Raissa", telepon: 85328546864, alamat: "Jakarta", email : "yahya@mail.com"},
            {nama: "Muhammad Alby", telepon: 8126953456, alamat: "Surabaya", email : "kakaka@mail.com"},
      
      ]);
    return (
      <div className="flex flex-wrap justify-between text-center mx-20 my-10">
        {data && data.map((datum) => { return(
        <div>
          <div className="text-base shadow-md rounded-md border-green-600 border-2 max-w-xs px-5 py-2">
            {datum.email}
          </div>
          <Link to={`/details/${datum.email}`}>
            <button onClick = {() => sendData(datum.nama, datum.telepon, datum.alamat)} className="my-2 px-5 py-2 rounded-lg bg-green-600 text-white">Details</button>
          </Link>
        </div>
          )
        })
      }
      </div>
    );
  }
  
  export default List;
  