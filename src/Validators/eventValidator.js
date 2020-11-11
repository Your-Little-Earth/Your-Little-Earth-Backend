var EventValidators = {
    name: {
      title: 'Name',
      validate: [{
        validator: 'isLength',
        arguments: [1, 255],
        message: '{TITLE} should be minimum 1 charachter and maximum 255 characters long.'
      }]
    },
    email: {
      title: 'Email',
      validate: [{
        validator: 'isLength',
        arguments: [20, 255],
        message: '{TITLE} should be minimum 20 charachter and maximum 255 characters long.'
      },
      {
        validator: 'isEmail',
        message: '{TITLE} must be valid'
      }]
    },
    password: {
      title: 'Password',
      validate: [{
        validator: 'isLength',
        arguments: [8, 255],
        message: '{TITLE} should be minimum 8 charachter and maximum 255 characters long.'
      }]
    }
  };
