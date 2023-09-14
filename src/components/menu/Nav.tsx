import React from "react";
import styled from "styled-components";
import {Link} from "react-router-dom";

export const Nav = () => {
    return (
        <StyledNav>
            <ul>

                <li>
                    {/* eslint-disable-next-line react/jsx-no-undef */}
                    <Link to='/'>Home</Link>
                </li>
                <li>
                    <Link to='/about'>About</Link>

                </li>

                {/*<li>*/}
                {/*    <a href="src/components/menu/Nav#">Home</a>*/}
                {/*</li>*/}
                {/*<li>*/}
                {/*    <a href="src/components/menu/Nav#">About</a>*/}
                {/*</li>    */}

                {/*<li>*/}
                {/*    <a href="src/components/menu/Nav#">Tech Stack</a>*/}
                {/*</li>*/}
                {/*<li>*/}
                {/*    <a href="src/components/menu/Nav#">Projects</a>*/}
                {/*</li>*/}
                {/*<li>*/}
                {/*    <a href="src/components/menu/Nav#">Contact</a>*/}
                {/*</li>*/}
            </ul>
        </StyledNav>
    );
};

const StyledNav = styled.nav`
  ul {
    display: flex;

    li {
    }

  }
`;
