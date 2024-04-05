const App = ({ intialButtonText, initialClassesList }) => {
   const [buttonText, setButtonText] = React.useState(intialButtonText)
   const [classesList, setClassesList] = React.useState(initialClassesList)

   const onButtonClick = () => {
      setButtonText('Hello from React')
      setClassesList('green-btn')
   }

   return (
      <div className="app">
         <button className={classesList} onClick={onButtonClick}>
            {buttonText}
         </button>
      </div>
   )
}

const container = document.getElementById('app')
const root = ReactDOM.createRoot(container)
root.render(<App intialButtonText="Click me" initialClassesList="" />)
