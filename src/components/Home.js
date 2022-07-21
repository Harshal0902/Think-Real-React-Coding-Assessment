import React from 'react';
import Provider from './context/provider';
import Form from './components/Form';
import Tab from './components/Subnav';
import Response from './components/Response';
import Error from './components/Error';
import ToastNotifications from './components/ToastNotifications';
import { DataContext } from './context/provider';
import { checkParams } from './utils/check';
import { getData } from './services/api';

const App = () => {

  const [error, setError] = React.useState(false);
  const [errorMsg, setErrorMsg] = React.useState('')
  const [errorResponse, setErrorResponse] = React.useState(false);
  const [apiResponse, setApiResponse] = React.useState({})

  const { formData, jsonText, paramData, headerData } = React.useContext(DataContext);

  const onSendClick = async () => {
    if (!checkParams(formData, jsonText, paramData, headerData, setErrorMsg)) {
      setError(true);
      return false;
    }

    let response = await getData(formData, jsonText, paramData, headerData);
    console.log(response);
    if (response === 'error') {
      setErrorResponse(true);
      return;
    }
    setApiResponse(response.data)
  }

  return (
    <Provider>
      <div>
        <Form onSendClick={onSendClick} />
        <Tab />
        {errorResponse ? <Error /> : <Response data={apiResponse} />}
      </div>
      {error && <ToastNotifications errorMsg={errorMsg} error={error} setError={setError} />}
    </Provider>
  );
}

export default App;
