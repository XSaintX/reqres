import React, { Component } from "react";
import { getList, updateUser, deleteUser } from "./UserFunctions";
import { Alert, Button } from 'react-bootstrap';

class List extends Component {
  state = {
    list: {},
    pageNumber: 0,
    responsedelete: ''
  };

  componentDidMount() {
    this.handleGetList();
  }

  componentDidUpdate(_, prevState) {
    const { pageNumber } = this.state;
    if (pageNumber !== prevState.pageNumber)
      this.handleGetList();
  }

  handleGetList = async () => {
    const { pageNumber } = this.state;
    return await getList(pageNumber).then(res => {
      this.setState({
        list: res
      });
    });
  };

  handlePreviousPage = () =>
    this.setState((
      { pageNumber }) => ({
        pageNumber: pageNumber > 1 ? pageNumber - 1 : pageNumber
      })
    );

  handleNextPage = () =>
    this.setState((
      { pageNumber }) =>
      ({ pageNumber: pageNumber + 1 })
    );

  handleEdit = user => () => {
    return updateUser(user).then(res => console.log('res: ', res)).catch(err => console.log(err));
  }


  handleDelete = userId => () => {

    const { list: { data } } = this.state;
    const newList = data.filter(user => user.id !== userId);
    this.setState(({ list }) => ({
      list: {
        ...list,
        data: newList
      }
    }))
    return deleteUser(userId).then(res => console.log('res: ', res)).catch(err => console.log('error2: ' + err));
  };

  render() {
    const { list: { data } } = this.state;
    const { userName } = this.props;

    return (
      <div>
        {this.state.responsedelete !== '' && <Alert variant="info">{this.state.responsedelete}</Alert>}
        <table className="table-bordered text-center">
          <thead className="thead-dark">
            <tr>
              <th>id</th>
              <th>email</th>
              <th>first name</th>
              <th>last name</th>
              <th>avatar</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {data &&
              data.map(({ id, email, first_name, last_name, avatar }) => (
                <tr key={id}>
                  <td>{id}</td>
                  <td>{email}</td>
                  <td>{first_name}</td>
                  <td>{last_name}</td>
                  <td>
                    <img src={avatar} alt="avatar" />
                  </td>
                  <td>
                    <Button variant="info" onClick={this.handleEdit({
                      id,
                      firstName: userName
                    })}>Edit</Button>
                    <Button variant="danger" onClick={this.handleDelete(id)}>Delete</Button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
        <div>
          <button onClick={this.handlePreviousPage}>{"<"}</button>
          <button onClick={this.handleNextPage}>{">"}</button>
        </div>
      </div>
    );
  }
}

export default List;
