import jwtAxios from './authentication/index';

const callApi = async (
  apiUrl,
  method,
  params,
  successCallback,
  failureCallback,
  responseCallBack
) => {
  const response =
    method === ApiMethod.GET
      ? await jwtAxios.get(apiUrl)
      : method === ApiMethod.DELETE
      ? await jwtAxios.delete(apiUrl)
      : method === ApiMethod.PUT
      ? await jwtAxios.put(apiUrl, params)
      : await jwtAxios.post(apiUrl, params);

  if (responseCallBack) {
    responseCallBack();
  }

  if (response?.status === 200) {
    if (response) {
      if (successCallback) {
        successCallback(response.data);
      } else {
        console.log('Operation succeeded!');
      }
    } else {
      console.log('error', response);
      if (failureCallback) {
        failureCallback(response);
      } else {
        console.log(response.data.ErrorMessage || '');
      }
    }
  } else {
    if (response?.response.status === 401) {
      console.log('You session was timed out! please try to login again');
      // document.location.href = '/login';
      //dispatch(fetchError(<IntlMessages id='common.sessionTimedOut' />));
    } else {
      // Show notification
      if (failureCallback) {
        failureCallback(response);
      }
    }
  }

  return response;
};

export const ApiMethod = {
  GET: 'get',
  DELETE: 'delete',
};

export default callApi;
