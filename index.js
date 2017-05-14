//Code React element here

const meInReact =
  React.createElement('div', { className: 'me' },
    [
      React.createElement('h1', { className: 'Title'}, 'An Awesome Person'),
      React.createElement('p', {}, 'Who is learning React'),
      React.createElement('ul', { className: 'interests'},
        [
            React.createElement('li', {}, 'JavaScript'),
            React.createElement('li', {}, 'React'),
            React.createElement('li', {}, 'Movies'),
            React.createElement('li', {}, 'Ice cream')
        ]), //ends four children of 'interests'
    ] //ends three children of 'me'
  ); //ends className: 'me'

ReactDOM.render(meInReact, document.getElementById('main'));
