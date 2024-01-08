import React from 'react'
import PropTypes from 'prop-types'

const Blogs = ({props: {user,name}}) => {
  return (
    <div>Blogs</div>
  )
}

Blogs.propTypes = {
    user: PropTypes.number.isRequired
}

export default Blogs