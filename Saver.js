import React from "react";
import "./App.css";
import exportFromJSON from "export-from-json";
const jsonfile = require("jsonfile");

const fs = require("fs");
const path = require("path");
class App extends React.Component {
  state = {
    formState: {
      id: "",
      Title: "",
      Syntax: "",
      Type: "Syntax",
      mode: "submit",
    },
    users: [],
  };

  resetFormState = () => {
    this.setState({
      formState: {
        Title: "",
        Syntax: "",
        Type: "Syntax",
        mode: "submit",
        id: "",
      },
    });
  };

  onChange = (event) => {
    this.setState({
      formState: {
        ...this.state.formState,
        [event.target.name]: event.target.value,
      },
    });
  };

  onSubmit = (event) => {
    const { users, formState } = this.state;
    event.preventDefault();
    const Title = event.target.querySelector("input[name='Title']").value;
    const Syntax = event.target.querySelector("input[name='Syntax']").value;
    const Type = event.target.querySelector("input[name='Type']").value;
    if (formState.mode === "submit") {
      this.setState({
        users: [
          ...this.state.users,
          {
            Title,
            Syntax,
            Type,
            updating: false,
            id:
              this.state.users.length == 0
                ? 1
                : this.state.users[this.state.users.length - 1].id + 1,
          },
        ],
      });
    } else if (formState.mode === "edit") {
      const index = users.find((user) => user.id === formState.id).id;
      users[index] = {
        Title,
        Syntax,
        Type,
        updating: false,
        id: users[index].id,
      };
      this.setState({
        users: [...users],
      });
    }

    this.resetFormState();
  };

  updateUser = (key) => {
    let { users } = this.state;
    users[key].updating = true;

    this.setState({
      formState: { ...this.state.users[key], mode: "edit" },
      users,
    });
  };

  deleteUser = (key) => {
    let { users } = this.state;
    users.splice(key, 1);
    this.setState({
      users: [...users],
    });
  };

  render() {
    const { users, formState } = this.state;
    return (
      <div>
        <Form
          formState={formState}
          onChange={this.onChange}
          onSubmit={this.onSubmit}
        />

        <button
          onClick={() => {
            const data = { data: this.state.users };
            const fileName = "data";
            const exporttype = exportFromJSON.types.json;
            exportFromJSON({ data, fileName, exporttype });
          }}
        >
          Save To CSV
        </button>
        <Table
          users={users}
          updateUser={this.updateUser}
          deleteUser={this.deleteUser}
        />
      </div>
    );
  }
}

const Table = ({ users = [], updateUser, deleteUser }) => {
  return (
    <div className="table">
      <div className="table-header">
        <div className="row">
          <div className="column">Title</div>
          <div className="column">Syntax</div>
          <div className="column">Type</div>
          <div className="column">Options</div>
        </div>
      </div>
      <div className="table-body">
        {users.map((user, key) => {
          return (
            <div className={`row ${user.updating ? "updating" : ""}`}>
              <div className="column">{user.Title}</div>
              <div className="column">{user.Syntax}</div>
              <div className="column">{user.Type}</div>
              <div className="column">
                <button className="icon" onClick={() => updateUser(key)}>
                  <i class="far fa-edit" />
                </button>
                <button className="icon">
                  <i
                    class="fas fa-user-minus"
                    onClick={() => deleteUser(key)}
                  />
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

const Field = ({ label = "", name = "", value = "", onChange }) => {
  return (
    <div className="field">
      <label htmlFOR={name}>{label}</label>
      <input Type="text" name={name} value={value} onChange={onChange} />
    </div>
  );
};

const Form = ({ formState, onChange, onSubmit }) => {
  return (
    <form className="form" onSubmit={onSubmit}>
      <fieldset>
        <Field
          name="Title"
          label="Title"
          value={formState.Title}
          onChange={onChange}
        />
        <Field
          name="Syntax"
          label="Syntax"
          value={formState.Syntax}
          onChange={onChange}
        />
        <Field
          name="Type"
          label="Type"
          value={formState.Type}
          onChange={onChange}
        />
      </fieldset>
      <button>{formState.mode}</button>
    </form>
  );
};

export default App;
