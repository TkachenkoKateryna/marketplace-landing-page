import styled from "styled-components";
import ProductCard from "../components/Products/ProductCard";

const HomePage = () => {
  return (
    <Container>
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
    </Container>
  );
};

export default HomePage;

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-right: -20px;

  > * {
    width: calc(33.3% - 20px);
    margin: 0 20px 20px 0;
  }
`;
