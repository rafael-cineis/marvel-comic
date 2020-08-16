/**
 *
 * TextWithLabel
 *
 */

import React from 'react'
import { FormattedMessage } from 'react-intl'
import PropTypes from 'prop-types'

import Text from 'components/Text'

import messages from './messages'

function TextWithLabel({ label, text }) {
  return (
    <div>
      <Text bold big>
        <FormattedMessage {...label} />
      </Text>
      <Text medium unavailableInfo={!text}>
        {text || <FormattedMessage {...messages.informationNotAvailable} />}
      </Text>
    </div>
  )
}

TextWithLabel.propTypes = {
  label: PropTypes.shape({
    id: PropTypes.string.isRequired,
    defaultMessage: PropTypes.string.isRequired,
  }).isRequired,
  text: PropTypes.string,
}

export default TextWithLabel
