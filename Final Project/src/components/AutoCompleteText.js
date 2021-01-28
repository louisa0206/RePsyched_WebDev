import React from 'react';
// import { Link } from "react-router-dom"; when <Link to=""> implementiert ist


export default class AutoCompleteText extends React.Component {
    constructor (props) {
        super(props);
        this.items= [
            "Clothes",
            "Oil",
            "Glassbottles and jars",
            "Glassbottles and jars with residue - Oil",
            "Glassbottles and jars with residue - Food",
            "Glassbottles and jars with residue - Cosmetics",
            "Glassbottles and jars with residue - Cleaning products",
            "Yogurt container",
            "Cables",
            "Videotapes",
            "Garden soil",
            "Gasoline",
            "Gas bottles",
            "Grass cuttings",
            "Gift wrap",
            "Greaseproof paper",
        ];
        this.state = {
          suggestions: [],
          text: "",
        };
    }
  
    onTextChanged = (e) => {
      const value = e.target.value;
      let suggestions = [];
      if (value.length > 0) {
        const regex = new RegExp(`^${value}`, "i");
        suggestions = this.items.sort().filter (v => regex.test(v));
      }
      this.setState (() => ({suggestions, text: value }));
    } 
  
  
  suggestionSelected (value) {
    this.setState (() => ({
      text: value,
      suggestions: [],
    }))
  }
  
  renderSuggestions () {
    const {suggestions} = this.state;
    if (suggestions.length === 0) {
      return null;
    }
    return (
        <ul>
        {suggestions.map((item) => <li onClick= {() => this.suggestionSelected(item)}>{item}</li>)}
        </ul>
    );
  }
  
    render () {
        const {text} = this.state;
        return (
            <div className="AutoCompleteText">
              <input value={text} onChange={this.onTextChanged} type="text" placeholder="Search for specific item... "/>
              {this.renderSuggestions()}
            </div>
        )
    }
  }


