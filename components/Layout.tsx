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
    document.querySelector("html").style.scrollBehavior = 'smooth'
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
      <div className={`min-h-screen	w-full font-mono transition-colors duration-200	 ease-linear dark:bg-black dark:text-gray-300 `}>
        <Head>
          <meta charSet="utf-8"/>
          <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
          <title>{this.props.title}</title>
          <meta name="theme-color" content="#000"/>
          <meta name="description" content="Moncef Gaha, 21 year from Algeria, Web backend developer"/>
          <meta name="robots" content="index,follow"/>
          <meta name="googlebot" content="index,follow"/>
          <meta name="google" content="notranslate"/>
          <link rel="icon" href="https://www.gravatar.com/avatar/ea52ed86c481ca2816b8403acdbc9169?s=16" />
        </Head>
        <div className='m-auto max-w-4xl sm:w-full'>
          <header>
            <nav className='p-5'>
              <Link href="/">
                <a>Home</a>
              </Link>{' '}
              |{' '}
              <Link href="/about">
                <a>About me</a>
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
