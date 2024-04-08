import  Link from 'next/link';
import React from 'react'

const ContactButton = () => {
  return (
    <>
      <Link
            href=" https://forms.gle/omsC1Zm3tUs9B317A"
            className="bg-green-400 px-5 py-3 rounded-full shadow-md active:shadow-none
            hover:bg-green-300  transition duration-500 hover:scale-110"
          >
            Contact
        </Link>
    </>
  )
}

export default ContactButton