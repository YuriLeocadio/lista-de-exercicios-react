import './App.css'
import { Saudacao } from './Components/exOne'
import { Contador } from './Components/exTwo'
import { TaskList } from './Components/exThree'
import { ButtonTradeColor } from './Components/exFour'
import { PerfilUsuario } from './Components/exFive'
import { Visibility } from './Components/exSix'
import { TextBox } from './Components/exSeven'
import { CalculadoraSomatorio } from './Components/exNine'
import { ContadorDeCaracteres } from './Components/exEight'
import { GaleriaDeImagens } from './Components/exTen'

function App() {
  
  const urls = [
    'https://img.freepik.com/fotos-gratis/tempestade-sobre-a-aldeia_23-2151762582.jpg?ga=GA1.1.2115334401.1724982517&semt=ais_hybrid',
    'https://img.freepik.com/fotos-gratis/tempestade-sobre-o-campo_23-2151762533.jpg?ga=GA1.1.2115334401.1724982517&semt=ais_hybrid',
    'https://img.freepik.com/fotos-gratis/conceito-de-colagem-de-efeitos-climaticos_23-2150062056.jpg?ga=GA1.1.2115334401.1724982517&semt=ais_hybrid'
]

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
        <ContadorDeCaracteres />
        <CalculadoraSomatorio />
        <div className='ex'>
        <GaleriaDeImagens urls={urls} />
        </div>
      </div>
    </>
  )
}

export default App
