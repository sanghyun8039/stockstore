import React from "react";
import styled from "styled-components";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
function Header() {
  return (
    <Container>
      <LeftSide>
        <IconButton>
          <MenuIcon />
        </IconButton>
      </LeftSide>
      <Center>
        <h1>주식보관소</h1>
      </Center>
      <RightSide>
        <IconButton>
          <SearchIcon />
        </IconButton>
      </RightSide>
    </Container>
  );
}
export default Header;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex: 1 1 auto;
  flex-wrap: nowrap;
  min-width: 0;
  height: 64px;
`;

const LeftSide = styled.div`
  max-width: 100%;
`;
const IconButton = styled.div`
  cursor: pointer;
  width: 56px !important;
  height: 56px !important;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Center = styled.div``;
const RightSide = styled.div`
  max-width: 100%;
`;
