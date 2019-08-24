import React from 'react'
import PropTypes from 'prop-types'
import Ionicon from 'react-ionicons'


const CreateBtn = ({onCreateCLick}) => (
  <button
  className="btn btn-primary btn-lg btn-block"
  onClick={(e) => {onCreateCLick()}}
  style={{textAlign:'center'}}
  >
  <Ionicon
  className="rounded-circle"
  fontSize="20px"
  color="#fff"
  icon="ios-add-circle"
  
  />
  
  记一笔
  
  </button>
)

CreateBtn.propTypes = {
  onClick: PropTypes.func.isRequired
}

export default CreateBtn