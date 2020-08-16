/**
 *
 * ComicDetails
 *
 */

import React from 'react'
import PropTypes from 'prop-types'
import isEmpty from 'lodash/isEmpty'
import { FormattedMessage, injectIntl } from 'react-intl'

import Text from 'components/Text'
import TextWithLabel from 'components/TextWithLabel'

import {
  Content,
  InfoContainer,
  Title,
  MarvelLink,
} from './styles'
import messages from './messages'

export const ComicDetails = ({ comic, intl }) => {
  if (isEmpty(comic)) {
    return null
  }

  const {
    urls,
    thumbnail,
    title,
    creators,
    dates,
    characters,
    description,
  } = comic

  const renderMarvelLink = () => {
    const urlObj = Array.isArray(urls) && urls.length
      ? urls.find(url => url.type === 'details') || urls[0]
      : null
    const url = urlObj ? urlObj.url : 'http://marvel.com'

    return (
      <div>
        <MarvelLink
          href={url}
          target="_blank"
        >
          <FormattedMessage {...messages.checkMoreDetailsAtMarvelOfficialPage} />
        </MarvelLink>
      </div>
    )
  }

  const dateObjFound = dates.find(date => date.type === 'onsaleDate')
  const publishedDate = dateObjFound
    ? intl.formatDate(
      dateObjFound.date,
      {
        year: 'numeric',
        month: 'long',
        day: '2-digit',
      }
    ) : ''

  return (
    <Content>
      <img
        src={`${thumbnail.path}/portrait_uncanny.${thumbnail.extension}`}
        alt={title}
      />
      <InfoContainer>
        <div>
          <Title>
            {title}
          </Title>
          <Text small>
            {creators.items.map(creator => creator.name).join(', ')}
          </Text>
        </div>
        <TextWithLabel
          label={messages.publishedDate}
          text={publishedDate}
        />
        <TextWithLabel
          label={messages.characters}
          text={characters.items.map(({ name }) => name).join(', ')}
        />
        <Text className="description" unavailableInfo={!description}>
          {description || (
            <FormattedMessage {...messages.noDescriptionAvailable} />
          )}
        </Text>
        {renderMarvelLink()}
      </InfoContainer>
    </Content>
  )
}

ComicDetails.propTypes = {
  comic: PropTypes.object.isRequired,
  intl: PropTypes.object.isRequired,
}

export default injectIntl(ComicDetails)
