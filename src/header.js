import headImage from './assets/images/headImage.png';

const leftContainer = () => {
  const lc = document.createElement('div');
  const heading = document.createElement('h1');
  const description = document.createElement('p');
  const cta = document.createElement('button');

  lc.classList.add('leftHead');

  heading.innerText = 'We Serve Love from the Ocean';
  description.innerText = 'There is no better dish than the one prepared instantly especially for you. That is the specialty of SEA DELICACIES';

  cta.innerText = 'Menu';

  lc.appendChild(heading);
  lc.appendChild(description);
  lc.appendChild(cta);
  return lc;
};

const rightContainer = () => {
  const rc = document.createElement('div');

  rc.classList.add('rightHead');

  const image = new Image();
  image.src = headImage;

  rc.appendChild(image);

  return rc;
};

const header = () => {
  const head = document.createElement('div');

  head.classList.add('header');

  head.appendChild(leftContainer());
  head.appendChild(rightContainer());

  return head;
};

export default header;