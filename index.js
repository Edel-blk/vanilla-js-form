let user = {
  name: '',
  email: '',
  topics: []
}

const TOPICS = {
  "software": 'Software Development',
  "experience": 'User Experience',
  "design": 'Graphic Design'
}

function confirm() {

}

function software() {
  const button = document.getElementById('software-bttn');
  user.topics.push('software');
  return false;
}

function userExperience() {
  const button = document.getElementById('experience-bttn');
  user.topics.push('experience');
  return false;
}

function graphicDesign() {
  const button = document.getElementById('design-bttn');
  user.topics.push('design');
  return false;
}

(function(){
  window.onload = () => {
    const register = document.getElementById('register');
    const topics = document.getElementById('topics');
    const summary = document.getElementById('summary');

    register.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;

      user.name = name;
      user.email = email;

      register.classList.add('not-show');
      topics.classList.remove('not-show');
    });

    topics.addEventListener('submit', (e) => {
      e.preventDefault();
      topics.classList.add('not-show');
      summary.classList.remove('not-show');

      const name = document.getElementById('userName');
      name.textContent = ` ${user.name}`;

      const email = document.getElementById('userEmail');
      email.textContent = ` ${user.email}`;

      const topicsList = document.getElementById('topics-list');
      user.topics.forEach((topic) => {
        var li = document.createElement("li");
        li.appendChild(document.createTextNode(TOPICS[topic]));
        console.log(li);
        topicsList.appendChild(li);
      })

      console.log(topicsList)
    });

    summary.addEventListener('submit', (e) => {
      console.log('bye');
    })
    
  };
}());