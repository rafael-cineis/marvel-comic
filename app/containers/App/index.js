/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 */

import React from 'react'
import { Switch, Route } from 'react-router-dom'

import ComicDetailsPage from 'containers/ComicDetailsPage'
import ComicsListPage from 'containers/ComicsListPage'
import Footer from 'components/Footer'
import Header from 'components/Header'
import NotFoundPage from 'containers/NotFoundPage/Loadable'

import ContentWrapper from 'components/ContentWrapper'
import GlobalStyle from '../../global-styles'

import { AppWrapper } from './styles'
import { COMIC_DETAILS_PATH } from './urls'

export default function App() {
  return (
    <AppWrapper>
      <Header />

      <ContentWrapper main>
        <Switch>
          <Route exact path="/" component={ComicsListPage} />
          <Route path={COMIC_DETAILS_PATH} component={ComicDetailsPage} />
          <Route component={NotFoundPage} />
        </Switch>
      </ContentWrapper>

      <Footer />

      <GlobalStyle />
    </AppWrapper>
  )
}
