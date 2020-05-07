import React, { useEffect } from "react";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import Scroll from "../components/Scroll";
import ErrorBoundary from "../components/ErrorBoundary";
import "./App.css";
import { connect } from "react-redux";
import { setSearchField, requestRobots } from "../action";

const mapStateToProps = (state) => {
  return {
    searchField: state.searchRobots.searchField,
    robots: state.requestRobots.robots,
    is_pending: state.requestRobots.is_pending,
    error: state.requestRobots.error,
  }; 
};

const mapDispatchToProps = (dispatch) => {
  return {
    onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
    onRequestRobots: () => dispatch(requestRobots()),
  };
};

const App = (props) => {
  const {
    searchField,
    onSearchChange,
    robots,
    is_pending,
    onRequestRobots,
  } = props;

  useEffect(() => {
    onRequestRobots();
  }, [onRequestRobots]);

  let appView = "";
  if (is_pending) {
    appView = <h1>LOADING...</h1>;
  } else {
    let filteredRobots = robots.filter((robot) =>
      robot.name.toLowerCase().includes(searchField.toLowerCase())
    );
    appView = (
      <div className="tc">
        <h1 className="f1">RoboFriends</h1>
        <SearchBox searchChange={onSearchChange} />
        <Scroll>
          <ErrorBoundary>
            <CardList robots={filteredRobots} />
          </ErrorBoundary>
        </Scroll>
      </div>
    );
  }

  return appView;
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
