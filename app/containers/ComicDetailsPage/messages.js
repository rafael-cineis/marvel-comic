/*
 * ComicDetailsPage Messages
 *
 * This contains all the text for the ComicDetailsPage container.
 */

import { defineMessages } from 'react-intl'

export const scope = 'app.containers.ComicDetailsPage'

export default defineMessages({
  publishedDate: {
    id: `${scope}.publishedDate`,
    defaultMessage: 'Data de Publicação:',
  },
  characters: {
    id: `${scope}.characters`,
    defaultMessage: 'Personagens:',
  },
  noDescriptionAvailable: {
    id: `${scope}.noDescriptionAvailable`,
    defaultMessage: 'Descrição não disponível',
  },
  checkMoreDetailsAtMarvelOfficialPage: {
    id: `${scope}.checkMoreDetailsAtMarvel`,
    defaultMessage: 'Veja mais detalhes na página oficial da Marvel',
  },
})
