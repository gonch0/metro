export const fetchWithTimeout = (URL: string, timeout: number): Promise<Response> => {
    return new Promise((resolve, reject) => {
        const controller = new AbortController();
        const id = setTimeout(() => {
            controller.abort();
        }, timeout);

        fetch(URL, {
            signal: controller.signal,
        }).then((res) => {
            resolve(res);
        }).catch((err) => {
            reject(err);
        }).finally(() => {
            clearTimeout(id);
        });
    });
};
