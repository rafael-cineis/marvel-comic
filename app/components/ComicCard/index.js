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
  id,
  creators,
  title,
  thumbnail,
}) {
  const creatorsName = creators.items.map(creator => creator.name).join(', ')
  const comicDetailsPath = COMIC_DETAILS_PATH.replace(':id', id)

  return (
    <Wrapper>
      <StyledLink
        to={comicDetailsPath}
        bold
        medium
        black
        noDecoration
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
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  thumbnail: PropTypes.object.isRequired,
  creators: PropTypes.shape({
    items: PropTypes.array,
  }).isRequired,
}

export default ComicCard
