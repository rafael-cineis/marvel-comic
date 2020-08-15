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

import ComicsListPage from 'containers/ComicsListPage'
import Footer from 'components/Footer'
import NotFoundPage from 'containers/NotFoundPage/Loadable'

import GlobalStyle from '../../global-styles'

import { AppWrapper } from './styles'

export default function App() {
  return (
    <AppWrapper>
      {/* Placeholder for Header */}
      <div></div>
      <Switch>
        <Route exact path="/" component={ComicsListPage} />
        <Route component={NotFoundPage} />
      </Switch>
      <Footer />
      <GlobalStyle />
    </AppWrapper>
  )
}
