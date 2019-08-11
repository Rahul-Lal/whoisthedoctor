import React from 'react'
import Doctor from './Doctor'

const doctors = [
  {
    id: 1,
    name: 'First Doctor',
    actor: 'William Hartnell',
    image: 'https://3.bp.blogspot.com/-QfYjK57-Vf8/Uo5XfXMUqgI/AAAAAAAAljA/Y9LX673sOMw/s640/Doctor+Who+-+1+William+Hartnell+by+Matt+Ferguson.jpg',
    startedYear: '1963',
    finishedYear: '1966'
  },
  {
    id: 2,
    name: 'Second Doctor',
    actor: 'Patrick Troughton',
    image: 'https://1.bp.blogspot.com/-NY3iya2YBmg/Uo5XdSVs4tI/AAAAAAAAlik/A3T4ZAyuylA/s640/Doctor+Who+-+2+Patrick+Troughton+by+Matt+Ferguson.jpg',
    startedYear: '1966',
    finishedYear: '1969'
  },
  {
    id: 3,
    name: 'Third Doctor',
    actor: 'Jon Pertwee',
    image: 'https://2.bp.blogspot.com/-poVluJXKz_U/Uo5XdLF4GgI/AAAAAAAAlig/HnacKyMDrTM/s640/Doctor+Who+-+3+Jon+Pertwee+by+Matt+Ferguson.jpg',
    startedYear: '1969',
    finishedYear: '1974'
  },
  {
    id: 4,
    name: 'Fourth Doctor',
    actor: 'Tom Baker',
    image: 'https://4.bp.blogspot.com/-HD4ZK1OLcYQ/Uo5XeAub-pI/AAAAAAAAliw/qLUpofxzTqY/s640/Doctor+Who+-+4+Tom+Baker+by+Matt+Ferguson.jpg',
    startedYear: '1974',
    finishedYear: '1981'
  },
  {
    id: 5,
    name: 'Fifth Doctor',
    actor: 'Peter Davison',
    image: 'https://1.bp.blogspot.com/-Tgc_GiQa_1Q/Uo5XfRmzJSI/AAAAAAAAli8/f-Q-QJCQM28/s640/Doctor+Who+-+6+Colin+Baker+by+Matt+Ferguson.jpg',
    startedYear: '1982',
    finishedYear: '1984'
  },
  {
    id: 6,
    name: 'Sixth Doctor',
    actor: 'Colin Baker',
    image: 'https://1.bp.blogspot.com/-Tgc_GiQa_1Q/Uo5XfRmzJSI/AAAAAAAAli8/f-Q-QJCQM28/s640/Doctor+Who+-+6+Colin+Baker+by+Matt+Ferguson.jpg',
    startedYear: '1984',
    finishedYear: '1987'
  },
  {
    id: 7,
    name: 'Seventh Doctor',
    actor: 'Sylvester McCoy',
    image: 'https://4.bp.blogspot.com/-wCMQAVfcvOY/Uo5Xf0wgNcI/AAAAAAAAljI/0bHowMyOYXQ/s640/Doctor+Who+-+7+Sylvester+McCoy+by+Matt+Ferguson.jpg',
    startedYear: '1987',
    finishedYear: '1995'
  },
  {
    id: 8,
    name: 'Eighth Doctor',
    actor: 'Paul McGann',
    image: 'https://1.bp.blogspot.com/-DK0wnXcP1Kg/Uo5XgB_bBSI/AAAAAAAAljQ/bu3-S5C1GU0/s640/Doctor+Who+-+8+Paul+McGann+by+Matt+Ferguson.jpg',
    startedYear: '1995',
    finishedYear: '2013'
  },
  {
    id: 9,
    name: 'War Doctor',
    actor: 'Sir John Hurt',
    image: 'https://3.bp.blogspot.com/-jmr1Pp2hE_o/U_nIQQtFnrI/AAAAAAAAwJ8/P5MupbXH-oI/s1600/Doctor%2BWho%2B-%2B8.5%2BJohn%2BHurt%2Bby%2BMatt%2BFerguson.jpg',
    startedYear: '2013',
    finishedYear: '2013'
  },
  {
    id: 10,
    name: 'Ninth Doctor',
    actor: 'Christopher Eccleston',
    image: 'https://3.bp.blogspot.com/-wsCzY_x_7qA/Uo5XgUEOrUI/AAAAAAAAljU/wn4yV59jslI/s640/Doctor+Who+-+9+Christopher+Eccleston+by+Matt+Ferguson.jpg',
    startedYear: '2005',
    finishedYear: '2005'
  },
  {
    id: 11,
    name: 'Tenth Doctor',
    actor: 'David Tennant',
    image: 'https://3.bp.blogspot.com/--f8E45sU86s/Uo5WswecJ7I/AAAAAAAAliQ/IRja6jTa71I/s640/Doctor+Who+-+10+David+Tennant+by+Matt+Ferguson.jpg',
    startedYear: '2005',
    finishedYear: '2010'
  },
  {
    id: 12,
    name: 'Meta-Crisis Tenth Doctor',
    actor: 'David Tennant',
    image: 'http://3.bp.blogspot.com/-vgYXxkA6bBM/UzRclmc5zqI/AAAAAAAALjo/LXlcoaF0gN0/s1600/metacrisis.jpg',
    startedYear: '2008',
    finishedYear: '2008'
  },
  {
    id: 13,
    name: 'Eleventh Doctor',
    actor: 'Matt Smith',
    image: 'https://1.bp.blogspot.com/-zyj_p0ZWX0M/Uo5Wvyur0YI/AAAAAAAAliY/mo8D68HdUGA/s1600/Doctor+Who+-+11+Matt+Smith+by+Matt+Ferguson.jpg',
    startedYear: '2010',
    finishedYear: '2013'
  },
  {
    id: 14,
    name: 'Twelfth Doctor',
    actor: 'Peter Capaldi',
    image: 'https://i.pinimg.com/474x/b1/bf/ec/b1bfecf5b60e14e7f06826431147a870---doctor-twelfth-doctor.jpg',
    startedYear: '2013',
    finishedYear: '2017'
  },
  {
    id: 15,
    name: 'Thirteenth Doctor',
    actor: 'Jodie Whittaker',
    image: 'https://www.geek.com/wp-content/uploads/2017/11/miguel-delicado.jpg',
    startedYear: '2017',
    finishedYear: 'present'
  }
]

function showEachDoctor(doctor) {
  return (
    <Doctor
      key={doctor.id}
      name={doctor.name}
      actor={doctor.actor}
      startedYear={doctor.startedYear}
      finishedYear={doctor.finishedYear}
      image={doctor.image}
    />
  )
}

const App = () => {
  <h1>Who Is The Doctor!</h1>
  {
    console.log(doctors.map(showEachDoctor))
    doctors.map(showEachDoctor)
  }
}

export default App
