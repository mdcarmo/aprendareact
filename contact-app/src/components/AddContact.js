import React from "react";
import { Link } from "react-router-dom";

class AddContact extends React.Component {
  state = {
    name: "",
    email: "",
  };

  add = (e) => {
    e.preventDefault();
    if (this.state.name === "" || this.state.email === "") {
      alert("All the fields are mandatory");
      return;
    }
    this.props.addContactHandler(this.state);
    this.setState({ name: "", email: "" });
    this.props.history.push("/");
  };

  render() {
    return (
      <div className="ui main">
        <h3>
          Adicionar contato
          <Link to="/">
            <button className="tiny ui button violet right floated">
              Lista de contatos
            </button>
          </Link>
        </h3>
        <form className="ui form" onSubmit={this.add}>
          <div className="field">
            <label>Nome</label>
            <input
              type="text"
              name="name"
              placeholder="Digite o nome"
              value={this.state.name}
              onChange={(e) => this.setState({ name: e.target.value })}
            />
          </div>
          <div className="field">
            <label>E-mail</label>
            <input
              type="text"
              name="name"
              placeholder="Digite com o e-mail"
              value={this.state.email}
              onChange={(e) => this.setState({ email: e.target.value })}
            />
          </div>
          <button className="tiny ui button violet">Adicionar</button>
        </form>
      </div>
    );
  }
}
export default AddContact;
