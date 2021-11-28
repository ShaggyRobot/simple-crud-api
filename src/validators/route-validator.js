module.exports = (req) => {
  const url = new URL(req.url, `http://${req.headers.host}`);
  req.xURL = url;
  const routes = url.pathname.split('/').splice(1);
  if (routes.length > 1 && req.method === 'POST') {
    return false;
  }
  if (routes[0] !== 'person' || routes.length > 2) {
    return false;
  }
  if (routes.length === 2) {
    const id = routes[1] !== '' ? routes[1] : 'NOT SPECIFIED';
    req.id = id;
    return true;
  }
  return true;
};

// d0e7709d-9b22-4945-84bc-113e6da12850
