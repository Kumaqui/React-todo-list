import React, { Component } from "react";
import axios from "axios";

class EditComponent extends Component {
  state = {
    todoTableId: "",
    title: "",
    isComplete: false,
  };
  render() {
    return (
      <div className="container">
        <h1>待辦事項清單 - 修改</h1>
        <hr />
        <div className="row">
          <div className="col-md-4">
            <form action="/Todo/Edit" method="post">
              <input
                type="hidden"
                id="TodoItemId"
                name="TodoItemId"
                value="1"
              />
              <div className="form-group">
                <label className="control-label" htmlFor="Name">
                  項目名稱
                </label>
                <input
                  className="form-control"
                  type="text"
                  id="Name"
                  name="Name"
                  value={this.state.title}
                  onChange={(e) => {
                    this.setState({ title: e.target.value });
                  }}
                />
              </div>
              <div className="form-group form-check">
                <label className="form-check-label">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="IsComplete"
                    name="IsComplete"
                    value="true"
                    checked={this.state.isComplete}
                    onChange={(e) => {
                      this.setState({ isComplete: e.target.checked });
                    }}
                  />{" "}
                  是否已完工
                </label>
              </div>
              <div className="form-group">
                <input
                  type="submit"
                  value="確定"
                  className="btn btn-outline-primary"
                  onClick={this.EditButton_Click}
                />{" "}
                |
                <a href="/Todo/Index" className="btn btn-outline-info">
                  取消
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }

  componentDidMount = async () => {
    const url = "http://localhost:8000/todo/item/" + this.props.match.params.id;
    const httpResult = await axios.get(url);
    this.setState({
      todoTableId: httpResult.data.todoTableId,
      title: httpResult.data.title,
      isComplete: httpResult.data.isComplete,
    });
  };

  EditButton_Click = async () => {
    const dataToServer = {
      todoTableId: this.state.todoTableId,
      title: this.state.title,
      isComplete: this.state.isComplete,
    };

    const url = "http://localhost:8000/todo/item";
    const httpResult = await axios.put(url,dataToServer);
    window.location = "/Todo/Index";
  };
}

export default EditComponent;
