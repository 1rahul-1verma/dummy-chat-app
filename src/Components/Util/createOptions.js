const createOptions = (data) => {
    const options = {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    };
    return options;
}

export { createOptions };