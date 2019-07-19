import questions, {filter} from '../../lib/questions'

export default (req, res) => {
  const { query: { question } } = req;
  if (question) {
    let q = filter(question);
    if(q.redirect){
      res.status(301);
      res.setHeader('Location', `/api/questions?question=${q.number}`);
      res.end();
    } else {
      res.setHeader('Cache-Control', 'public, max-age=31557600');
      res.json(q);
    }
  } else {
    res.setHeader('Cache-Control', 'public, max-age=31557600');
    res.json(questions)
  }
}
