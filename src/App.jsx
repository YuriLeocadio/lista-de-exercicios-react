import './App.css'
import { Saudacao } from './Components/exOne'
import { Contador } from './Components/exTwo'
import { TaskList } from './Components/exThree'
import { ButtonTradeColor } from './Components/exFour'
import { PerfilUsuario } from './Components/exFive'
import { Visibility } from './Components/exSix'
import { TextBox } from './Components/exSeven'

function App() {

  return (
    <>
      <div className='container'>
        <Saudacao name='Yuri' />
        <div className='ex'>
          <Contador />
        </div>

        <TaskList />
        <ButtonTradeColor />

        <div className='ex'>
          <PerfilUsuario name='Yuri' age='18' image='https://img.freepik.com/fotos-gratis/close-de-um-atleta-jogando-futebol_23-2150845600.jpg?size=626&ext=jpg&ga=GA1.1.2115334401.1724982517&semt=ais_hybrid' />
        </div>
        
        <Visibility />
        <TextBox />
      </div>
    </>
  )
}

export default App
