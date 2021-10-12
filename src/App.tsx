import styles from "./test.module.scss"

type AppProps = {
  text: string
  num?: number
};

const App = ({ text, num }: AppProps) => (
  <div className="App">
    <header className="App-header">
      <p className={styles.paragraph}>
        {text} + {num}
      </p>
    </header>
  </div>
)

export default App;