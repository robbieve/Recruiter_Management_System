var BASE_URL = 'http://localhost:3001/api/';
var BASE_API_URL = 'http://localhost:3001/';

var appConstants = {
      ADD_ITEM: 'ADD_ITEM',
      REMOVE_ITEM: 'REMOVE_ITEM',
      BASE_URL: BASE_URL,
      INTERVIEWSCHEDULE: `${BASE_URL}InterviewSchedule`,
      MONTHLYINTERVIEWS: `${BASE_URL}MonthlyInterviews`,
      QUESTIONCATEGORYGETALL: `${BASE_URL}QuestionCategoryGetAll`,
      QUESTIONGETALL: `${BASE_URL}QuestionGetAll`,
      QUESTION : `${BASE_URL}Question`,
      GET_QUESTIONBYID : `${BASE_URL}QuestionGetById`,
      QUESTIONINSERT : `${BASE_URL}QuestionInsert`,
      QUESTIONUPDATE : `${BASE_URL}QuestionUpdate`,
      QUESTIONDELETE: `${BASE_URL}QuestionDelete`,
      GETALL_QUESTIONANDRESPONSE: `${BASE_URL}Question/GetAllQuestionAndResponseData`,
      IMAGEUPLOAD : `${BASE_URL}imageUpload`,
      IMAGEREMOVE : `${BASE_URL}resumeRemove`,
      RESUMEDOWNLOAD : `${BASE_API_URL}ResumeDownload/`,
      INTERVIEWRESULT: `${BASE_URL}interviewResult`,
      INTERVIEWSTATUS: `${BASE_URL}InterviewStatus`,
      AUTH_TOKEN: 'Bearer ',
      USER: `${BASE_API_URL}User`,
      CHANGE_PASSWORD: `${BASE_URL}User/ChangePassword`,
      USER_APIURL: `${BASE_URL}User`,
      QUESTIONCATEGORY: `${BASE_URL}QuestionCategory`,
      QUESTIONCATEGORYACTIVE: `${BASE_URL}QuestionCategoryActive`,
      QUESTIONCATEGORYACTIVEGETALL: `${BASE_URL}QuestionCategoryActiveGetAll`,
      SENDMAIL_URL : `${BASE_API_URL}InterviewSchedule/sendmail`,
      SENDMAIL_MULTIPLE_URL : `${BASE_API_URL}InterviewSchedule/sendcompositemail`,
      FIND_QA_SQL: `${BASE_API_URL}Question/AnswersSQL/`,
      FIND_QA: `${BASE_API_URL}Question/Answers/`,
      FIND_QA_MULTIPLE: `${BASE_API_URL}Question/AnswersMultiple/`,
      FIND_QA_ADO : `${BASE_API_URL}Question/AnswersADO/`,
      GET_EMAIL_DATA : `${BASE_API_URL}Question/EmailData/`,
      FIND_QA_SQL_MULTIPLE : `${BASE_API_URL}Question/AnswersSQLMultiple/`,
      FIND_QA_ADO_MULTIPLE : `${BASE_API_URL}Question/AnswersADOMultiple/`,
      GET_EMAIL_DATA_MULTIPLE : `${BASE_API_URL}Question/EmailDataMultiple/`,
      UPDATE_REPORTSHARED : `${BASE_URL}InterviewSchedule/updatereportshared`,
      GET_PERSON: `${BASE_URL}Person`,
      GET_ANSWER: `${BASE_URL}Answer`,
      GET_PERSONBYID: `${BASE_URL}Person/findByPersonId/`,
      GET_INTERVIEWSCHEDULE: `${BASE_URL}Person/getInterviewSchedule`,
      GET_PERSONWISEINTERVIEWCOUNT: `${BASE_URL}Person/getPersonWiseInterviewCount`,
      LOGIN_DETAILS: `${BASE_API_URL}User/LoginDetails`,
      FORGOT_PASSWORD: `${BASE_API_URL}User/ForgotPassword`,
};

module.exports = appConstants;