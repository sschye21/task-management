import axios, { AxiosError, AxiosResponse } from 'axios';

export const instance = axios.create({
  headers: {
    'content-type': 'application/json',
  },
});

export const axiosWrapper = async (
    method: 'get' | 'post' | 'patch',
    url: string,
    payload?: any,
): Promise<AxiosResponse | undefined> => {
    try {
        if (process.env.NODE_ENV === 'development') {
            console.log('network call:', method, url, payload);
        }
        if (method == 'get') {
            return await instance[method](url)
        }
        return await instance[method](url, payload);
    } catch (e) {
        const message = (e as AxiosError).response?.data;
        if (message) {
          console.error(message);
        } else {
            console.error(
                'Unkown error whilst processing your request, please try again later.'
            );
        }
    }
}