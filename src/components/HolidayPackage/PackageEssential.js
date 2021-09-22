import React from 'react'
import { Button, UncontrolledCollapse } from 'reactstrap'
import { Container, Row, Col } from 'reactstrap'
import { isArray } from '../../helpers/Utils'
import WithUseIO from '../../HOC/WithUseIO'

const PackageEssential = ({ data, staticImg, lazyClassName }) => {
  return (
    <div className='collapse-con'>
      <Button color='nothing' id='toggler6'>
        Package Essentials
      </Button>
      <UncontrolledCollapse toggler='#toggler6'>
        <div className='collapse-body'>
          <Container fluid={true}>
            <Row>
              {isArray(data) &&
                data.map((pack, idx) => (
                  <Col key={idx} md='6'>
                    <img
                      className={'img-fluid ' + lazyClassName}
                      data-srcset={pack.image || staticImg}
                      data-src={pack.image || staticImg}
                      src={staticImg}
                      alt=''
                    />
                    <p>{pack.title}</p>
                    <p>{pack.description}</p>
                  </Col>
                ))}
            </Row>
          </Container>
        </div>
      </UncontrolledCollapse>
    </div>
  )
}

export default WithUseIO(PackageEssential)
