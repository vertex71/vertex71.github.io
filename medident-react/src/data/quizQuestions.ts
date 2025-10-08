// Quiz type definitions
export interface QuizOption {
  value: string;
  text: string;
}

export interface QuizQuestion {
  id: number;
  question: string;
  options: QuizOption[];
}

export interface QuizResult {
  level: string;
  title: string;
  message: string;
  color: string;
  recommendation: {
    message: string;
    product?: string;
  };
}

export const quizQuestions: QuizQuestion[] = [
  {
    id: 1,
    question: 'Do you experience sharp pain when eating ice cream or drinking hot beverages?',
    options: [
      { value: 'yes', text: 'Yes, frequently' },
      { value: 'sometimes', text: 'Sometimes' },
      { value: 'no', text: 'Never' }
    ]
  },
  {
    id: 2,
    question: 'Do you avoid certain foods because they cause tooth discomfort?',
    options: [
      { value: 'yes', text: 'Yes, often' },
      { value: 'sometimes', text: 'Occasionally' },
      { value: 'no', text: 'No, never' }
    ]
  },
  {
    id: 3,
    question: 'Does brushing your teeth sometimes cause discomfort?',
    options: [
      { value: 'yes', text: 'Yes, it\'s painful' },
      { value: 'sometimes', text: 'Sometimes sensitive' },
      { value: 'no', text: 'No discomfort' }
    ]
  }
];

export const quizResults: Record<string, QuizResult> = {
  high: {
    level: 'high',
    title: 'High Sensitivity Detected',
    message: 'Your answers suggest you have significant tooth sensitivity. Medident Sensitive Care can provide immediate relief and long-term protection for your sensitive teeth.',
    color: 'var(--accent-color)',
    recommendation: {
      product: 'medident-sensitive-care',
      message: 'We strongly recommend using Medident Sensitive Care twice daily for immediate relief.'
    }
  },
  moderate: {
    level: 'moderate',
    title: 'Moderate Sensitivity',
    message: 'You experience some tooth sensitivity. Using Medident Sensitive Care regularly can help prevent sensitivity from worsening and provide protection.',
    color: 'var(--primary-color)',
    recommendation: {
      product: 'medident-sensitive-care',
      message: 'Regular use of Medident Sensitive Care can help prevent sensitivity from getting worse.'
    }
  },
  low: {
    level: 'low',
    title: 'Low Sensitivity',
    message: 'Your teeth show minimal sensitivity. Medident Sensitive Care can help maintain your oral health and prevent future sensitivity issues.',
    color: 'var(--secondary-color)',
    recommendation: {
      product: 'medident-sensitive-care',
      message: 'Use Medident Sensitive Care as a preventive measure to maintain optimal oral health.'
    }
  }
};

export const calculateSensitivityLevel = (answers: Record<number, string>): string => {
  const yesCount = Object.values(answers).filter(answer => answer === 'yes').length;
  const sometimesCount = Object.values(answers).filter(answer => answer === 'sometimes').length;
  
  if (yesCount >= 2) {
    return 'high';
  } else if (yesCount === 1 || sometimesCount >= 2) {
    return 'moderate';
  } else {
    return 'low';
  }
};