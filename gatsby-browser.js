/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// import libs
import React from 'react'
import Provider from './src/components/Context/Provider'

export const wrapRootElement = ({ element }) => {

  return(
    <Provider>
      {element}
    </Provider>
  )
}