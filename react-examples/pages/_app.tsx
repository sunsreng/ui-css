import "@components/global.scss";
import Link from "next/link";
import React from "react";

interface IAppProps {
  Component: React.FunctionComponent;
  pageProps: Record<string, unknown>;
}

const App: React.FunctionComponent<IAppProps> = ({ Component, pageProps }: IAppProps) => {
  return (
    <div>
      <div>
        <Link href="/">HOME</Link>
        <Link href="/3d-gallery">3d Gallery</Link>
        <Link href="/button-glow-effect">button-glow-effect</Link>
        <Link href="/button-hover-effect">button-hover-effect</Link>
        <Link href="/card-scroll-snap">card-scroll-snap</Link>
        <Link href="/cards-flip-effect-gallery">cards-flip-effect-gallery</Link>
        <Link href="/cards-hover-effect">cards-hover-effect</Link>
        <Link href="/css-flex-box-responsive">css-flex-box-responsive</Link>
        <Link href="/custom-loader-v1">custom-loader-v1</Link>
        <Link href="/custom-loader">custom-loader</Link>
        <Link href="/custom-radio">custom-radio</Link>
        <Link href="/custom-slider-range">custom-slider-range</Link>
        <Link href="/cut-out-text">cut-out-text</Link>
        <Link href="/flex-grow-effect">flex-grow-effect</Link>
        <Link href="/footer-01">footer-01</Link>
        <Link href="/grid-template-areas">grid-template-areas</Link>
        <Link href="/input-example">input-example</Link>
        <Link href="/input-search">input-search</Link>
        <Link href="/ios-like-switch">ios-like-switch</Link>
        <Link href="/menu-items-hover">menu-items-hover</Link>
        <Link href="/notification-example">notification-example</Link>
        <Link href="/profile-card">profile-card</Link>
        <Link href="/social-buttons">social-buttons</Link>
        <Link href="/stories-horizontal-scroller">stories-horizontal-scroller</Link>
        <Link href="/summary-details">summary-details</Link>
        <Link href="/theme-switcher">theme-switcher</Link>
        <Link href="/zoom-image-hover-effect">zoom-image-hover-effect</Link>
      </div>
      <Component {...pageProps} />
    </div>
  );
};

export default App;
