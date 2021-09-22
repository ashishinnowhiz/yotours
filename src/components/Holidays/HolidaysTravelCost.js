import React from 'react'
import CarImg from '../../images/car.svg'
import { isArray, getCostFromStr } from '../../helpers/Utils'
import { Container } from 'reactstrap'

const holidaysTravelCost = ({ travelCost, cityName }) => {
  return isArray(travelCost) ? (
    <section className='py-50'>
      <Container fluid={true}>
        <h2 className='mb-4'>Travel costs in {cityName}</h2>
        <div className='table-responsive table-cost'>
          <table className='table table-borderless'>
            <thead>
              <tr>
                <th></th>
                <th>
                  <img src={CarImg} alt='' />
                  <p>BAGPACKER</p>
                </th>
                <th>
                  <img src={CarImg} alt='' />
                  <p>MID-RANGE</p>
                </th>
                <th>
                  <img src={CarImg} alt='' />
                  <p>LUXURY</p>
                </th>
              </tr>
            </thead>
            <tbody>
              {isArray(travelCost) &&
                travelCost.map((cost) => {
                  let prices =
                    (cost.description !== '' &&
                      getCostFromStr(cost.description)) ||
                    null
                  return (
                    <tr key={cost.id}>
                      <td>{cost.sub_category}</td>
                      <td>Rs. {prices && prices[0]}</td>
                      <td>Rs. {prices && prices[1]}</td>
                      <td>Rs. {prices && prices[2]}</td>
                    </tr>
                  )
                })}
            </tbody>
          </table>
        </div>
      </Container>
    </section>
  ) : null
}

export default holidaysTravelCost
