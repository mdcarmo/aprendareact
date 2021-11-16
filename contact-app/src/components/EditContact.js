import React from "react";
import { Link } from "react-router-dom";

class EditContact extends React.Component {
  constructor(props) {
    super(props);
    const { id, name, email } = props.location.state.contact;
    this.state = {
      id,
      name,
      email,
    };
  }

  update = (e) => {
    e.preventDefault();
    if (this.state.name === "" || this.state.email === "") {
      alert("ALl the fields are mandatory!");
      return;
    }
    this.props.updateContactHandler(this.state);
    this.setState({ name: "", email: "" });
    this.props.history.push("/");
  };
  render() {
    return (
      <div className="ui main">
        <h3>Editar Contato
        <Link to="/">
            <button className="tiny ui button violet right floated">
              Lista de contatos
            </button>
          </Link>
        </h3>
        <form className="ui form" onSubmit={this.update}>
          <div className="field">
            <label>Nome</label>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={this.state.name}
              onChange={(e) => this.setState({ name: e.target.value })}
            />
          </div>
          <div className="field">
            <label>E-mail</label>
            <input
              type="text"
              name="email"
              placeholder="Email"
              value={this.state.email}
              onChange={(e) => this.setState({ email: e.target.value })}
            />
          </div>
          <button className="tiny ui button violet center">Alterar</button>
        </form>
      </div>
    );
  }
}

export default EditContact;
