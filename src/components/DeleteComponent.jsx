import React, { Component } from "react";
import axios from "axios";

class DeleteComponent extends Component {
  state = {
    title: "",
    isComponent: false,
  };

  render() {
    return (
      <div className="container">
        <h1>待辦事項清單 - 刪除</h1>

        <hr />
        <div>
          <dl className="row">
            <dt className="col-sm-2">項目名稱</dt>
            <dd className="col-sm-10"> {this.state.title} </dd>
            <dt className="col-sm-2">是否已完工</dt>
            <dd className="col-sm-10">
              <input
                className="check-box"
                disabled="disabled"
                type="checkbox"
                checked={this.state.iscomponent}
              />
            </dd>
          </dl>

          <hr />
          <h3>確定要刪除這筆資料嗎?</h3>

          <form>
            <input type="hidden" id="TodoItemId" name="TodoItemId" value="1" />
            <input
              type="button"
              value="確定"
              className="btn btn-outline-danger"
              onClick={this.DeleteButton_Click}
            />{" "}
            |
            <a href="/Todo/Index" className="btn btn-outline-info">
              取消
            </a>
          </form>
        </div>
      </div>
    );
  }

  componentDidMount = async () => {
    const url = "http://localhost:8000/todo/item/" + this.props.match.params.id;
    const httpResult = await axios.get(url);
    console.log(httpResult);
    this.setState({
        title: httpResult.data.title,
        isComponent: httpResult.data.iscomponent
    })
  };

  DeleteButton_Click = async () => {
    const url = "http://localhost:8000/todo/delete/" + this.props.match.params.id;
    const httpResult = await axios.delete(url);
    window.location = "/Todo/Index";
    
  }
}

export default DeleteComponent;
