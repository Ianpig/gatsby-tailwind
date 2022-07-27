/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React, { useContext } from "react";
import { ThemeContext, ThemeContextType } from "../context/ThemeContext";

import { useStaticQuery, graphql } from "gatsby";

import Header from "./Header";

const Layout: React.FC<{
  title?: string;
  children: any;
  location: { pathname: string };
}> = ({ children, location, title }) => {
  const { theme } = useContext(ThemeContext) as ThemeContextType;

  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <div
      className={`${
        theme === "light" ? "theme-light" : "theme-dark"
      } bg-primary text-main-text transition-all duration-300 m-0 p-0 min-h-screen flex flex-col`}
    >
      <Header siteTitle={title || data.site.siteMetadata?.title} />
      <div className="grow mx-6 md:mx-0">{children}</div>
      <footer className="text-center py-2 text-sm">
        © {new Date().getFullYear()} &middot; Built with
        {` `}
        <a href="https://www.gatsbyjs.com">Gatsby</a>
      </footer>
    </div>
  );
};

export default Layout;
