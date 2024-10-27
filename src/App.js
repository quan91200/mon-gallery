import Gallery from './Gallery';
import styled from 'styled-components';

function App() {
  return (
    <Apps className='App'>
      <h1>
        Môn Môn
      </h1>
      <Gallery />
    </Apps>
  );
}

export default App;

const Apps = styled.div`
  width: 1280px;
  margin: 0 auto;
  text-align: center;
  font-family: "Dancing Script", cursive;
  font-size: 26px;
  background-color: #f8fbee;

  h1 {
    margin: 0;
    padding: 0.8rem 0;
  }
`;
