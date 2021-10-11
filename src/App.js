import React, {useState} from 'react';
import Institutions from './components/Institutions.js'
import Experiences from './components/Experiences.js'
import Basics from './components/Basics.js'
import BasicsUI from './components/BasicsUI.js'
import InstitutionsUI from './components/InstitutionsUI.js'
import ExperiencesUI from './components/ExperiencesUI.js'
import './styles/style.css'
import uniqid from 'uniqid'

function App() {
  const [inputs, setInputs] = useState({
    name: '',
    email: '',
    phone: ''
  })
  
  const [institutions, setInstitutions] = useState([{
    name: '',
    course: '',
    date: '',
    id: uniqid()
  }
  ])

  const [experiences, setExperiences] = useState([{
    company: '',
    position: '',
    mainTasks: ' ',
    initialDate: '2018-05',
    finalDate: '2020-05',
    id: uniqid()


  }])

  const [disabled, setDisabled] = useState({
    basicsDisabled: false,
    institutionsDisabled: false,
    experincesDisabled: false
  })

  const handleChange = (event, id) => {
    const {name, value} = event.target;
    const [property, propertyName] = name.split('-')
    const setState = property === 'institution' ? setInstitutions : setExperiences;
    if (!!propertyName) {
      setState(prevState => {
        return prevState.map(item => {
          if (item.id === id) item[propertyName] = value
          return item
        })
      })
    } else {
      setInputs({...inputs, [name]: value})
    }
  }

  const handleRemoval = (dataset, id) => {
    const setState = dataset === 'experiences' ? setExperiences : setInstitutions;
    setState(prevState => prevState.filter(item => item.id !== id));
  }

  const formSubmit = (event) => {
    event.preventDefault();
    console.log("submit")
  }

  const addNewInst = () => {
    setInstitutions([...institutions, {
      name: '',
      course: '',
      date: '',
      id: uniqid()
    }])
  }

  const addNewExperience = () => {
    setExperiences([...experiences, {
      company: '',
      position: '',
      mainTasks: ' ',
      initialDate: '',
      finalDate: '',
      id: uniqid()
    }])
  }

  const saveArea = (event) => {
    const {name} = event.target;
    setDisabled(prevState => {
      const newBool = !prevState[name]
      return {
        ...prevState,
        [name]: newBool
      }
    })
  }

  return (

    <main>
      <form className="cv-form" onSubmit={formSubmit}>
        <section className="form-section basics-form">
          <Basics data={inputs} handleChange={handleChange} disabled={disabled['basicsDisabled']} />
          <button type="button"
            name="basicsDisabled"
            onClick={saveArea}>{disabled['basicsDisabled'] ? 'Edit' : 'Save'}</button>
          <div className="form-section-modal"></div>
        </section>
        <section className="form-section institutions-form">
          {institutions.map((item) => <Institutions data={item}
            key={item.id}
            handleRemoval={handleRemoval}
            disabled={disabled['institutionsDisabled']}
            handleChange={handleChange} />)}
          <div className="buttons-div">
            <button type="button" onClick={addNewInst} >Add New</button>
            <button type="button"
              name="institutionsDisabled"
              onClick={saveArea}>{disabled['institutionsDisabled'] ? 'Edit' : 'Save'}</button>
          </div>
        </section>
        <section className="form-section experiences-form">
          {experiences.map((item) => <Experiences data={item}
            key={item.id}
            handleRemoval={handleRemoval}
            disabled={disabled['experincesDisabled']}
            handleChange={handleChange} />)}
          <div className="buttons-div">
            <button type="button" onClick={addNewExperience}>Add New</button>
            <button type="button"
              name="experincesDisabled"
              onClick={saveArea}>{disabled['experincesDisabled'] ? 'Edit' : 'Save'}</button>
          </div>
        </section>
        <button className="submit-form">Submit</button>
      </form>
      <div className="CV">
        <section className="basic-info">
          <BasicsUI data={inputs} />
        </section>
        <section className="courses">
          <h3>Courses:</h3>
          {institutions.map((item) => <InstitutionsUI data={item}
            key={item.id + '-ui'} />)}
        </section>
        <section className="experiences">
          <h3>Experiences:</h3>
          {experiences.map((item) => <ExperiencesUI data={item}
            key={item.id + '-ui'} />)}
        </section>

      </div>
    </main>
  )
}

export default App
