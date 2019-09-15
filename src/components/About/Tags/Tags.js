import React, { Component } from "react";

class Tags extends Component {
  handleClick = () => {
    this.props.onClick(this.props.index);
  };

  render() {
    return (
      <section className="wrapper_tag" onClick={this.handleClick}>
        <div
          className={
            this.props.isActive
              ? "title_wrapper title_isActive"
              : "title_wrapper"
          }
        >
          <h3 className="tag_title">
            {this.props.checked ? this.props.title_en : this.props.title_pl}
          </h3>
          <div className="icon_active">{this.props.isActive ? "-" : "+"}</div>
        </div>
        <article className={this.props.isActive ? "open" : "close"}>
          <p>
            {this.props.checked
              ? this.props.description_en
              : this.props.description_pl}
          </p>
        </article>
      </section>
    );
  }
}

export default Tags;
