var candidate = {};
window.candidateData.forEach(c => candidate[c.id] = c);

var question = {};
window.questionData.forEach(q => question[q.id] = q);

module.exports = { candidate, question };