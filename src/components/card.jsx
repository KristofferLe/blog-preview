import React from "react";
import styled from "styled-components";
import { colors } from "../styles/colors";
import { spacing } from "../styles/typo";
import Blog from "../assets/blog.png";
import User from "../assets/userpic.png";

const StyledCard = styled.article`
  width: 384px;
  padding: ${spacing.xl};
  background-color: ${colors.white};
  border-radius: 16px;
  border: solid 1px black;
  box-shadow: 8px 8px 0 1px black;
  margin: 40px;
  display: grid;
  gap: 32px;

  #card-pic {
    width: 100%;
  }
`;

const CardText = styled.section`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: start;
  gap: 12px;

  #learning {
    height: 29px;
    width: 82px;
    display: grid;
    place-items: center;
    background-color: ${colors.yellow};
    border-radius: 6px;
    font-size: 0.9rem;
    font-weight: bold;
    color: black;
  }

  #date {
    font-weight: 500;
    font-size: 0.9rem;
  }

  h1 {
    font-weight: 800;
    font-size: 1.6rem;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    &:hover {
      color: ${colors.yellow};
    }
  }

  #desc {
    line-height: 150%;
    color: ${colors.lightGray};
  }
`;

const Publisher = styled.span`
  display: flex;
  align-items: center;
  gap: 8px;

  img {
    height: 32px;
    width: 32px;
    border-radius: 50%;
  }

  h2 {
    font-size: 0.9rem;
    font-weight: 800;
  }
`;

export default function BlogCard() {
  return (
    <StyledCard>
      <img id="card-pic" src={Blog} alt="content picture" />
      <CardText>
        <p id="learning">Learning</p>
        <p id="date">Published 21 Dec 2023</p>
        <h1>HTML & CSS foundations</h1>
        <p id="desc">
          These languages are the backbone of every website, defining structure,
          content, and presentation.
        </p>
      </CardText>
      <Publisher>
        <img src={User} alt="publisher profile img" />
        <h2>Greg Hooper</h2>
      </Publisher>
    </StyledCard>
  );
}
