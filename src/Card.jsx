import React from 'react';
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn
} from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';

export default function Headar() {
  return (
    <div className='container'>
        <div className='row'>
        <MDBCard className='col-xl-3'>
      <MDBCardImage src='https://mdbootstrap.com/img/new/standard/nature/184.webp' position='top' alt='...' />
      <MDBCardBody>
        <MDBCardTitle>Card title</MDBCardTitle>
        <MDBCardText>
          Some quick example text to build on the card title and make up the bulk of the card's content.
        </MDBCardText>
        <MDBBtn>
        <Link className='text' to="/Maltipalcard">Button</Link>
        </MDBBtn>
      </MDBCardBody>
    </MDBCard>
    <MDBCard className='col-xl-3'>
      <MDBCardImage src='https://mdbootstrap.com/img/new/standard/nature/184.webp' position='top' alt='...' />
      <MDBCardBody>
        <MDBCardTitle>Card title</MDBCardTitle>
        <MDBCardText>
          Some quick example text to build on the card title and make up the bulk of the card's content.
        </MDBCardText>
        <MDBBtn>
        <Link className='text' to="/Maltipalcard">Button</Link>
        </MDBBtn>
      </MDBCardBody>
    </MDBCard>
    <MDBCard className='col-xl-3'>
      <MDBCardImage src='https://mdbootstrap.com/img/new/standard/nature/184.webp' position='top' alt='...' />
      <MDBCardBody>
        <MDBCardTitle>Card title</MDBCardTitle>
        <MDBCardText>
          Some quick example text to build on the card title and make up the bulk of the card's content.
        </MDBCardText>
        <MDBBtn>
        <Link className='text' to="/Maltipalcard">Button</Link>
        </MDBBtn>
      </MDBCardBody>
    </MDBCard>
    <MDBCard className='col-xl-3'>
      <MDBCardImage src='https://mdbootstrap.com/img/new/standard/nature/184.webp' position='top' alt='...' />
      <MDBCardBody>
        <MDBCardTitle>Card title</MDBCardTitle>
        <MDBCardText>
          Some quick example text to build on the card title and make up the bulk of the card's content.
        </MDBCardText>
        <MDBBtn>
        <Link className='text' to="/Maltipalcard">Button</Link>
        </MDBBtn>
      </MDBCardBody>
    </MDBCard>
        </div>
    </div>
  );
}