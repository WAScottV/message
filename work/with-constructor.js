
// with-constructor.js
const withConstructor = constructor => o => {
  const proto = Object.assign({},
    Object.getPrototypeOf(o),
    { constructor }
  );
  return Object.assign(Object.create(proto), o);
};
