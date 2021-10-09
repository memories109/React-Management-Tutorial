import React, {Component} from 'react';
import './App.css';
import Customer from './components/Customer';

const customer = [
  {
  'id': 1,
  'image': 'https://placeimg.com/64/64/1',
  'name' : '소소소',
  'birthday': '222',
  'gender':'sdfsdfsd'

  },
  {
  'id': 2,
  'image': 'https://placeimg.com/64/64/2',
  'name' : '수수수',
  'birthday': '233332',
  'gender':'sdfsdfㄴㅇㄹㄴㅇㄹㄴsd'

  },
  {
  'id': 3,
  'image': 'https://placeimg.com/64/64/3',
  'name' : '솨솨솨',
  'birthday': '24444',
  'gender':'ㅎㅎㅎㅎ'

  }
]
class App extends Component{ 
  render() {
    return (
      <div>
        {
          customer.map(c => {
            return (
              <Customer
              key={c.id}
              id={c.id}
              image={c.image}
              name={c.name}
              birthday={c.birthday}
              gender={c.gender}
              />
            )
          })
        }
        </div>
      
    );
  }
}

export default App;
