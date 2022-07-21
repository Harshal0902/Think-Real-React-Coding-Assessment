import Provider from './context/provider';
import Form from './components/Form';
import Tab from './components/Subnav';
import Response from './components/Response';
import Error from './components/Error';

function App() {
  return (
    <div>
      <Form />
      <Tab />
      <Response />
      <Error />
    </div>
  );
}

export default App;
