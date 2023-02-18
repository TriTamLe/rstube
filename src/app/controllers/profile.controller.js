class ProfileController {
  editInfo() {
    //SetUp pop up
  }

  logOut() {
    localStorage.clear();
    window.location.pathname = '/';
    console.log('logged out!');
  }
}

export default new ProfileController();
