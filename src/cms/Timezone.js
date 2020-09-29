// import libs
import React, { Component } from 'react'

// import css
import { css } from '@emotion/core'

// import components
import TimezoneSelect from 'react-timezone-select'

export class Timezone extends Component {

  state = {
    timezone: {}
  }

  handleChange = (tz) => {
    this.setState({ timezone: tz })
    this.props.onChange(tz)
  }

  componentDidMount = () => {
    if (this.props.value) {
      const valueTimezone = {
        value: this.props.value.get('value'),
        label: this.props.value.get('label')
      }
      this.setState({ timezone: valueTimezone })  
    }
  }

  render = () => {
    return (
      <TimezoneSelect
        className={this.props.classNameWrapper}
        css={css`
          z-index: 100;
        `}
        value={this.state.timezone}
        onChange={tz => this.handleChange(tz)}
        id={this.props.forID}
      />
    )
  }
}

