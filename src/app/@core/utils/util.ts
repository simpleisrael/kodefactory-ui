export const transformObject = (field) => {
  if (!field) {
    field = {};
  }
  field['text'] = field['name'] || '';
  return field;
};
