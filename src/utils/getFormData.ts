const getFormData = (object: any) =>
  Object.keys(object).reduce((formData, key) => {
    if (Array.isArray(object[key])) {
      object[key].forEach((data: any) => {
        formData.append(`${key}[]`, data);
      });
      return formData;
    }
    if (object[key] instanceof Blob) {
      formData.append(key, object[key]);
      return formData;
    }
    if (typeof object[key] === 'object') {
      formData.append(key, JSON.stringify(object[key]));
      return formData;
    }
    formData.append(key, object[key]);
    return formData;
  }, new FormData());

export default getFormData;
