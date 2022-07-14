import React, { useState, useEffect, createContext } from "react";
import uniqid from "uniqid";

const DataContext = createContext();

const DataProvider = (props) => {
  const [institutions, setInstitutions] = useState(() => {
    const saved = localStorage.getItem("institutions");
    const initialvalue = JSON.parse(saved);
    return (
      initialvalue || [
        {
          name: "",
          course: "",
          date: "2018-05-05",
          id: uniqid(),
        },
      ]
    );
  });

  const [experiences, setExperiences] = useState(() => {
    const saved = localStorage.getItem("experiences");
    const initialvalue = JSON.parse(saved);
    return (
      initialvalue || [
        {
          company: "",
          position: "",
          maintasks: " ",
          initialdate: "2018-05",
          finaldate: "2020-05",
          id: uniqid(),
        },
      ]
    );
  });

  const defaulteditingstatus = {
    basicsdisabled: false,
    institutionsdisabled: false,
    experincesdisabled: false,
  };

  const [disabled, setDisabled] = useState(() => {
    const saved = localStorage.getItem("defaulteditingstatus");
    const initialvalue = JSON.parse(saved);
    return initialvalue || defaulteditingstatus;
  });
  useEffect(() => {
    localStorage.setItem("defaultEditingStatus", JSON.stringify(disabled));
  }, [disabled]);

  const handleChange = (event, id) => {
    const { name, value } = event.target;
    const [property, propertyName] = name.split("-");
    const setState =
      property === "institution" ? setInstitutions : setExperiences;
    if (!!propertyName) {
      setState((prevState) => {
        return prevState.map((item) => {
          if (item.id === id) item[propertyName] = value;
          return item;
        });
      });
    }
  };

  const handleRemoval = (dataset, id) => {
    const setState =
      dataset === "experiences" ? setExperiences : setInstitutions;
    setState((prevState) => prevState.filter((item) => item.id !== id));
  };

  const formSubmit = (event) => {
    event.preventDefault();
  };

  const addNewInst = () => {
    setInstitutions([
      ...institutions,
      {
        name: "",
        course: "",
        date: "",
        id: uniqid(),
      },
    ]);
  };

  const addNewExperience = () => {
    setExperiences([
      ...experiences,
      {
        company: "",
        position: "",
        mainTasks: " ",
        initialDate: "2018-05",
        finalDate: "2020-05",
        id: uniqid(),
      },
    ]);
  };

  const saveArea = (event) => {
    const { name } = event.target;
    setDisabled((prevState) => {
      const newBool = !prevState[name];
      return {
        ...prevState,
        [name]: newBool,
      };
    });
    localStorage.setItem("experiences", JSON.stringify(experiences));
    localStorage.setItem("institutions", JSON.stringify(institutions));
    //localStorage.setItem("inputs", JSON.stringify(inputs));
  };

  return (
    <DataContext.Provider
      value={{
        formSubmit,
        handleChange,
        disabled,
        saveArea,
        institutions,
        handleRemoval,
        experiences,
        addNewInst,
        addNewExperience,
      }}
    >
      {props.children}
    </DataContext.Provider>
  );
};

export { DataContext, DataProvider };
