const PERSONAL_ROOM = 'https://us05web.zoom.us/j/8935240452';

module.exports = (req, res) => {
  const [shortPass] = req.url.split('?');
  // https://zoom.chitacan.io/<ZOOM_SHORT_PWD>
  if (shortPass === `/${process.env.ZOOM_SHORT_PWD}`) {
    return res.redirect(308, `${PERSONAL_ROOM}?pwd=${process.env.ZOOM_PWD}`);
  }
  else if (req.query && req.query.pwd === process.env.ZOOM_PWD) {
    return res.redirect(308, `${PERSONAL_ROOM}?pwd=${process.env.ZOOM_PWD}`);
  }
  return res.redirect(308, PERSONAL_ROOM);
}
