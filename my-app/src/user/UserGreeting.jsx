import props from 'prop-types';
function UserGreeting(props) {
    if (props.isLoggedIn) {
      return <h1>Welcome back!{props.userName}</h1>;
    }
    return <h1>Please sign up.{props.userName}</h1>;
  }

  UserGreeting.propTypes = {
    isLoggedIn: props.bool,
    userName: props.string
  }
UserGreeting.defaultProps = {
    isLoggedIn: false,
    userName: "Guest"
  }

  UserGreeting.propTypes = {
    isLoggedIn: true,
    userName: "michal"
  }

  export default UserGreeting;