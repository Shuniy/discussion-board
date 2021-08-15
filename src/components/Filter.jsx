import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import _ from "lodash";
import { getAllCategories, getPostsByCategory } from "../actions";
import Button from "@material-ui/core/Button";
import NewPostButton from "./NewPostButton";

const defaultStyle = "outlined";
const activeStyle = "contained";

class Filter extends Component {
  state = {
    active: this.props.filter,
  };

  componentDidMount() {
    this.props.getAllCategories();
    const { filters } = this.props;
    if (filters && filters.length > 0) {
      filters.forEach((filter) => {
        this.props.getPostsByCategory(filter);
      });
    }
  }

  componentWillReceiveProps(nextProps) {
    const nextFilters = nextProps.filters;
    const thisFilters = this.props.filters;
    if (thisFilters.length === 0 && nextFilters.length !== 0) {
      nextFilters.forEach((filter) => {
        this.props.getPostsByCategory(filter);
      });
    }
  }

  styleSelector = (filter) =>
    this.state.active === filter ? activeStyle : defaultStyle;

  clickHandler = (filter) => {
    this.setState({
      active: filter,
    });
  };

  render() {
    const { filters } = this.props;

    const renderLinks = filters.map((filter) => (
      <Link
        to={`/${filter}`}
        key={filter}
        onClick={() => this.clickHandler(filter)}
      >
        <Button
          className="categoryFilter"
          variant={this.styleSelector(filter)}
          color="primary"
        >
          {_.capitalize(filter)}
        </Button>
      </Link>
    ));

    return (
      <div className="categoriesFilter">
        <Link to="/" onClick={() => this.clickHandler("all")}>
          <Button
            variant={this.state.active === "all" ? activeStyle : defaultStyle}
            color="primary"
          >
            All
          </Button>
        </Link>
        {renderLinks}
        <NewPostButton />
      </div>
    );
  }
}

Filter.defaultProps = {
  filter: "all",
};

Filter.propTypes = {
  filters: PropTypes.array.isRequired,
  filter: PropTypes.string,
  getAllCategories: PropTypes.func.isRequired,
  getPostsByCategory: PropTypes.func.isRequired,
};

const mapStateToProps = ({ categories }) => ({
  filters: categories,
});

export default connect(mapStateToProps, {
  getAllCategories,
  getPostsByCategory,
})(Filter);
