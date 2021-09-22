import React from 'react';
import { Button } from 'reactstrap';

class GoToTop extends React.Component {
  render() {
    return (
      <div className="go-to-top">
        <Button color="nothing">&#8679; Top</Button>
      </div>
    )
  }
}
export default GoToTop;