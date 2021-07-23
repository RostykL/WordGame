function changeKeys(objs, keys) {
  try {
    const objects = [...objs];
    const firstObj = { ...objects[0] };
    const secondObj = { ...objects[1] };
    for (let i = 0; i < keys.length; i++) {
      const storedKey = objects[1][keys[i]];
      secondObj[keys[i]] = firstObj[keys[i]];
      firstObj[keys[i]] = storedKey;
    }
    return [firstObj, secondObj];
  } catch (e) {
    console.log(e);
    return objs;
  }
}

export default changeKeys;
