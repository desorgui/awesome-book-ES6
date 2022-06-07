/*eslint-disable */
export const navigation = () => {
  const list = document.getElementById('list');
  const addNew = document.getElementById('add-new');
  const contact = document.getElementById('contact-nav');
  const listSection = document.getElementById('books');
  const addSection = document.getElementById('add-books');
  const contactSection = document.getElementById('contact');
  
  list.addEventListener('click', () => {
    listSection.style.display = 'block';
    addSection.style.display = 'none';
    contactSection.style.display = 'none';
    list.classList.add('active');
    addNew.classList.remove('active');
    contact.classList.remove('active');
  });

  addNew.addEventListener('click', () => {
    addSection.style.display = 'block';
    listSection.style.display = 'none';
    contactSection.style.display = 'none';
    list.classList.remove('active');
    addNew.classList.add('active');
    contact.classList.remove('active');
  });
    
  contact.addEventListener('click', () => {
    contactSection.style.display = 'block';
    listSection.style.display = 'none';
    addSection.style.display = 'none';
    list.classList.remove('active');
    addNew.classList.remove('active');
    contact.classList.add('active');
  });
}