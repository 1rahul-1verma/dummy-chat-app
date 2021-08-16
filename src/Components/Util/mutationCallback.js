import { createOptions } from "./createOptions";

const mutationCallback = (data, url) => {
    const options = createOptions(data);
    return fetch(url, options);
}

export { mutationCallback };