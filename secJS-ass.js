var arryofarticle = [
  {
    author: "--Mark Twain",
    content: "“ If you tell the truth, you do not have to remember anything.”",
  },

  {
    author: "--Mahatma Gandhi",
    content:
      "“Live as if you were to die tomorrow. Learn as if you were to live forever.”",
  },

  {
    author: "--Marcus Tullius Cicero",
    content: "“A room without books is like a body without a soul.”",
  },

  {
    author: "--Mae West",
    content: "“You only live once, but if you do it right, once is enough.”",
  },

  {
    author: "--Stephen Chbosky",
    content: "“We accept the love we think we deserve.”",
  },

  {
    author: "--J.K Rowling",
    content: "“It does not do to dwell on dreams and forget to live.”",
  },
];

var usedArticles = [];

function randomArticle() {
  
  if (usedArticles.length === arryofarticle.length) {
    usedArticles = [];
  }

  var randomIndex;

  for (var i = 0; i < 1; i++) {
    while (true) {
      randomIndex = Math.floor(Math.random() * arryofarticle.length);
      if (!usedArticles.includes(randomIndex)) {
        break;
      }
    }
    document.getElementById("contentOut").innerHTML =  arryofarticle[randomIndex].content;
    document.getElementById("authorOut").innerHTML =  arryofarticle[randomIndex].author;

    usedArticles.push(randomIndex);
  }
}

