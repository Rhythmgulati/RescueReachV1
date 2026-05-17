export const triageTree = {
  step1: {
    q_en: 'Is the person unconscious?',
    q_hi: 'क्या व्यक्ति बेहोश है?',
    q_mr: 'व्यक्ती बेशुद्ध आहे का?',
    yes: 'step2',
    no: 'step3',
  },
  step2: {
    q_en: 'Is the person breathing?',
    q_hi: 'क्या व्यक्ति सांस ले रहा है?',
    q_mr: 'व्यक्ती श्वास घेत आहे का?',
    yes: 'result_recovery',
    no: 'result_unconscious',
  },
  step3: {
    q_en: 'Is there severe bleeding?',
    q_hi: 'क्या भारी खून बह रहा है?',
    q_mr: 'रक्तस्राव होत आहे का?',
    yes: 'result_bleeding',
    no: 'result_safe',
  },
};

export const getTriageQuestion = (step, lang) => {
  const stepData = triageTree[step];
  if (!stepData) return '';
  
  switch (lang) {
    case 'hi':
      return stepData.q_hi;
    case 'mr':
      return stepData.q_mr;
    default:
      return stepData.q_en;
  }
};

export const getNextStep = (currentStep, answer) => {
  const stepData = triageTree[currentStep];
  if (!stepData) return null;
  return stepData[answer];
};