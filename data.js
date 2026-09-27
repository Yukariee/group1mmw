// Survey data — Digital Device Use and Students' Face-to-Face Learning Experience
// Collected from 24 respondents. Names and school email addresses removed for privacy.
// The raw spreadsheet (with identities) is submitted separately to the instructor.
const SURVEY_DATA = {
  "n": 24,
  "respondents": [
    {
      "age": 18,
      "year": "1st Year",
      "device": "Smartphone",
      "q4": 4.5,
      "q5": 4,
      "q6": "Communicating with classmates or instructors",
      "q7": "Very effective",
      "q8": "Sometimes",
      "q9": "Agree",
      "q10": "Agree",
      "q11": "Agree",
      "q12": "Agree",
      "q13": "Agree",
      "id": "Respondent 01"
    },
    {
      "age": 18,
      "year": "1st Year",
      "device": "Tablet",
      "q4": 5,
      "q5": 9,
      "q6": "Completing school activities or assignments",
      "q7": "Effective",
      "q8": "Often",
      "q9": "Neutral",
      "q10": "Strongly Agree",
      "q11": "Agree",
      "q12": "Agree",
      "q13": "Disagree",
      "id": "Respondent 02"
    },
    {
      "age": 18,
      "year": "1st Year",
      "device": "Laptop",
      "q4": 2,
      "q5": 8,
      "q6": "Searching for information",
      "q7": "Very effective",
      "q8": "Rarely",
      "q9": "Neutral",
      "q10": "Strongly Agree",
      "q11": "Agree",
      "q12": "Disagree",
      "q13": "Neutral",
      "id": "Respondent 03"
    },
    {
      "age": 18,
      "year": "1st Year",
      "device": "Smartphone",
      "q4": 4,
      "q5": 10,
      "q6": "Completing school activities/Accessing learning materials",
      "q7": "Very effective",
      "q8": "Sometimes",
      "q9": "Neutral",
      "q10": "Strongly Agree",
      "q11": "Agree",
      "q12": "Neutral",
      "q13": "Neutral",
      "id": "Respondent 04"
    },
    {
      "age": 18,
      "year": "1st Year",
      "device": "Laptop",
      "q4": 6,
      "q5": 8,
      "q6": "Completing school activities or assignments",
      "q7": "Neutral",
      "q8": "Sometimes",
      "q9": "Neutral",
      "q10": "Neutral",
      "q11": "Neutral",
      "q12": "Neutral",
      "q13": "Neutral",
      "id": "Respondent 05"
    },
    {
      "age": 18,
      "year": "1st Year",
      "device": "Smartphone",
      "q4": 2,
      "q5": 12,
      "q6": "Searching for information",
      "q7": "Very effective",
      "q8": "Sometimes",
      "q9": "Strongly Disagree",
      "q10": "Strongly Agree",
      "q11": "Strongly Agree",
      "q12": "Neutral",
      "q13": "Strongly Agree",
      "id": "Respondent 06"
    },
    {
      "age": 18,
      "year": "1st Year",
      "device": "Laptop",
      "q4": 4,
      "q5": 5,
      "q6": "Taking notes",
      "q7": "Very effective",
      "q8": "Rarely",
      "q9": "Strongly Agree",
      "q10": "Strongly Agree",
      "q11": "Strongly Agree",
      "q12": "Strongly Agree",
      "q13": "Neutral",
      "id": "Respondent 07"
    },
    {
      "age": 18,
      "year": "1st Year",
      "device": "Laptop",
      "q4": 2,
      "q5": 5,
      "q6": "Communicating with classmates or instructors",
      "q7": "Very effective",
      "q8": "Sometimes",
      "q9": "Agree",
      "q10": "Strongly Agree",
      "q11": "Strongly Agree",
      "q12": "Strongly Agree",
      "q13": "Agree",
      "id": "Respondent 08"
    },
    {
      "age": 18,
      "year": "1st Year",
      "device": "Laptop",
      "q4": 6,
      "q5": 2,
      "q6": "Communicating with classmates or instructors",
      "q7": "Effective",
      "q8": "Never",
      "q9": "Strongly Agree",
      "q10": "Strongly Agree",
      "q11": "Strongly Agree",
      "q12": "Neutral",
      "q13": "Disagree",
      "id": "Respondent 09"
    },
    {
      "age": 18,
      "year": "1st Year",
      "device": "Desktop",
      "q4": 4,
      "q5": 8,
      "q6": "Accessing learning materials",
      "q7": "Effective",
      "q8": "Sometimes",
      "q9": "Agree",
      "q10": "Agree",
      "q11": "Agree",
      "q12": "Neutral",
      "q13": "Agree",
      "id": "Respondent 10"
    },
    {
      "age": 18,
      "year": "1st Year",
      "device": "Desktop",
      "q4": 3,
      "q5": 12,
      "q6": "Personal or non-school activities",
      "q7": "Very effective",
      "q8": "Sometimes",
      "q9": "Strongly Agree",
      "q10": "Strongly Agree",
      "q11": "Strongly Agree",
      "q12": "Agree",
      "q13": "Neutral",
      "id": "Respondent 11"
    },
    {
      "age": 18,
      "year": "1st Year",
      "device": "Smartphone",
      "q4": 2,
      "q5": 6,
      "q6": "Communicating with classmates or instructors",
      "q7": "Neutral",
      "q8": "Sometimes",
      "q9": "Neutral",
      "q10": "Agree",
      "q11": "Disagree",
      "q12": "Agree",
      "q13": "Agree",
      "id": "Respondent 12"
    },
    {
      "age": 18,
      "year": "1st Year",
      "device": "Smartphone",
      "q4": 8,
      "q5": 12,
      "q6": "Taking notes",
      "q7": "Very effective",
      "q8": "Rarely",
      "q9": "Agree",
      "q10": "Neutral",
      "q11": "Neutral",
      "q12": "Agree",
      "q13": "Neutral",
      "id": "Respondent 13"
    },
    {
      "age": 19,
      "year": "1st Year",
      "device": "Desktop",
      "q4": 2.5,
      "q5": 6,
      "q6": "Accessing learning materials",
      "q7": "Very effective",
      "q8": "Rarely",
      "q9": "Strongly Agree",
      "q10": "Strongly Agree",
      "q11": "Agree",
      "q12": "Agree",
      "q13": "Disagree",
      "id": "Respondent 14"
    },
    {
      "age": 18,
      "year": "1st Year",
      "device": "Smartphone",
      "q4": 5,
      "q5": 12,
      "q6": "Completing school activities or assignments",
      "q7": "Very effective",
      "q8": "Rarely",
      "q9": "Strongly Agree",
      "q10": "Neutral",
      "q11": "Neutral",
      "q12": "Agree",
      "q13": "Disagree",
      "id": "Respondent 15"
    },
    {
      "age": 18,
      "year": "1st Year",
      "device": "Smartphone",
      "q4": 6,
      "q5": 8,
      "q6": "Completing school activities or assignments",
      "q7": "Effective",
      "q8": "Sometimes",
      "q9": "Neutral",
      "q10": "Agree",
      "q11": "Agree",
      "q12": "Neutral",
      "q13": "Neutral",
      "id": "Respondent 16"
    },
    {
      "age": 18,
      "year": "1st Year",
      "device": "Smartphone",
      "q4": 4,
      "q5": 6,
      "q6": "Searching for information",
      "q7": "Very effective",
      "q8": "Often",
      "q9": "Neutral",
      "q10": "Strongly Agree",
      "q11": "Strongly Agree",
      "q12": "Neutral",
      "q13": "Agree",
      "id": "Respondent 17"
    },
    {
      "age": 18,
      "year": "1st Year",
      "device": "Laptop",
      "q4": 6,
      "q5": 6,
      "q6": "Taking notes",
      "q7": "Very effective",
      "q8": "Sometimes",
      "q9": "Agree",
      "q10": "Strongly Agree",
      "q11": "Agree",
      "q12": "Agree",
      "q13": "Agree",
      "id": "Respondent 18"
    },
    {
      "age": 19,
      "year": "1st Year",
      "device": "Smartphone",
      "q4": 5,
      "q5": 10,
      "q6": "Taking notes",
      "q7": "Effective",
      "q8": "Rarely",
      "q9": "Agree",
      "q10": "Strongly Agree",
      "q11": "Agree",
      "q12": "Neutral",
      "q13": "Neutral",
      "id": "Respondent 19"
    },
    {
      "age": 18,
      "year": "1st Year",
      "device": "Laptop",
      "q4": 5,
      "q5": 8,
      "q6": "Completing school activities or assignments",
      "q7": "Very effective",
      "q8": "Always",
      "q9": "Strongly Agree",
      "q10": "Agree",
      "q11": "Strongly Agree",
      "q12": "Agree",
      "q13": "Agree",
      "id": "Respondent 20"
    },
    {
      "age": 18,
      "year": "1st Year",
      "device": "Smartphone",
      "q4": 2.3,
      "q5": 1.2,
      "q6": "Searching for information",
      "q7": "Effective",
      "q8": "Sometimes",
      "q9": "Agree",
      "q10": "Agree",
      "q11": "Neutral",
      "q12": "Strongly Agree",
      "q13": "Strongly Agree",
      "id": "Respondent 21"
    },
    {
      "age": 18,
      "year": "1st Year",
      "device": "Smartphone",
      "q4": 6,
      "q5": 12,
      "q6": "Accessing learning materials",
      "q7": "Effective",
      "q8": "Rarely",
      "q9": "Agree",
      "q10": "Agree",
      "q11": "Agree",
      "q12": "Agree",
      "q13": "Agree",
      "id": "Respondent 22"
    },
    {
      "age": 19,
      "year": "1st Year",
      "device": "Tablet",
      "q4": 3.5,
      "q5": 12,
      "q6": "Searching for information",
      "q7": "Effective",
      "q8": "Sometimes",
      "q9": "Strongly Agree",
      "q10": "Agree",
      "q11": "Agree",
      "q12": "Neutral",
      "q13": "Agree",
      "id": "Respondent 23"
    },
    {
      "age": 18,
      "year": "1st Year",
      "device": "Laptop",
      "q4": 7.5,
      "q5": 5,
      "q6": "Completing school activities or assignments",
      "q7": "Effective",
      "q8": "Rarely",
      "q9": "Neutral",
      "q10": "Neutral",
      "q11": "Agree",
      "q12": "Agree",
      "q13": "Neutral",
      "id": "Respondent 24"
    }
  ],
  "age": {
    "freq": [
      {
        "category": 18,
        "frequency": 21,
        "percentage": 87.5
      },
      {
        "category": 19,
        "frequency": 3,
        "percentage": 12.5
      }
    ],
    "stats": {
      "count": 24,
      "mean": 18.125,
      "median": 18.0,
      "min": 18,
      "max": 19
    }
  },
  "year": [
    {
      "category": "1st Year",
      "frequency": 24,
      "percentage": 100.0
    }
  ],
  "device": [
    {
      "category": "Smartphone",
      "frequency": 11,
      "percentage": 45.8
    },
    {
      "category": "Tablet",
      "frequency": 2,
      "percentage": 8.3
    },
    {
      "category": "Laptop",
      "frequency": 8,
      "percentage": 33.3
    },
    {
      "category": "Desktop",
      "frequency": 3,
      "percentage": 12.5
    }
  ],
  "q4": {
    "count": 24,
    "mean": 4.388,
    "median": 4.25,
    "min": 2,
    "max": 8
  },
  "q5": {
    "count": 24,
    "mean": 7.8,
    "median": 8.0,
    "min": 1.2,
    "max": 12
  },
  "q6": [
    {
      "category": "Communicating with classmates or instructors",
      "frequency": 4,
      "percentage": 16.7
    },
    {
      "category": "Completing school activities or assignments",
      "frequency": 6,
      "percentage": 25.0
    },
    {
      "category": "Searching for information",
      "frequency": 5,
      "percentage": 20.8
    },
    {
      "category": "Completing school activities/Accessing learning materials",
      "frequency": 1,
      "percentage": 4.2
    },
    {
      "category": "Taking notes",
      "frequency": 4,
      "percentage": 16.7
    },
    {
      "category": "Accessing learning materials",
      "frequency": 3,
      "percentage": 12.5
    },
    {
      "category": "Personal or non-school activities",
      "frequency": 1,
      "percentage": 4.2
    }
  ],
  "q7": [
    {
      "category": "Very ineffective",
      "frequency": 0,
      "percentage": 0.0
    },
    {
      "category": "Ineffective",
      "frequency": 0,
      "percentage": 0.0
    },
    {
      "category": "Neutral",
      "frequency": 2,
      "percentage": 8.3
    },
    {
      "category": "Effective",
      "frequency": 9,
      "percentage": 37.5
    },
    {
      "category": "Very effective",
      "frequency": 13,
      "percentage": 54.2
    }
  ],
  "q8": [
    {
      "category": "Never",
      "frequency": 1,
      "percentage": 4.2
    },
    {
      "category": "Rarely",
      "frequency": 8,
      "percentage": 33.3
    },
    {
      "category": "Sometimes",
      "frequency": 12,
      "percentage": 50.0
    },
    {
      "category": "Often",
      "frequency": 2,
      "percentage": 8.3
    },
    {
      "category": "Always",
      "frequency": 1,
      "percentage": 4.2
    }
  ],
  "q9": [
    {
      "category": "Strongly Disagree",
      "frequency": 1,
      "percentage": 4.2
    },
    {
      "category": "Disagree",
      "frequency": 0,
      "percentage": 0.0
    },
    {
      "category": "Neutral",
      "frequency": 8,
      "percentage": 33.3
    },
    {
      "category": "Agree",
      "frequency": 8,
      "percentage": 33.3
    },
    {
      "category": "Strongly Agree",
      "frequency": 7,
      "percentage": 29.2
    }
  ],
  "q10": [
    {
      "category": "Strongly Disagree",
      "frequency": 0,
      "percentage": 0.0
    },
    {
      "category": "Disagree",
      "frequency": 0,
      "percentage": 0.0
    },
    {
      "category": "Neutral",
      "frequency": 4,
      "percentage": 16.7
    },
    {
      "category": "Agree",
      "frequency": 8,
      "percentage": 33.3
    },
    {
      "category": "Strongly Agree",
      "frequency": 12,
      "percentage": 50.0
    }
  ],
  "q11": [
    {
      "category": "Strongly Disagree",
      "frequency": 0,
      "percentage": 0.0
    },
    {
      "category": "Disagree",
      "frequency": 1,
      "percentage": 4.2
    },
    {
      "category": "Neutral",
      "frequency": 4,
      "percentage": 16.7
    },
    {
      "category": "Agree",
      "frequency": 12,
      "percentage": 50.0
    },
    {
      "category": "Strongly Agree",
      "frequency": 7,
      "percentage": 29.2
    }
  ],
  "q12": [
    {
      "category": "Strongly Disagree",
      "frequency": 0,
      "percentage": 0.0
    },
    {
      "category": "Disagree",
      "frequency": 1,
      "percentage": 4.2
    },
    {
      "category": "Neutral",
      "frequency": 9,
      "percentage": 37.5
    },
    {
      "category": "Agree",
      "frequency": 11,
      "percentage": 45.8
    },
    {
      "category": "Strongly Agree",
      "frequency": 3,
      "percentage": 12.5
    }
  ],
  "q13": [
    {
      "category": "Strongly Disagree",
      "frequency": 0,
      "percentage": 0.0
    },
    {
      "category": "Disagree",
      "frequency": 4,
      "percentage": 16.7
    },
    {
      "category": "Neutral",
      "frequency": 9,
      "percentage": 37.5
    },
    {
      "category": "Agree",
      "frequency": 9,
      "percentage": 37.5
    },
    {
      "category": "Strongly Agree",
      "frequency": 2,
      "percentage": 8.3
    }
  ],
  "correlation_q4_q5": 0.1128,
  "scatter": [
    {
      "id": "Respondent 01",
      "x": 4.5,
      "y": 4
    },
    {
      "id": "Respondent 02",
      "x": 5,
      "y": 9
    },
    {
      "id": "Respondent 03",
      "x": 2,
      "y": 8
    },
    {
      "id": "Respondent 04",
      "x": 4,
      "y": 10
    },
    {
      "id": "Respondent 05",
      "x": 6,
      "y": 8
    },
    {
      "id": "Respondent 06",
      "x": 2,
      "y": 12
    },
    {
      "id": "Respondent 07",
      "x": 4,
      "y": 5
    },
    {
      "id": "Respondent 08",
      "x": 2,
      "y": 5
    },
    {
      "id": "Respondent 09",
      "x": 6,
      "y": 2
    },
    {
      "id": "Respondent 10",
      "x": 4,
      "y": 8
    },
    {
      "id": "Respondent 11",
      "x": 3,
      "y": 12
    },
    {
      "id": "Respondent 12",
      "x": 2,
      "y": 6
    },
    {
      "id": "Respondent 13",
      "x": 8,
      "y": 12
    },
    {
      "id": "Respondent 14",
      "x": 2.5,
      "y": 6
    },
    {
      "id": "Respondent 15",
      "x": 5,
      "y": 12
    },
    {
      "id": "Respondent 16",
      "x": 6,
      "y": 8
    },
    {
      "id": "Respondent 17",
      "x": 4,
      "y": 6
    },
    {
      "id": "Respondent 18",
      "x": 6,
      "y": 6
    },
    {
      "id": "Respondent 19",
      "x": 5,
      "y": 10
    },
    {
      "id": "Respondent 20",
      "x": 5,
      "y": 8
    },
    {
      "id": "Respondent 21",
      "x": 2.3,
      "y": 1.2
    },
    {
      "id": "Respondent 22",
      "x": 6,
      "y": 12
    },
    {
      "id": "Respondent 23",
      "x": 3.5,
      "y": 12
    },
    {
      "id": "Respondent 24",
      "x": 7.5,
      "y": 5
    }
  ],
  "q4_bins": [
    {
      "label": "2\u20133",
      "count": 6
    },
    {
      "label": "3\u20134",
      "count": 2
    },
    {
      "label": "4\u20135",
      "count": 5
    },
    {
      "label": "5\u20136",
      "count": 4
    },
    {
      "label": "6\u20137",
      "count": 5
    },
    {
      "label": "7\u20138",
      "count": 1
    },
    {
      "label": "8\u20139",
      "count": 1
    }
  ],
  "q5_bins": [
    {
      "label": "0\u20132",
      "count": 1
    },
    {
      "label": "2\u20134",
      "count": 1
    },
    {
      "label": "4\u20136",
      "count": 4
    },
    {
      "label": "6\u20138",
      "count": 4
    },
    {
      "label": "8\u201310",
      "count": 6
    },
    {
      "label": "10\u201312",
      "count": 2
    },
    {
      "label": "12\u201314",
      "count": 6
    }
  ],
  "questionnaire_url": "https://forms.cloud.microsoft/Pages/ResponsePage.aspx?id=AFdmyraDPEOxXFhFOIDK5Q74w3Ne2gFMhMdBtVG3ZkxUM0kzQlFPSVhGS1ZSMkROMlkwM1Y5VkhERy4u",
  "questions": {
    "q4": "On your selected digital device, how many hours do you usually spend using it for school-related activities per day?",
    "q5": "On your selected digital device, how many hours do you usually spend using it for non-school activities per day?",
    "q6": "Which activity do you most often do on your digital device during face-to-face classes?",
    "q7": "How effective is your digital device in helping you accomplish your chosen school-related activity?",
    "q8": "How often does your chosen digital device distract you from focusing during face-to-face classes?",
    "q9": "I am able to stay focused during face-to-face classes even when I have access to my digital device.",
    "q10": "My digital device helps me complete school-related tasks during face-to-face classes.",
    "q11": "I can understand the lesson better when I use my digital device as a learning aid during face-to-face classes.",
    "q12": "I actively participate in classroom discussions and activities during face-to-face learning.",
    "q13": "I get easily distracted when I have my digital device with me during face-to-face classes."
  },
  "likert_order": [
    "Strongly Disagree",
    "Disagree",
    "Neutral",
    "Agree",
    "Strongly Agree"
  ],
  "eff_order": [
    "Very ineffective",
    "Ineffective",
    "Neutral",
    "Effective",
    "Very effective"
  ],
  "dist_order": [
    "Never",
    "Rarely",
    "Sometimes",
    "Often",
    "Always"
  ]
};
