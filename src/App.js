import logo from './logo.svg';
import './App.css';

const users=[
  {
    Name:'Anis',
    Address:'Dhaka',
    Phones :[ {Home:'393934234', Office:'7997885'} ]
  },
  {
    Name:'Anis',
    Address:'Dhaka',
    Phones:[ { Home:'39393544234', Office:'7993437885'}]
  },
  {
    Name:'Anis',
    Address:'Dhaka',
    Phones :[ { Home:'393934334234',Office:'79973434885'}]
  }
]

function App() {
  return (
    <div className="App">
        {users.map((user,index) =>
          <article key={index}>
            <h1>Name : {user.Name}</h1>
            <h2>Address : {user.Address}</h2>
            <p>Phones : {user.Phones.map((phone,index) => 
              <p key={index}>
                   Home : {phone.Home} Office : {phone.Office}
              </p>
              )}
            </p>
        </article>
        )}
    </div>
  );
}

export default App;
