import ph from '../images/ph.jpg';
import Container from 'components/Container';

function HomePage() {
  return (
    <Container>
      <img src={ph} alt="Phone book" />
    </Container>
  );
}

export default HomePage;
