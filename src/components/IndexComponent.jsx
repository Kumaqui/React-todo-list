import React, { Component } from "react";
import axios from "axios";

class IndexComponent extends Component {
  state = {
    todoList: [
      {todoTableId: "1", title: "項目1", isComplete: 0},
      {todoTableId: "2", title: "項目2", isComplete: 1},
      {todoTableId: "3", title: "項目3", isComplete: 0}
    ]
  };
  render() {
    return (
      <div className="container">
        <h1>
          待辦事項清單
          <a
            href="/Todo/Create"
            className="btn btn-outline-success btn-md float-right"
          >
            新增
          </a>
        </h1>

        <table className="table table-striped table-hover">
          <thead>
            <tr>
              <th>項目名稱</th>
              <th>是否已完工</th>
              <th>&nbsp;</th>
            </tr>
          </thead>
          <tbody>
            {this.state.todoList.map((todoItem) => (
              <tr key={todoItem.todoTableId}>
                <td>{todoItem.title}</td>
                <td>
                  <input
                    className="check-box"
                    disabled="disabled"
                    type="checkbox"
                    checked={todoItem.isComplete}
                  />
                </td>
                <td>
                  <span className="float-right">
                    <a
                      href={"/Todo/Edit/" + todoItem.todoTableId}
                      className="btn btn-outline-primary btn-sm"
                    >
                      編輯
                    </a>{" "}
                    |
                    <a
                      href={`/Todo/Delete/${todoItem.todoTableId}`}
                      className="btn btn-outline-danger btn-sm"
                    >
                      刪除
                    </a>
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }

  // 抓到資料後改變刷新
  componentDidMount = async () => {
    const httpResult = await axios.get("http://localhost:8000/todo/list");
    const tidoListFromServer = httpResult.data;
    this.setState({
      todoList: tidoListFromServer,
    });
  };
}

export default IndexComponent;
