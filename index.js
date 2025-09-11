const Notification = props => {
  const {heading} = props
  return <h1 className='message'> {heading}</h1>
}
ReactDom.render(
  <Notification name='Notifications' />,
  document.getElementById('root'),
)

const element = (
  <div>
    <p className={first}>
      Information message{' '}
      <img src='https://assets.ccbp.in/frontend/react-js/primary-icon-img.png' />
      {'first-image '}
    </p>
    <p className={second}>
      success message{' '}
      <img src='https://assets.ccbp.in/frontend/react-js/success-icon-img.png' />
      {'second-image '}
    </p>
    <p className={third}>
      warning message{' '}
      <img src='https://assets.ccbp.in/frontend/react-js/warning-icon-img.png' />
      {'third-image '}
    </p>
    <p className={four}>
      danger message{' '}
      <img src='https://assets.ccbp.in/frontend/react-js/danger-icon-img.png' />
      {' four-image'}
    </p>
  </div>
)

ReactDOM.render(element, document.getElementById('root'))
