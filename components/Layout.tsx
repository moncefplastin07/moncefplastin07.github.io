import React, { Component } from "react";
import Head from "next/head";
import Link from 'next/link'
import ToggleDisplayThemeButton from "./ToggleDisplayThemeButton";
interface MyProps {
  title: string
}

interface MyState {
  displayTheme: string
}
class Layout extends Component<MyProps, MyState> {
  constructor(props) {
    super(props);
    this.state = { displayTheme: "light" };
  }
  componentDidMount() {
    this.setState({
      displayTheme: window.localStorage.displayTheme || "light",
    });
    document.getElementById('__next').classList.add(window.localStorage.displayTheme || "light")
  }
  toggleDisplayTheme() {
    const newDisplayTheme = this.state.displayTheme == "light"
      ? "dark"
      : "light";
    document.getElementById('__next').classList.replace(this.state.displayTheme,newDisplayTheme)
    window.localStorage.setItem("displayTheme", newDisplayTheme);
    return newDisplayTheme;
  }
  render() {
    return (
      <div className={`min-h-screen	w-full font-mono dark:bg-black dark:text-gray-300 `}>
        <Head>
          <title>{this.props.title}</title>
          <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <div className='m-auto max-w-4xl sm:w-full'>
          <header>
            <nav className='p-5'>
              <Link href="/">
                <a>Home</a>
              </Link>{' '}
              |{' '}
              <Link href="/about">
                <a>About</a>
              </Link>
            </nav>
          </header>
          <ToggleDisplayThemeButton
            onClick={() =>
              this.setState({ displayTheme: this.toggleDisplayTheme() })}
            displayTheme={this.state.displayTheme}
          />
          {this.props.children}
        </div>
      </div>
    );
  }
}
export default Layout;
