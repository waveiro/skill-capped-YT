const metaViewport = document.querySelector('meta[name="viewport"]');
metaViewport.setAttribute('content', 'width=device-width,initial-scale=1');

const mainContent = document.querySelector('.mainContent');
mainContent.style.display = 'flex';

const headerImage = document.querySelector('.header-image');
headerImage.remove();

const documentFragment = document.createDocumentFragment();

const newSection = document.createElement('div');
newSection.classList.add('new-section');
documentFragment.append(newSection);

const community = document.querySelector('.community');
newSection.append(community);

const sidebar = document.querySelector('.sidebar');
newSection.append(sidebar);

const componentLessonItem = document.querySelector('.component-LessonItem');
componentLessonItem.append(newSection);


