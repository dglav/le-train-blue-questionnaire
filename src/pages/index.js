import React, { useState } from "react";
import PersonalInfoPage from "../form-pages/personalinfo";
import QuestionnairePage1 from "../form-pages/page1";
import QuestionnairePage2 from "../form-pages/page2";
import QuestionnairePage3 from "../form-pages/page3";
import QuestionnairePage4 from "../form-pages/page4";
import QuestionnairePage5 from "../form-pages/page5";
import QuestionnairePage6 from "../form-pages/page6";
import QuestionnairePage7 from "../form-pages/page7";
import QuestionnairePage8 from "../form-pages/page8";
import QuestionnairePage9 from "../form-pages/page9";
import QuestionnairePage10 from "../form-pages/page10";
import QuestionnairePage11 from "../form-pages/page11";
import QuestionnairePage12 from "../form-pages/page12";
import QuestionnairePage13 from "../form-pages/page13";
import QuestionnairePage14 from "../form-pages/page14";

const IndexPage = () => {
  const [questionnaireState, setQuestionnaireState] = useState({});
  const [pageNumber, setPageNumber] = useState(0);

  return (
    <>
      {pageNumber === 0 && (
        <PersonalInfoPage
          questionnaireState={questionnaireState}
          onSubmit={data => {
            setQuestionnaireState({ ...questionnaireState, ...data });
            setPageNumber(pageNumber => pageNumber + 1);
          }}
        />
      )}
      {pageNumber === 1 && (
        <QuestionnairePage1
          questionnaireState={questionnaireState}
          onSubmit={data => {
            setQuestionnaireState({ ...questionnaireState, ...data });
            setPageNumber(pageNumber => pageNumber + 1);
          }}
          handleGoToPreviousPage={data => {
            setQuestionnaireState({ ...questionnaireState, ...data });
            setPageNumber(pageNumber => pageNumber - 1);
          }}
        />
      )}
      {pageNumber === 2 && (
        <QuestionnairePage2
          questionnaireState={questionnaireState}
          onSubmit={data => {
            setQuestionnaireState({ ...questionnaireState, ...data });
            setPageNumber(pageNumber => pageNumber + 1);
          }}
          handleGoToPreviousPage={data => {
            setQuestionnaireState({ ...questionnaireState, ...data });
            setPageNumber(pageNumber => pageNumber - 1);
          }}
        />
      )}
      {pageNumber === 3 && (
        <QuestionnairePage3
          questionnaireState={questionnaireState}
          onSubmit={data => {
            setQuestionnaireState({ ...questionnaireState, ...data });
            setPageNumber(pageNumber => pageNumber + 1);
          }}
          handleGoToPreviousPage={data => {
            setQuestionnaireState({ ...questionnaireState, ...data });
            setPageNumber(pageNumber => pageNumber - 1);
          }}
        />
      )}
      {pageNumber === 4 && (
        <QuestionnairePage4
          questionnaireState={questionnaireState}
          onSubmit={data => {
            setQuestionnaireState({ ...questionnaireState, ...data });
            setPageNumber(pageNumber => pageNumber + 1);
          }}
          handleGoToPreviousPage={data => {
            setQuestionnaireState({ ...questionnaireState, ...data });
            setPageNumber(pageNumber => pageNumber - 1);
          }}
        />
      )}
      {pageNumber === 5 && (
        <QuestionnairePage5
          questionnaireState={questionnaireState}
          onSubmit={data => {
            setQuestionnaireState({ ...questionnaireState, ...data });
            setPageNumber(pageNumber => pageNumber + 1);
          }}
          handleGoToPreviousPage={data => {
            setQuestionnaireState({ ...questionnaireState, ...data });
            setPageNumber(pageNumber => pageNumber - 1);
          }}
        />
      )}
      {pageNumber === 6 && (
        <QuestionnairePage6
          questionnaireState={questionnaireState}
          onSubmit={data => {
            setQuestionnaireState({ ...questionnaireState, ...data });
            setPageNumber(pageNumber => pageNumber + 1);
          }}
          handleGoToPreviousPage={data => {
            setQuestionnaireState({ ...questionnaireState, ...data });
            setPageNumber(pageNumber => pageNumber - 1);
          }}
        />
      )}
      {pageNumber === 7 && (
        <QuestionnairePage7
          questionnaireState={questionnaireState}
          onSubmit={data => {
            setQuestionnaireState({ ...questionnaireState, ...data });
            setPageNumber(pageNumber => pageNumber + 1);
          }}
          handleGoToPreviousPage={data => {
            setQuestionnaireState({ ...questionnaireState, ...data });
            setPageNumber(pageNumber => pageNumber - 1);
          }}
        />
      )}
      {pageNumber === 8 && (
        <QuestionnairePage8
          questionnaireState={questionnaireState}
          onSubmit={data => {
            setQuestionnaireState({ ...questionnaireState, ...data });
            setPageNumber(pageNumber => pageNumber + 1);
          }}
          handleGoToPreviousPage={data => {
            setQuestionnaireState({ ...questionnaireState, ...data });
            setPageNumber(pageNumber => pageNumber - 1);
          }}
        />
      )}
      {pageNumber === 9 && (
        <QuestionnairePage9
          questionnaireState={questionnaireState}
          onSubmit={data => {
            setQuestionnaireState({ ...questionnaireState, ...data });
            setPageNumber(pageNumber => pageNumber + 1);
          }}
          handleGoToPreviousPage={data => {
            setQuestionnaireState({ ...questionnaireState, ...data });
            setPageNumber(pageNumber => pageNumber - 1);
          }}
        />
      )}
      {pageNumber === 10 && (
        <QuestionnairePage10
          questionnaireState={questionnaireState}
          onSubmit={data => {
            setQuestionnaireState({ ...questionnaireState, ...data });
            setPageNumber(pageNumber => pageNumber + 1);
          }}
          handleGoToPreviousPage={data => {
            setQuestionnaireState({ ...questionnaireState, ...data });
            setPageNumber(pageNumber => pageNumber - 1);
          }}
        />
      )}
      {pageNumber === 11 && (
        <QuestionnairePage11
          questionnaireState={questionnaireState}
          onSubmit={data => {
            setQuestionnaireState({ ...questionnaireState, ...data });
            setPageNumber(pageNumber => pageNumber + 1);
          }}
          handleGoToPreviousPage={data => {
            setQuestionnaireState({ ...questionnaireState, ...data });
            setPageNumber(pageNumber => pageNumber - 1);
          }}
        />
      )}
      {pageNumber === 12 && (
        <QuestionnairePage12
          questionnaireState={questionnaireState}
          onSubmit={data => {
            setQuestionnaireState({ ...questionnaireState, ...data });
            setPageNumber(pageNumber => pageNumber + 1);
          }}
          handleGoToPreviousPage={data => {
            setQuestionnaireState({ ...questionnaireState, ...data });
            setPageNumber(pageNumber => pageNumber - 1);
          }}
        />
      )}
      {pageNumber === 13 && (
        <QuestionnairePage13
          questionnaireState={questionnaireState}
          onSubmit={data => {
            setQuestionnaireState({ ...questionnaireState, ...data });
            setPageNumber(pageNumber => pageNumber + 1);
          }}
          handleGoToPreviousPage={data => {
            setQuestionnaireState({ ...questionnaireState, ...data });
            setPageNumber(pageNumber => pageNumber - 1);
          }}
        />
      )}
      {pageNumber === 14 && (
        <QuestionnairePage14
          questionnaireState={questionnaireState}
          handleGoToPreviousPage={data => {
            setQuestionnaireState({ ...questionnaireState, ...data });
            setPageNumber(pageNumber => pageNumber - 1);
          }}
        />
      )}
    </>
  );
};

export default IndexPage;
