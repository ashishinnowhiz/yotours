import React, { Component } from 'react';
import Header from '../../components/Header/Header';
import { Container, Button} from 'reactstrap';
import SearchResultCard from '../../components/Card/SearchResultCard';
import SearchResultBottom from '../../components/Menu/SearchResultBottom';
class SearchResults extends Component {
  render() {
    return (
      <>
        <Header />
        <section className="header-margin pt-4 pb-5 mb-4">
          <Container fluid={true}>
            <div className="breadcrumb black px-0 mb-5">
              <div className="pt-2 mr-3">
                <Button color="nothing">&larr;</Button>
              </div>
              <h2>Search Results - Holiday plans in India</h2>
            </div>
          </Container>
          <div className="search-result-fixed">
            <Container fluid={true}>
            </Container>
          </div>
          <Container fluid={true}>
            <SearchResultCard />
            <SearchResultCard />
            <SearchResultCard />
            <SearchResultCard />
          </Container>
          <SearchResultBottom className="fixed-bottom" />
        </section>
      </>
    )
  }
}


export default {
  component: SearchResults
}
