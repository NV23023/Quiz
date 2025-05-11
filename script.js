const questions = [
  {
    question: "T/F: Generative AI is capable of creating new content such as text, images, and code.",
    options: ["True", "False"],
    answer: "True",
    type: "tf"
  },
  {
    question: "T/F: Generative AI only works with labeled data.",
    options: ["True", "False"],
    answer: "False",
    type: "tf"
  },
  {
    question: "What is a Foundation Model?",
    options: [
      "A) A model trained for a specific task",
      "B) A model trained only on labeled data",
      "C) A large model trained on diverse data for general use",
      "D) A lightweight model for mobile devices"
    ],
    answer: "C) A large model trained on diverse data for general use",
    type: "mcq"
  },
  {
    question: "Which of the following is NOT a Generative AI application?",
    options: [
      "A) Image recognition",
      "B) Text generation",
      "C) Code completion",
      "D) Audio synthesis"
    ],
    answer: "A) Image recognition",
    type: "mcq"
  },
  {
    question: "Foundation Models are typically trained on:",
    options: [
      "A) Small, specific datasets",
      "B) User-generated prompts only",
      "C) A wide range of diverse data",
      "D) Structured SQL tables only"
    ],
    answer: "C) A wide range of diverse data",
    type: "mcq"
  },
  {
    question: "T/F: GPT-4 is an example of a Foundation Model.",
    options: ["True", "False"],
    answer: "True",
    type: "tf"
  },
  {
    question: "Which company does NOT provide a popular foundation model?",
    options: [
      "A) OpenAI",
      "B) Meta",
      "C) Dell",
      "D) Google"
    ],
    answer: "C) Dell",
    type: "mcq"
  },
  {
    question: "What is Amazon Bedrock?",
    options: [
      "A) A video streaming platform",
      "B) A managed database service",
      "C) A fully managed GenAI service for building apps",
      "D) A VM orchestration tool"
    ],
    answer: "C) A fully managed GenAI service for building apps",
    type: "mcq"
  },
  {
    question: "T/F: Amazon Bedrock allows you to fine-tune foundation models without managing servers.",
    options: ["True", "False"],
    answer: "True",
    type: "tf"
  },
  {
    question: "T/F: You can only use Amazon's own models in Bedrock.",
    options: ["True", "False"],
    answer: "False",
    type: "tf"
  },
  {
    question: "Bedrock supports which of the following features?",
    options: [
      "A) Game engine rendering",
      "B) Real-time crypto trading",
      "C) Retrieval-Augmented Generation (RAG)",
      "D) Virtual Reality streaming"
    ],
    answer: "C) Retrieval-Augmented Generation (RAG)",
    type: "mcq"
  },
  {
    question: "Which of the following is NOT a Bedrock feature?",
    options: [
      "A) Fine-tuning models",
      "B) Server provisioning",
      "C) Unified API",
      "D) Out-of-the-box LLM agents"
    ],
    answer: "B) Server provisioning",
    type: "mcq"
  },
  {
    question: "T/F: Fine-tuning modifies the weights of a foundation model.",
    options: ["True", "False"],
    answer: "True",
    type: "tf"
  },
  {
    question: "Instruction-based fine-tuning uses:",
    options: [
      "A) Unstructured raw data",
      "B) Prompt-response labeled pairs",
      "C) Audio-only input",
      "D) Only system prompts"
    ],
    answer: "B) Prompt-response labeled pairs",
    type: "mcq"
  },
  {
    question: "Continued pretraining is useful for:",
    options: [
      "A) Adding system messages",
      "B) Training models from scratch",
      "C) Adapting to a specific domain using unlabeled data",
      "D) Tokenizing prompts"
    ],
    answer: "C) Adapting to a specific domain using unlabeled data",
    type: "mcq"
  },
  {
    question: "T/F: Single-turn messaging uses multiple back-and-forth conversation turns.",
    options: ["True", "False"],
    answer: "False",
    type: "tf"
  },
  {
    question: "T/F: Multi-turn messaging is better for chatbots.",
    options: ["True", "False"],
    answer: "True",
    type: "tf"
  },
  {
    question: "Which fine-tuning method is cheaper and requires less data?",
    options: [
      "A) Continued pretraining",
      "B) Instruction-based fine-tuning",
      "C) From-scratch training",
      "D) Prompt chaining"
    ],
    answer: "B) Instruction-based fine-tuning",
    type: "mcq"
  },
  {
    question: "What is required to store training data for fine-tuning in Bedrock?",
    options: [
      "A) Amazon SQS",
      "B) Amazon Aurora",
      "C) Amazon S3",
      "D) DynamoDB"
    ],
    answer: "C) Amazon S3",
    type: "mcq"
  },
  {
    question: "T/F: All models in Bedrock can be fine-tuned.",
    options: ["True", "False"],
    answer: "False",
    type: "tf"
  },
  {
    question: "What does RAG stand for?",
    options: [
      "A) Real-time Access Gateway",
      "B) Retrieval-Augmented Generation",
      "C) Recursive AI Graph",
      "D) Remote Agent Generator"
    ],
    answer: "B) Retrieval-Augmented Generation",
    type: "mcq"
  },
  {
    question: "T/F: RAG allows a model to access data outside its training set.",
    options: ["True", "False"],
    answer: "True",
    type: "tf"
  },
  {
    question: "Which service helps store document embeddings for RAG in Bedrock?",
    options: [
      "A) Amazon EC2",
      "B) Amazon Redshift",
      "C) Amazon S3 and vector database",
      "D) Amazon Polly"
    ],
    answer: "C) Amazon S3 and vector database",
    type: "mcq"
  },
  {
    question: "T/F: Knowledge Bases are unnecessary when using RAG.",
    options: ["True", "False"],
    answer: "False",
    type: "tf"
  },
  {
    question: "Which of these is NOT a vector database supported by Bedrock RAG?",
    options: [
      "A) Amazon Neptune",
      "B) Amazon EC2",
      "C) Amazon OpenSearch",
      "D) Amazon Aurora"
    ],
    answer: "B) Amazon EC2",
    type: "mcq"
  },
  {
    question: "What is the role of embeddings in RAG?",
    options: [
      "A) Formatting HTML output",
      "B) Tokenizing responses",
      "C) Finding semantic similarity between documents",
      "D) Rendering UI"
    ],
    answer: "C) Finding semantic similarity between documents",
    type: "mcq"
  },
  {
    question: "Tokenization refers to:",
    options: [
      "A) Assigning permissions",
      "B) Splitting text into units for model processing",
      "C) Uploading documents",
      "D) Saving images to S3"
    ],
    answer: "B) Splitting text into units for model processing",
    type: "mcq"
  },
  {
    question: "T/F: The context window defines how many tokens the model can use as input/output.",
    options: ["True", "False"],
    answer: "True",
    type: "tf"
  },
  {
    question: "T/F: Embeddings convert raw text into high-dimensional vectors.",
    options: ["True", "False"],
    answer: "True",
    type: "tf"
  },
  {
    question: "Which of these helps in vector similarity searches?",
    options: [
      "A) Tokenizer",
      "B) Prompt structure",
      "C) Embeddings",
      "D) Guardrails"
    ],
    answer: "C) Embeddings",
    type: "mcq"
  },
  {
    question: "Amazon Bedrock Guardrails help with:",
    options: [
      "A) Hosting APIs",
      "B) Logging GPU usage",
      "C) Filtering harmful content",
      "D) Running SQL queries"
    ],
    answer: "C) Filtering harmful content",
    type: "mcq"
  },
  {
    question: "T/F: Guardrails can be used to remove PII from prompts.",
    options: ["True", "False"],
    answer: "True",
    type: "tf"
  },
  {
    question: "T/F: Guardrails can prevent users from accessing specific topics.",
    options: ["True", "False"],
    answer: "True",
    type: "tf"
  },
  {
    question: "Which is the cheapest model improvement method?",
    options: [
      "A) Instruction-based fine-tuning",
      "B) RAG",
      "C) Domain adaptation fine-tuning",
      "D) Prompt engineering"
    ],
    answer: "D) Prompt engineering",
    type: "mcq"
  },
  {
    question: "What is the correct order from cheapest to most expensive improvement?",
    options: [
      "A) Prompt → RAG → Instruction fine-tuning → Domain fine-tuning",
      "B) RAG → Prompt → Domain → Instruction",
      "C) Instruction → Prompt → Domain → RAG",
      "D) Domain → Prompt → Instruction → RAG"
    ],
    answer: "A) Prompt → RAG → Instruction fine-tuning → Domain fine-tuning",
    type: "mcq"
  },
  {
    question: "T/F: Provisioned throughput is needed for running fine-tuned models in Bedrock.",
    options: ["True", "False"],
    answer: "True",
    type: "tf"
  },
  {
    question: "T/F: Using batch inference in Bedrock can save costs.",
    options: ["True", "False"],
    answer: "True",
    type: "tf"
  },
  {
    question: "T/F: Prompt Engineering is the process of writing optimized instructions for models.",
    options: ["True", "False"],
    answer: "True",
    type: "tf"
  },
  {
    question: "Which of the following is a prompt engineering method?",
    options: [
      "A) Token embedding",
      "B) Batch inference",
      "C) Few-shot prompting",
      "D) Vector pruning"
    ],
    answer: "C) Few-shot prompting",
    type: "mcq"
  },
  {
    question: "In Zero-Shot prompting:",
    options: [
      "A) You provide many examples",
      "B) You train the model from scratch",
      "C) No examples are given; relies on general model knowledge",
      "D) You fine-tune the model before prompting"
    ],
    answer: "C) No examples are given; relies on general model knowledge",
    type: "mcq"
  },
  {
    question: "T/F: Prompt chaining involves multiple connected prompts to guide a task.",
    options: ["True", "False"],
    answer: "True",
    type: "tf"
  },
  {
    question: "Which prompt setting controls randomness in output?",
    options: [
      "A) Length",
      "B) Temperature",
      "C) Stop sequence",
      "D) Top-K"
    ],
    answer: "B) Temperature",
    type: "mcq"
  },
  {
    question: "T/F: A higher temperature value leads to more creative and varied responses.",
    options: ["True", "False"],
    answer: "True",
    type: "tf"
  },
  {
    question: "Few-shot prompting includes:",
    options: [
      "A) No examples",
      "B) Many-shot examples",
      "C) One or more examples to guide the model",
      "D) Fine-tuning scripts"
    ],
    answer: "C) One or more examples to guide the model",
    type: "mcq"
  },
  {
    question: "T/F: Prompt latency is influenced by model size and token count.",
    options: ["True", "False"],
    answer: "True",
    type: "tf"
  },
  {
    question: "T/F: Generative AI is capable of creating new content such as text, images, and code.",
    options: ["True", "False"],
    answer: "True",
    type: "tf"
  },
  {
    question: "LLMs are usually trained on:",
    options: ["Small corpus of test data", "Large corpus of text data", "Small images", "Code"],
    answer: "Large corpus of text data",
    type: "mcq"
  },
  {
    question: "T/F: Smaller models are usually more cost-effective than larger ones.",
    options: ["True", "False"],
    answer: "True",
    type: "tf"
  },
  {
    question: "What needs to be annotated between in a multi-turn environment?",
    options: ["User and Assistant roles", "Number of parameters", "Number of tokens", "Fine-tuned weights"],
    answer: "User and Assistant roles",
    type: "mcq"
  },
  {
    question: "What is a foundation model?",
    options: [
      "A small dataset used to bootstrap machine learning",
      "A specific type of neural network architecture",
      "A model trained on a wide variety of input data",
      "A type of machine learning technique"
    ],
    answer: "A model trained on a wide variety of input data",
    type: "mcq"
  },
  {
    question: "Which of the following is NOT a key feature of Amazon Bedrock?",
    options: [
      "Fully-managed servers",
      "Pay-as-you-go pricing",
      "Direct access to the underlying data used to train the FM",
      "Accessing a wide variety of foundation models"
    ],
    answer: "Direct access to the underlying data used to train the FM",
    type: "mcq"
  },
  {
    question: "Which pricing option is characterized by long-term commitment?",
    options: ["On-demand", "Batch", "Provisioned Throughput", "Committed"],
    answer: "Committed",
    type: "mcq"
  },
  {
    question: "Which RAG use case involves referencing laws, case precedents, and legal opinions?",
    options: [
      "Product Chatbot",
      "Insurance Claims Review",
      "Legal Research and Analysis",
      "Healthcare Question-Answering"
    ],
    answer: "Legal Research and Analysis",
    type: "mcq"
  },
  {
    question: "T/F: 'System' is optional for the conversation in Single-Turn Messaging.",
    options: ["True", "False"],
    answer: "True",
    type: "tf"
  },
  {
    question: "What type of use case is a chatbot designed with a particular persona or tone?",
    options: ["Transfer learning", "Re-training", "Fine-tuning", "All of the above"],
    answer: "Fine-tuning",
    type: "mcq"
  },
  {
    question: "T/F: Generative AI is a subset of Machine Learning.",
    options: ["True", "False"],
    answer: "False",
    type: "tf"
  },
  {
    question: "What kind of messaging involves multi-turn interaction between a user and an assistant?",
    options: ["Continued pre-training", "Knowledge-based messaging", "Chatbot", "Single-turn messaging"],
    answer: "Chatbot",
    type: "mcq"
  },
  {
    question: "What is context window?",
    options: [
      "The number of tokens an LLM can consider when generating text.",
      "The memory size to train the model",
      "The calculation of potential words for alongside probabilities in Generative AI.",
      "The algorithm behind the LLM to make a decision"
    ],
    answer: "The number of tokens an LLM can consider when generating text.",
    type: "mcq"
  },
  {
    question: "Which of the following language-related tasks is fine-tuning not able to perform?",
    options: ["Question Answering", "Translation", "Summarization", "None of the above"],
    answer: "None of the above",
    type: "mcq"
  },
  {
    question: "What is the Watermark detection used for in Amazon Bedrock?",
    options: [
      "Check if an image was generated by Amazon Titan Generator",
      "Check the system's security",
      "Model evaluation",
      "Check if the model use is correct"
    ],
    answer: "Check if an image was generated by Amazon Titan Generator",
    type: "mcq"
  },
  {
    question: "What is Tokenization?",
    options: [
      "Converting text into a sequence of tokens",
      "Turning images into noise",
      "Creating Generative AI model",
      "Model evaluation"
    ],
    answer: "Converting text into a sequence of tokens",
    type: "mcq"
  },
  {
    question: "Which pricing option is characterized by multiple predictions at a time?",
    options: ["Volume discount", "Batch", "On-demand", "Provisioned throughput"],
    answer: "Batch",
    type: "mcq"
  },
  {
    question: "Which of the following methods is useful for re-training a Foundation Model to make the model an expert in a specific domain?",
    options: [
      "Instruction-based Fine-Tuning",
      "None of the above",
      "Transfer Learning",
      "Continued Pre-training"
    ],
    answer: "Continued Pre-training",
    type: "mcq"
  },
  {
    question: "Which is the highest cost when it comes to model improvement techniques?",
    options: [
      "Volume discount",
      "Prompt Engineering",
      "Retrieval Augmented Generation (RAG)",
      "Domain Adaptation Fine-Tuning"
    ],
    answer: "Domain Adaptation Fine-Tuning",
    type: "mcq"
  },
  {
    question: "Which AWS service is primarily used for storing documents in RAG architecture?",
    options: ["Amazon S3", "AWS Lambda", "Amazon DynamoDB", "Amazon RDS"],
    answer: "Amazon S3",
    type: "mcq"
  },
  {
    question: "What does Bedrock Studio offer users?",
    options: [
      "Access to more data",
      "Easy creation of AI-powered applications",
      "Access to faster GPUs",
      "Automatic watermark generation"
    ],
    answer: "Easy creation of AI-powered applications",
    type: "mcq"
  },
  {
    question: "What is the purpose of a vector database in RAG?",
    options: [
      "To manage saved text",
      "To store user input in real-time",
      "To store embeddings for similarity search",
      "To convert prompts into graphs"
    ],
    answer: "To store embeddings for similarity search",
    type: "mcq"
  },
  {
    question: "T/F: Amazon Bedrock handles the creation of vector embeddings automatically.",
    options: ["True", "False"],
    answer: "True",
    type: "tf"
  },
  {
    question: "Words that have a semantic relationship have dissimilar embeddings.",
    options: ["True", "False"],
    answer: "False",
    type: "tf"
  },
  {
    question: "What is Transfer Learning?",
    options: [
      "Re-using a pre-trained model to adapt it to a new related task.",
      "Fine-tuning a specific kind of domain learning",
      "Used for image and NLP tasks",
      "All of the mentioned"
    ],
    answer: "All of the mentioned",
    type: "mcq"
  },
  {
    question: "Which term is how a dimensionality to capture many features for one input token, such as semantic meaning, syntactic role, sentiment.",
    options: ["Embedding", "Tokenization", "Prompt", "Noise"],
    answer: "Embedding",
    type: "mcq"
  },
  {
    question: "T/F: Re-training an FM requires a lower budget compared to instruction-based fine-tuning.",
    options: ["True", "False"],
    answer: "False",
    type: "tf"
  },
  {
    question: "What is an input used for instruction-based fine-tuning?",
    options: ["Response", "Both Prompt and Response", "Prompt", "Neither Prompt nor Response"],
    answer: "Both Prompt and Response",
    type: "mcq"
  },
  {
    question: "Which of the following is not a company that has a Foundation Model available on Amazon Bedrock?",
    options: ["Google", "Amazon", "Meta", "Apple"],
    answer: "Apple",
    type: "mcq"
  },
  {
    question: "What is the primary purpose of a Large Language Model (LLM)?",
    options: [
      "To analyze financial data",
      "To perform complex mathematical calculations",
      "To generate synthetic images",
      "To generate coherent human-like text"
    ],
    answer: "To generate coherent human-like text",
    type: "mcq"
  },
  {
    question: "T/F: Amazon S3 is not compatible with RAG implementations in Amazon Bedrock.",
    options: ["True", "False"],
    answer: "False",
    type: "tf"
  },
  {
    question: "Which of the following does NOT impact latency?",
    options: [
      "A) Model size",
      "B) Number of tokens",
      "C) Temperature",
      "D) Output length"
    ],
    answer: "C) Temperature",
    type: "mcq"
  },
  {
    question: "What is the main benefit of using RAG in a chatbot application?",
    options: [
      "A) Increases hallucination",
      "B) Decreases model training time",
      "C) Adds real-time external knowledge to responses",
      "D) Increases token limits"
    ],
    answer: "C) Adds real-time external knowledge to responses",
    type: "mcq"
  },
  {
    question: "In a RAG setup, the 'Retrieval' text is added to what before sending to the model?",
    options: [
      "A) The query as an augmented prompt",
      "B) The configuration file",
      "C) The training dataset",
      "D) The metadata"
    ],
    answer: "A) The query as an augmented prompt",
    type: "mcq"
  },
  {
    question: "T/F: 'System' is optional for the conversation in Single-Turn Messaging.",
    options: ["True", "False"],
    answer: "True",
    type: "tf"
  },
  {
    question: "What is the broader concept of re-using a pre-trained model to adapt it to a new related task?",
    options: [
      "A) Instruction-based fine-tuning",
      "B) Fine-tuning",
      "C) Adaptation",
      "D) Transfer learning"
    ],
    answer: "D) Transfer learning",
    type: "mcq"
  },
  {
    question: "In a RAG setup, the 'Retrieval' text is added to what before sending to the model?",
    options: [
      "A) The query as an augmented prompt",
      "B) The configuration file",
      "C) The training dataset",
      "D) The metadata"
    ],
    answer: "A) The query as an augmented prompt",
    type: "mcq"
  },
  {
    question: "What is the main benefit of using RAG in a chatbot application?",
    options: [
      "A) Increases hallucination",
      "B) Decreases model training time",
      "C) Adds real-time external knowledge to responses",
      "D) Increases token limits"
    ],
    answer: "C) Adds real-time external knowledge to responses",
    type: "mcq"
  }
];
// Shuffling logic
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

