import React, { Component } from "react";
import paginate from "paginate-array";
import styles from "./TyresList.module.scss";
import SearchBar from "./SearchBar";
import Header from "./Header";

export default class TyresList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      tyresData: [],
      size: 3,
      page: 1,
      currPage: null,
      searchText: "",
      filteredTyres: [],
    };
    this.previousPage = this.previousPage.bind(this);
    this.nextPage = this.nextPage.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  setSearchText = (event) => {
    const searchText = event.target.value.toUpperCase();
    this.setState({ ...this.state, searchText }, this.filterTyres);
  };

  filterTyres = () => {
    const { page, tyresData, searchText, size } = this.state;
    const filteredTyres = tyresData.filter((tyre) => {
      return tyre.brand.includes(searchText);
    });
    const currPage = paginate(filteredTyres, page, size);
    this.setState({ currPage });
  };

  componentDidMount() {
    fetch("http://localhost:5000/tyres")
      .then((response) => response.json())
      .then((data) => {
        const { page, size } = this.state;
        const currPage = paginate(data, page, size);
        this.setState({
          ...this.state,
          tyresData: data,
          filteredTyres: data,
          currPage,
        });
      });
  }

  previousPage() {
    const { page, size, filteredTyres } = this.state;
    if (page > 1) {
      const newPage = page - 1;
      const newCurrPage = paginate(filteredTyres, newPage, size);
      this.setState({
        ...this.state,
        page: newPage,
        currPage: newCurrPage,
      });
    }
  }
  nextPage() {
    const { currPage, page, size, filteredTyres } = this.state;
    if (page < currPage.totalPages) {
      const newPage = page + 1;
      const newCurrPage = paginate(filteredTyres, newPage, size);
      this.setState({ ...this.state, page: newPage, currPage: newCurrPage });
    }
  }
  handleChange(e) {
    const { value } = e.target;
    const { filteredTyres } = this.state;

    const newSize = +value;
    const newPage = 1;
    const newCurrPage = paginate(filteredTyres, newPage, newSize);

    this.setState({
      ...this.state,
      size: newSize,
      page: newPage,
      currPage: newCurrPage,
    });
  }

  render() {
    const { page, currPage } = this.state;
    return (
      <div className={styles.listContainer}>
        <Header />
        <div>
          <label name="size" className={styles.paginationNo}>
            Total Number of Results to display:
          </label>
          <select name="size" id="size" onChange={this.handleChange}>
            <option value="3">3</option>
            <option value="6">All</option>
          </select>
        </div>
        <div>
          <SearchBar
            searchText={this.state.searchText}
            setSearchText={this.setSearchText}
          />
        </div>
        {currPage && (
          <div className={styles.resultsContainer}>
            {currPage.data.map((filteredTyres) => (
              <div
                key={filteredTyres._id}
                id={filteredTyres._id}
                className={styles.resultBox}
              >
                <p className={styles.tyreBrand}>{filteredTyres.brand}</p>
                <div>
                  <img
                    className={styles.tyrePhoto}
                    src="/images/Tyre.jpg"
                    alt="tyres"
                  />
                </div>
                <p>Tyre Size (inches): {filteredTyres.size}</p>
              </div>
            ))}
          </div>
        )}

        <div className={styles.buttonsAndPageNo}>
          <div className={styles.buttons}>
            <button className={styles.pageButton} onClick={this.previousPage}>
              Previous Page
            </button>
            <button className={styles.pageButton} onClick={this.nextPage}>
              Next Page
            </button>
          </div>

          <div className={styles.pageNo}>Page: {page} of 2</div>
        </div>
      </div>
    );
  }
}
