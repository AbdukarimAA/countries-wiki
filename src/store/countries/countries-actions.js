export const SET_COUNTRIES = '@@country/SET_COUNTRIES';
export const SET_LOADING = '@@country/SET_LOADING';
export const SET_ERROR = '@@country/SET_ERROR';

//синхронные - те что обрабатывает редьюсер
export const setCountries = (countries) => ({
    type: SET_COUNTRIES,
    payload: countries,
});

export const setLoading = () => ({
    type: SET_LOADING
});

export const setError = (err) => ({
    type: SET_ERROR,
    payload: err,
});

//ассинхронные - те что редьюсер не будет обрабатывать
//{client, api} - передали как extra аргумент в index.js

export const loadCountries = () => (dispatch, getState, {client, api}) => {
    dispatch(setLoading()); // первым делаем загрузку

    client.get(api.ALL_COUNTRIES)
        .then(({data}) => dispatch(setCountries(data)))
        .catch((err) => dispatch(setError(err)));
}

