import React from 'react';
import './Navlinks.style.scss';
import { sectionRoutes } from './nav-routes';
import { Link } from 'react-router-dom';

function NavLinks() {
  const getDivider = (index) => {
    const actualId = sectionRoutes.length - 1 - index;
    console.log('actualId', actualId);
    if (actualId) {
      return <hr />;
    } else {
      return null;
    }
  };

  return (
    <ul className='list_container'>
      {sectionRoutes.map((routes, index) => {
        return (
          <div
            key={`${index}`}
            className={index === sectionRoutes.length - 1 ? 'last_list' : ''}
          >
            <div className='sublist_container'>
              {routes.map(({ path, title }) => {
                return (
                  <Link className='links' to={path} key={title}>
                    {title}
                  </Link>
                );
              })}
            </div>
            {getDivider(index)}
          </div>
        );
      })}
    </ul>
  );
}

export default NavLinks;
