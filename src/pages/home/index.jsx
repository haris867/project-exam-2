import React from "react";
import styled from "styled-components";

const Button = styled.button`
  padding: 10px 20px;
  color: ${(props) => props.theme.color.primary};
  background: ${(props) => props.theme.color.secondary};
  border-radius: 6px;
  border: solid 2px ${(props) => props.theme.color.tertiary}};
  cursor: pointer;
`;

export default function Home() {
  return (
    <div style={{ flex: "1" }}>
      <Button>Click me</Button>
    </div>
  );
}
