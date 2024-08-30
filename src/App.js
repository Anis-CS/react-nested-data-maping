import logo from './logo.svg';
import './App.css';

const users=[
  {
    FullName:"Anisur Rahman",
    Address:"Dhaka",
    Phones:[
      {Home:"249249",Office:"53573953"}
    ]
  },
  {
    FullName:"Shahin Mia",
    Address:"Mirpur",
    Phones:[
      {Home:"24920",Office:"5357675"}
    ]
  },
  {
    FullName:"Kamal Rahman",
    Address:"Farmgate",
    Phones:[
      {Home:"24922232",Office:"53573934"}
    ]
  }
];

function App() {
  return (
    <div className="App">
        {users.map((user,index) =>
        <article key={index}>
            <h2>Name :{user.FullName}</h2>
            <h2>Address :{user.Address}</h2>
            <p>
              Phones : {user.Phones.map((phone,index) => 
              <div key={index}>
                <p>home : {phone.Home}</p>
                <p>Office : {phone.Office}</p>
               </div>
              )}
            </p>
        </article>
        
      )}
    </div>
  );
}

export default App;
