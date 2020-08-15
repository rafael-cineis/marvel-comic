/**
 *
 * ComicCard
 *
 */

import React from 'react'
import PropTypes from 'prop-types'

import Text from 'components/Text'

import { Wrapper } from './styles'

function ComicCard({
  creators,
  title,
  thumbnail,
}) {
  const creatorsName = creators.items.map(creator => creator.name).join(', ')

  return (
    <Wrapper>
      <img
        src={`${thumbnail.path}/portrait_uncanny.${thumbnail.extension}`}
        alt={title}
      />
      <Text bold medium>{title}</Text>
      <Text small>
        {creatorsName}
      </Text>
    </Wrapper>
  )
}

ComicCard.propTypes = {
  title: PropTypes.string.isRequired,
  thumbnail: PropTypes.object.isRequired,
  creators: PropTypes.shape({
    items: PropTypes.array,
  }).isRequired,
}

export default ComicCard
