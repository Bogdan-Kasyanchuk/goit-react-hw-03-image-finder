import Container from 'components/Container/Container';

function App() {
  return (
    <Container>
      <h1
        style={{
          color: 'red',
          fontSize: '50px',
          textAlign: 'center',
          marginBottom: '50px',
        }}
      >
        Поиск изображений
      </h1>
      <h2
        style={{
          color: 'blue',
          fontSize: '50px',
          textAlign: 'center',
        }}
      >
        Pixabay API
      </h2>
    </Container>
  );
}

export default App;
