import React from 'react'
class ProfilePage extends React.Component {
    showMessage = () => {
      console.log('haha', this);
    }
    handleClick = () => setTimeout(this.showMessage, 3000);
   
    render() {
      return <button onClick={this.showMessage}>Follow</button>;
    }
  }

  export default ProfilePage;