export default (
  data: { [key: string]: any },
  config: { [key: string]: any }
) => {
  const validationEntries = Object.entries(data).map(([key, value]) => {
    const regRule: RegExp = config[key];
    const isValid = regRule.test(value);
    return [key, isValid];
  });

  return Object.fromEntries(validationEntries);
};
