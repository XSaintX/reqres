import axios from "axios";


export const login = user => {
  return axios
    .post(
      "https://reqres.in/api/login",
      {
        email: user.email,
        password: user.password
      },
      {
        headers: { "Content-Type": "application/json" }
      }
    )
    .then(response => {
      localStorage.setItem("usertoken", JSON.stringify(response.data.token));
      return JSON.stringify(response.data.token);
    })
    .catch(err => {
      console.log(err);
    });
};

export const getList = n => {
  return axios
    .get(`https://reqres.in/api/users?page=${n}`, {
      headers: { Authorization: `Bearer ${localStorage.usertoken}` }
    })
    .then(response => {
      return response.data;
    })
    .catch(err => {
      console.log(err);
    });
};

export const updateUser = ({ id, firstName }) => {
  return axios
    .patch(
      `https://reqres.in/api/users/${id}`,
      { firstName },
      {
        headers: { "Content-Type": "application/json" }
      }
    )
    .then(res => {
      return res.data;
    })
    .catch(err => console.log(err));
}

export const deleteUser = (id) => {
  return axios
    .delete(
      `https://reqres.in/api/users/${id}`,
      {
        headers: { "Content-Type": "application/json" }
      }
    )
    .then(res => {
      return res.data;
    })
    .catch(err => console.log('error:' + err));
}