// Create shuffled version of questions and options
let shuffledQuestions = shuffleArray([...questions]).map(q => {
  const correctAnswer = q.answer;
  const shuffledOptions = shuffleArray([...q.options]);
  return {
    ...q,
    options: shuffledOptions,
    answer: shuffledOptions.find(opt => opt === correctAnswer) || correctAnswer
  };
});

let userAnswers = new Array(shuffledQuestions.length).fill(null);
let quizCompleted = false;

function displayQuestions() {
  const quizContainer = document.getElementById('quiz-container');
  const submitButton = document.getElementById('submit-btn');
  const resetButton = document.getElementById('reset-btn');
  
  // Clear previous questions
  quizContainer.innerHTML = '';
  
  shuffledQuestions.forEach((q, index) => {
    const questionDiv = document.createElement('div');
    questionDiv.className = 'question';
    questionDiv.id = `question-${index}`;
    questionDiv.innerHTML = `<h3>${index + 1}. ${q.question}</h3>`;
    
    q.options.forEach((option, optionIndex) => {
      const optionDiv = document.createElement('div');
      optionDiv.className = 'option';
      
      const input = document.createElement('input');
      input.type = q.type === 'tf' ? 'radio' : 'radio';
      input.name = `question-${index}`;
      input.value = option;
      input.id = `question-${index}-${optionIndex}`;
      
      if (userAnswers[index] !== null) {
        input.disabled = true;
        if (userAnswers[index] === option) {
          input.checked = true;
        }
      }
      
      const label = document.createElement('label');
      label.htmlFor = `question-${index}-${optionIndex}`;
      label.textContent = option;
      
      optionDiv.appendChild(input);
      optionDiv.appendChild(label);
      questionDiv.appendChild(optionDiv);
      
      // Add click handler to the entire option div
      optionDiv.addEventListener('click', (e) => {
        if (input.disabled || quizCompleted) return;
        
        input.checked = true;
        userAnswers[index] = input.value;
        
        // Disable other options in this question
        const options = questionDiv.querySelectorAll('input');
        options.forEach(opt => {
          if (opt !== input) {
            opt.disabled = true;
          }
        });
        
        // Show feedback
        const feedback = document.createElement('p');
        feedback.className = 'feedback';
        
        if (userAnswers[index] === q.answer) {
          feedback.textContent = '✅ Correct!';
          feedback.style.color = 'green';
        } else {
          feedback.textContent = `❌ Incorrect. The correct answer is: ${q.answer}`;
          feedback.style.color = 'red';
        }
        
        // Remove previous feedback if exists
        const oldFeedback = questionDiv.querySelector('.feedback');
        if (oldFeedback) {
          questionDiv.removeChild(oldFeedback);
        }
        
        questionDiv.appendChild(feedback);
        
        // Auto-scroll to next question if not last
        if (index < shuffledQuestions.length - 1) {
          const nextQuestion = document.getElementById(`question-${index + 1}`);
          nextQuestion.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      });
    });
    
    quizContainer.appendChild(questionDiv);
  });

  // Handle submit button
  submitButton.addEventListener('click', () => {
    quizCompleted = true;
    submitButton.disabled = true;
    resetButton.disabled = false;

    const score = shuffledQuestions.reduce((acc, q, index) => {
      return acc + (userAnswers[index] === q.answer ? 1 : 0);
    }, 0);

    const resultDiv = document.createElement('div');
    resultDiv.className = 'result';
    resultDiv.innerHTML = `
      <h2>Quiz Completed!</h2>
      <p>You scored ${score} out of ${shuffledQuestions.length}.</p>
      <p>Accuracy: ${(score / shuffledQuestions.length * 100).toFixed(2)}%</p>
    `;
    quizContainer.appendChild(resultDiv);

    // Scroll to results
    resultDiv.scrollIntoView({ behavior: 'smooth' });
  });

  // Handle reset button
  resetButton.addEventListener('click', () => {
    // Reset all quiz state
    userAnswers = new Array(shuffledQuestions.length).fill(null);
    quizCompleted = false;
    
    // Re-shuffle questions and answers
    shuffledQuestions = shuffleArray([...questions]).map(q => {
      const correctAnswer = q.answer;
      const shuffledOptions = shuffleArray([...q.options]);
      return {
        ...q,
        options: shuffledOptions,
        answer: shuffledOptions.find(opt => opt === correctAnswer) || correctAnswer
      };
    });
    
    // Reset UI
    submitButton.disabled = false;
    const resultDiv = document.querySelector('.result');
    if (resultDiv) {
      resultDiv.remove();
    }
    
    // Redisplay questions
    displayQuestions();
    
    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  // Enable/disable submit button based on completion
  const checkCompletion = () => {
    submitButton.disabled = !userAnswers.every(answer => answer !== null) || quizCompleted;
  };
  
  // Initial check
  checkCompletion();
}

// Initialize the quiz when the page loads
window.onload = function() {
  displayQuestions();
};
