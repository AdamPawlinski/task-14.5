var Contact = React.createClass({
  propTypes: {
    item: React.propTypes.object.isReaquired,
  },
  render: function() {
    return (
      React.createElement('div', {className: 'contactItem'},
        React.createElement('img', {
          className: 'contactImage',
          src: 'http://icons.veryicon.com/ico/System/100%20Flat%20Vol.%202/contacts.ico',
        }),
        React.createElement('p', {className: 'contactLabel'}, 'Name: ' + this.props.item.firstName),
        React.createElement('p', {className: 'contactLabel'}, 'Last Name: ' + this.props.item.LastName),
        React.createElement('a', {className: 'contactEmail', href: 'mailto:' + this.props.item.email}, this.props.item.email),        
      )
    )
  }
})
