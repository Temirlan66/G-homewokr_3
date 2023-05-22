import React from "react";

class TodoForm extends React.Component {
  constructor() {
    super();
    this.state = {
      value: "",
      items: [],
    };
  }

  onChangeHandler = (e) => {
    this.setState({
      value: e.target.value,
    });
  };

  addTodoHandler = (e) => {
    e.preventDefault();
    this.setState({
      value: "",
      items: [...this.state.items, this.state.value],
    });
  };

  render() {
    return (
      <div className="container">
        <h1 className="todo-text">Todo</h1>
        <form className="form">
          <input value={this.state.value} onChange={this.onChangeHandler} />
          <button className="btn-add" onClick={this.addTodoHandler}>
            ADD
          </button>
        </form>
        {/* <hr></hr> */}
        <TodoList items={this.state.items} />
      </div>
    );
  }
}
class TodoList extends React.Component {
  render() {
    return (
      <div>
        <ul className="ul-list">
          {this.props.items.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    );
  }
}
export default TodoForm;
