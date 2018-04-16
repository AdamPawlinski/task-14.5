var ContactForm = React.createCLass({
  propTypes: {
    contact: React.PropsTypes.object.isRequired,
  },
  render: function() {
    return (
      React.createElement('form', {className: 'contactForm'}),
      React.createElement('input', {
        type: 'text',
        placeholder: 'Name',
        value: this.props.contact.firstName,
      }),
      React.createElement('input', {
        type: 'text',
        placeholder: 'Last name',
        value: this.props.contact.lastName,
      }),
      React.createElement('input', {
        type: 'text',
        placeholder: 'email',
        value: this.props.contact.email,
      }),
      React.createElement('button', {type: 'submit'}, 'Add contact')
    )
  }
})
