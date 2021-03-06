import React from 'react'
import PropTypes from 'prop-types'

const LogItemKapacitorError = ({logItem}) => (
  <div className="logs-table--row">
    <div className="logs-table--divider">
      <div className={`logs-table--level ${logItem.lvl}`} />
      <div className="logs-table--timestamp">{logItem.ts}</div>
    </div>
    <div className="logs-table--details">
      <div className="logs-table--service error">Kapacitor</div>
      <div className="logs-table--columns">
        <div className="logs-table--key-values error">ERROR: {logItem.msg}</div>
      </div>
    </div>
  </div>
)

const {shape, string} = PropTypes

LogItemKapacitorError.propTypes = {
  logItem: shape({
    lvl: string.isRequired,
    ts: string.isRequired,
    msg: string.isRequired,
  }),
}

export default LogItemKapacitorError
