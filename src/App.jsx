import './App.css'
import avatarimage from './assets/avater.png'
import profilepage from './components/profilepage'

function App() {
  const user = {
    name: "Zahra Hablb",
    username: "@helaizahra",
    avatarimage: avatarimage,
    xp:90,
    lastActive: "Dec 28 2025",
    streakDays: 2,
    longesStreak: 2,
    recentBadgesText: "vo badges earned yet.",

    personalinfo: {
     Email: 'helaizahra21@gmail.com', 
     Gender: 'female',
     Country: 'Afghanistan',
     "Province or State": 'Kabul',
     "Working Expreiance": "1",
     "Date of Birth": "6/6/2002",
     "Online Protfolio Link": "N/A",
     "Likedin Link": "N/A",
     Languages: "Farsi,Pashto,English,Urdo",
     Bio: "Computer Science Student|Future Web Developer|"




    },

    accountDetails:{
      Role: "Student",
      Status:"Active",
      Verification: "Verified"

    }
  }

  return (
    <div className='page'>
     <profilepage user={user}></profilepage>
    </div>
  )

}

export default App
