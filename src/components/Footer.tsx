import { MDBFooter } from 'mdb-react-ui-kit';

export function Footer() {
  return (
    <MDBFooter className='text-center' color='white' bgColor='dark'>
      <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        © 2023 Copyright Javier Garcia
      </div>
    </MDBFooter>
  );
}