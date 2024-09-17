import logo from '../../assets/logo.svg';
import './App.module.css';
import Card from '../Card/Card'
import Title from '../Title/Title'
import styles from './App.module.css'

function App() {
  return <>
      <div className={styles.body}>
          <Title
          text={"PLANS+"}
          color={"red"}/>
          <Card
          checkboxes={[
              [true, "PNG templates"],
              [false, "Figma responsive components"],
              [false, "Constant updates"],
              [false, "Custom templates"],
          ]}
          price={"0"}
          per={"Per month"}/>
          <Card
          checkboxes={[
              [true, "PNG templates"],
              [true, "Figma responsive components"],
              [false, "Constant updates"],
              [false, "Custom templates"],
          ]}
          price={"0"}
          per={"Per month"}/>
          <Card
          checkboxes={[
              [true, "PNG templates"],
              [true, "Figma responsive components"],
              [true, "Constant updates"],
              [true, "Custom templates"],
          ]}
          price={"0"}
          per={"Per month"}/>

          <Title
          text={"NEW MEMBER"}
          color={"green"}/>
          <Card
          checkboxes={[
              [true, "PNG templates"],
              [false, "Figma responsive components"],
              [false, "Constant updates"],
              [false, "Custom templates"],
          ]}
          price={"0"}
          per={"Per month"}/>
          <Card
          checkboxes={[
              [true, "PNG templates"],
              [true, "Figma responsive components"],
              [false, "Constant updates"],
              [false, "Custom templates"],
          ]}
          price={"0"}
          per={"Per month"}/>
          <Card
          checkboxes={[
              [true, "PNG templates"],
              [true, "Figma responsive components"],
              [true, "Constant updates"],
              [true, "Custom templates"],
          ]}
          price={"0"}
          per={"Per month"}/>
      </div>
  </>
}

export default App;
