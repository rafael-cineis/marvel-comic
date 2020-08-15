/**
 *
 * ComicCard
 *
 */

import React from 'react'
import PropTypes from 'prop-types'

import { COMIC_DETAILS_PATH } from 'containers/App/urls'
import StyledLink from 'components/StyledLink'
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
      <StyledLink
        to={COMIC_DETAILS_PATH}
        bold
        medium
      >
        <img
          src={`${thumbnail.path}/portrait_uncanny.${thumbnail.extension}`}
          alt={title}
        />
        {title}
      </StyledLink>
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
