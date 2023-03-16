import React from 'react'
import ContactHero from '../../components/contactComponent/ContactHero'
import Message from '../../components/contactComponent/massage'
import Map from './Map'

const Contacts = () => {
  return (
    <div>
      <ContactHero/>
      <Message/>
      <Map/>
    </div>
  )
}

export default Contacts