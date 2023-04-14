import React, { useEffect } from "react";
import axios from "axios";

const Fib = () => {
  state = {
    seenIndexes: [],
    values: {},
    index: "",
  };

  useEffect(() => {
    fetchValues();
    fetchIndexes();
  }, []);

  const fetchValues = async () => {
    const values = await axios.get("/api/values/current");
    setState({ values: values.data });
  };

  const fetchIndexes = async () => {
    const seenIndexes = await axios.get("/api/values/all");
    this.setState({
      seenIndexes: seenIndexes.data,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    await axios.post("/api/values", {
      index: this.state.index,
    });
    this.setState({ index: "" });
  };

  const renderSeenIndexes = () => {
    return this.state.seenIndexes.map(({ number }) => number).join(", ");
  };

  const renderValues = () => {
    const entries = [];

    for (let key in this.state.values) {
      entries.push(
        <div key={key}>
          For index {key} I calculated {this.state.values[key]}
        </div>
      );
    }

    return entries;
  };

  render(
    <div>
      <form onSubmit={this.handleSubmit}>
        <label>Enter your index:</label>
        <input
          value={this.state.index}
          onChange={(event) => this.setState({ index: event.target.value })}
        />
        <button>Submit</button>
      </form>

      <h3>Indexes I have seen:</h3>
      {renderSeenIndexes()}

      <h3>Calculated Values:</h3>
      {renderValues()}
    </div>
  );
};

export default Fib;
