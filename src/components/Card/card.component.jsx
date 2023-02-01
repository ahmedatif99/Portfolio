import React from "react";
import { useLocation } from "react-router-dom";
import { Github } from "../SVGs/allSVGs";
import {
  Box,
  Description,
  Footer,
  Git,
  Item,
  Tag,
  Tags,
  Title,
  Link,
} from "./card.styles";

const Card = (props) => {
  const location = useLocation();
  const { id, name, description, tags, demo, github } = props.data;

  return (
    <Box key={id} variants={Item}>
      <Title>{name}</Title>
      <Description>{description}</Description>
      <Tags>
        {tags.map((t, id) => {
          return <Tag key={id}>#{t}</Tag>;
        })}
      </Tags>
      <Footer>
        <Link to={{ pathname: `${demo ? demo : location.pathname}` }} target="_blank">
          Visit
        </Link>
        <Git to={{ pathname: `${github}` }} target="_blank">
          <Github width={30} height={30} />
        </Git>
      </Footer>
    </Box>
  );
};

export default Card;
