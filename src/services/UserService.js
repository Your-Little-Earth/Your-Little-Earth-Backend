const postsArray = [
    {
      id: 1,
      title: 'React from scratch',
      content: 'In this article we will create a ToDo App in React from scratch.... etc.etc.etc.',
      author: 'Jakob Klamser'
    },
    {
      id: 2,
      title: 'Vanilla JavaScript Basics',
      content: 'Today we will discuss some basic JavaScript fundamentals like array manipulation, currying etc.',
      author: 'Jakob Klamser'
    },
    {
      id: 3,
      title: 'VS Code Extensions',
      content: 'I wanted to show you some of my favorite VS Code Extensions.... Bracket Pair Colorizer etc.etc.',
      author: 'Jakob Klamser'
    },
    {
      id: 4,
      title: 'ExpressJS REST API',
      content: 'Is this the current article?',
      author: 'Jakob Klamser'
    },
  ];

module.exports = {
    getAllUsers() {
        return postsArray;
    },
    getUserById(id) {
        return postsArray.filter(post => post.id == id);
    },
    createUser() {

    },
    deleteUser() {

    },
    updateUser() {

    }
}
