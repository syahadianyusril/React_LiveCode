import createStore from "unistore";
import axios from "axios";

const initialState = {
  api_key: "",
  email: "",
  password: "",
  full_name: "",
  username: "",
  is_login: false,
  listNews: [],
};

export const store = createStore(initialState);

export const actions = store => ({
  setField: (state, e) => {
    return { [e.target.name]: e.target.value };
  },
  postSignout: state => {
    return { is_login: false };
  },
  postLogin: async state => {
    const data = {
      username: state.username,
      password: state.password
    };
    const self = this;
    await axios
      .post("https://syahadians.free.beeceptor.com/auth", data)
      .then(response => {
        if (response.data.hasOwnProperty("api_key")) {
          store.setState({
            api_key: response.data.api_key,
            is_login: true,
            full_name: state.username,
            email: state.email
          });
          console.log(state.username);
        }
      })
      .catch(function(error) {
        console.log(error);
      });
  },

  romanceMovies: async state => {
    const data = {
      listNews: state.listNews
    };
    await axios
      .get("https://api-todofancy.herokuapp.com/api/movies") 
      .then(
        function(response) {
          store.setState({ listNews: response.data.movies });
        }
      )
      .catch(function(error) {});
  },
  actionMovies: async state => {
    const data = {
      listNews: state.listNews
    };
    await axios
      .get("https://api-todofancy.herokuapp.com/api/movies") 
      .then(
        function(response) {
          store.setState({ listNews: response.data.movies });
        }
      )
      .catch(function(error) {});
  },
  fictionMovies: async state => {
    const data = {
      listNews: state.listNews
    };
    await axios
      .get("https://api-todofancy.herokuapp.com/api/movies") 
      .then(
        function(response) {
          store.setState({ listNews: response.data.movies });
        }
      )
      .catch(function(error) {});
  },
  comedyMovies: async state => {
    const data = {
      listNews: state.listNews
    };
    await axios
      .get("https://api-todofancy.herokuapp.com/api/movies") 
      .then(
        function(response) {
          store.setState({ listNews: response.data.movies });
        }
      )
      .catch(function(error) {});
  },

});
