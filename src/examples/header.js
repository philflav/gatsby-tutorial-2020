import React from 'react';
import {useStaticQuery, graphql} from 'gatsby';

const Header = () => {
  const data = useStaticQuery (graphql`
    {
      site {
        info:siteMetadata {    
          title
          data
          description
          person {
            name
            age
          }
        }
      }
    }
  `); //note info: is an alias for siteMetadata in the graphQL query
  return (
    <div>
      <h2>{data.site.info.title}</h2>
      <h3>{data.site.info.description}</h3>
      <h4>{data.site.info.person.name}</h4>

    </div>
  );
};

export default Header;
