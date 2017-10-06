import React from 'react'
import { Divider, Image } from 'semantic-ui-react'

export default () => {
  let rows = [];
  const numrows = 20;
  for (var i = 0; i < numrows; i++) {
    rows.push(
      <div>
        <Image src='https://react.semantic-ui.com/assets/images/wireframe/media-paragraph.png' />
        <Divider />
      </div>
    );
  }

  return (
    <div>
      {rows}
    </div>
  )
}
