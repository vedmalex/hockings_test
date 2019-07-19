import levels, { filter } from '../../lib/levels';

export default (req, res) => {
  const { query: { level } } = req;
  if (level) {
    let nl = filter(level);
    if (nl.mark != level) {
      res.status(301);
      res.setHeader('Location', `/api/levels?level=${nl.mark}`);
      res.end();
    } else {
      res.setHeader('Cache-Control', 'public, max-age=31557600');
      res.json(nl);
    }
  } else {
    res.setHeader('Cache-Control', 'public, max-age=31557600');
    res.json(levels);
  }
}