import React, { Fragment , Component } from 'react';
import Notifications from '../Notifications/Notifications';
import Header from '../Header/Header';
import Login from '../Login/Login';
import Footer from '../Footer/Footer';
import CourseList from '../CourseList/CourseList';
import BodySection from '../BodySection/BodySection';
import BodySectionWithMarginBottom from '../BodySection/BodySectionWithMarginBottom';
import { StyleSheet, css } from 'aphrodite';



const notificationsList = [
  { id: 1, type: "default", value: "New course available" },
  { id: 2, type: "urgent", value: "New resume available" },
  { id: 3, type: "urgent", html: { __html: "<strong>Urgent requirement</strong> - complete by EOD" } },
];

const coursesList = [
  { id: 1, name: "ES6", credit: 60 },
  { id: 2, name: "Webpack", credit: 20 },
  { id: 3, name: "React", credit: 40 },
];

class App extends Component {

  constructor(props) {
    super(props);
    this.handleKeyDown = this.handleKeyDown.bind(this);
  }
  
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown(event) {
    const { logOut } = this.props;
    if (event.ctrlKey && event.key === 'h') {
      alert('Logging you out');
      logOut();
    }
  }

  render() {
    const isLoggedIn = false;

  return (
    <Fragment>
        <div className={css(styles.notifications)}>
        <Notifications notifications={notificationsList} displayDrawer={true} />
      </div>
      <Header />
      <div className={css(styles.bodyContent)}>
      {isLoggedIn ? (
          <BodySectionWithMarginBottom title="Course list">
          <CourseList courses={coursesList} />
          </BodySectionWithMarginBottom>
        ) : (
          <BodySectionWithMarginBottom title="Log in to continue">
          <Login />
        </BodySectionWithMarginBottom>
        )}
        <BodySection title="News from the School">
          <p>Holberton School News goes here</p>
        </BodySection>
      </div>
      <Footer />
    </Fragment>
  );
  }
}

App.defaultProps = {
  logOut: () => {},
};


const styles = StyleSheet.create({
  notifications: {
    border: '3px dotted #ff0000',
    padding: '10px',
    margin: '10px 0',
  },
  bodyContent: {
    marginTop: '20px',
  },
  header: {
    display: 'flex',
    alignItems: 'center',
  },
  logo: {
    marginRight: '10px',
  },
  headerTitle: {
    color: '#e1003c',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
    marginTop: '20px',
  },
  formGroup: {
    display: 'flex',
    flexDirection: 'column',
  },
  button: {
    padding: '10px',
    backgroundColor: '#007bff',
    color: 'white',
    border: 'none',
    cursor: 'pointer',
  },
  buttonHover: {
    backgroundColor: '#0056b3',
  },
  footer: {
    textAlign: 'center',
    marginTop: '50px',
    fontSize: '12px',
    color: 'gray',
    position: 'fixed',
    bottom: 0,
    left: 0,
    width: '100%',
    padding: '10px 0',
  },
});


export default App;

