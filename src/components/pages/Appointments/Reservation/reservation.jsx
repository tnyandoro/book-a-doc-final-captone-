import react, { componet } from 'react';
import Button from 'react-bootstrap/Button';

export class Reservation extends Component {
  render() {
    return (
      <div className="mt-5 d-flex flex-column justify-content-center">
        <h3>Book Doctor.....</h3>
        <Button variant="primary">Book now</Button>
      </div>
    );
  }
}
