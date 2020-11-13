// // const questionService = require('../services/QuestionService');

// exports.questionOverview = (req, res) => {
//     // const questions = questionService.returnAllQuestions();

//     return res.render('question-overview', {
//         questions: questions
//     });
// };

// exports.questionCreateView = (req, res) => {
//     res.render('question-create');
// }

// exports.questionCreate = (req, res) => {
//     var eventValidation = validateAll(EventValidation, req.body);
//     if(!eventValidation) {
//         console.warn(`Errors by submitting event: ${eventValidation.messages}`);
//         res.render('question-create', {
//             errors: eventValidation.messages
//         });
//     } else {
//         let questionToCreate = req.body;
//         questionService.createQuestion(questionToCreate);
//         res.redirect('/adminpanel');
//     }
// }

// exports.questionDetails = (req, res) => {

// }
