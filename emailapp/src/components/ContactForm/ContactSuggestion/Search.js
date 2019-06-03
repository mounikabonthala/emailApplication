import React, { Component } from 'react'
import { FaSearch } from 'react-icons/fa';

import Suggestions from './Suggestions';
import './Search.css';

const data = {
  error: false,
  query: "whit",
  results:[
      {
        Artist_ref_id: "35827",
        country_of_orgin: "United States of America",
        decade: "1980s",
        entity_type: "artist",
        gender: "Female",
        id: '1234-5e42343-e432432-432432',
        main_genre: "Pop",
        musicbrainz_id: "32312321321",
        name: "White Houston"
      },
      {
        Artist_ref_id: "35827",
        country_of_orgin: "United States of America",
        decade: "1980s",
        entity_type: "artist",
        gender: "Female",
        id: '1234-5e42343-e432432-432432',
        main_genre: "Pop",
        musicbrainz_id: "32312321321",
        name: "Robo Houston"
      },
      {
        Artist_ref_id: "35827",
        country_of_orgin: "United States of America",
        decade: "1980s",
        entity_type: "artist",
        gender: "Female",
        id: '1234-5e42343-e432432-432432',
        main_genre: "Pop",
        musicbrainz_id: "32312321321",
        name: "Avengers Houston"
      }
    ] 
  }

class Search extends Component {
  state = {
    query: '',
    results: []
  }

  getInfo = () => {
    // Call API
    // axios.get(`${API_URL}?api_key=${API_KEY}&prefix=${this.state.query}&limit=7`)
    //   .then(({ data }) => {
    //     this.setState({
    //       results: data.data
    //     })
    //   })

      this.setState({
        results: data.results
      })
  }

  handleInputChange = () => {
    this.setState({
      query: this.search.value
    }, () => {
      if(this.state.query.length ===0){
        this.setState({
          results: []
        })
      }
      if (this.state.query && this.state.query.length > 1) {
        if (this.state.query.length % 2 === 0) {
          this.getInfo()
        }
      } else if (!this.state.query) {
      }
    })
  }

  render() {
    return (
      <form>
        <div className="searchContainer">
          <input
            placeholder="[No Value]"
            ref={input => this.search = input}
            onChange={this.handleInputChange}
            className="searchInputField"
          />
          <div className="searchIcon">
            <FaSearch/>
          </div>
        </div>
        <Suggestions results={this.state.results} />
      </form>
    )
  }
}

export default Search