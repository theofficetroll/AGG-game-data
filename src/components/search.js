import React from 'react';

const Search = (props) => {
  return (
    <div className='searchBar'>
      <form onSubmit={this.props.submitHandler}>
        <label>
          <input
            type='search'
            value={this.props.input}
            onChange={this.props.inputHandler}
            placeholder='Search'
          />
        </label>
      </form>
    </div>
  )
};

export default Search;
