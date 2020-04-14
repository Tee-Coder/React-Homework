import React from 'react'
import { Button, Header, Image, Modal } from 'semantic-ui-react'

const TheModalForm= () => (
  <Modal trigger={<Button>Show Modal</Button>}>
    <Modal.Header>Welcome Tiwalolu!!!</Modal.Header>
    <Modal.Content image>
      <Image wrapped size='medium' src='https://react.semantic-ui.com/images/avatar/large/rachel.png' />
      <Modal.Description>
        <Header>User Info</Header>
        <p>First Name: Tiwalolu</p>
        <p>Last Name: Abubakar</p>
        <p>Email:TeeA@yahoo.com</p>
        <p>Phone Number: 154-645-1234</p>
        <p>Address: 16174 Anthony Henday</p>
        <p>City: Toronto</p>
        <p>Province: Ontario</p>
        <p>Country: Canada</p>
      </Modal.Description>
    </Modal.Content>
  </Modal>
)

export default TheModalForm