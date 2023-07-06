import React, { Component } from "react";
import axios from "axios";

class CreateComponent extends Component {
  state = {
    title: "",
    isComplete: 0,
  };

  render() {
    return (
      <div className="container">
        <h1>待辦事項清單 - 新增</h1>
        <hr />
        <div className="row">
          <div className="col-md-4">
            <form>
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
                  onChange={(event) => {
                    this.setState({ title: event.target.value });
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
                    value="1"
                    checked={this.state.isComplete}
                    onChange={(event) => {
                      this.setState({ isComplete: event.target.checked });
                    }}
                  />{" "}
                  是否已完工
                </label>
              </div>
              <div className="form-group">
                <input
                  type="button"
                  value="確定"
                  className="btn btn-outline-primary"
                  onClick={this.submitButton_Click}
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

  submitButton_Click = async () => {
    const dataToServer = {
      title: this.state.title,
      isComplete: this.state.isComplete,
    };

    // const httpResult = await axios.post("http://localhost:8000/todo/create" , dataToServer );

    // Server 需要 JSON 格式的資料
    const httpResult = await axios.post(
      "http://localhost:8000/todo/create",
      JSON.stringify(dataToServer),
      {
        headers: {
          "content-type": "application/json",
        },
      }
    );
    
    window.location = "/Todo/Index";
  };
}

export default CreateComponent;
