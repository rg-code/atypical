import React, { Component } from "react";
import Router from "next/router";

export default class Index extends Component {
  componentDidMount = () => {
    Router.push("/landing");
  };
  <form name="contact" netlify netlify-honeypot="bot-field" action='/' hidden>
    <input type="text" name="name" />
    <input type="email" name="email" />
    <textarea name="message"></textarea>
  </form>
  render() {
    return <div />;
  }
}
