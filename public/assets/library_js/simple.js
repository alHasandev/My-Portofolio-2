function htmltag({
  tag,
  classNames,
  attributes,
  innerHtml
}, closeTag = true) {

  classNames = classNames ? 'class="' + getStringOf(classNames) + '"' : null;

  let attrs = '';
  if (attributes != undefined) {
    for (let attr in attributes) {
      // skip if property not belong to attibutes object / is from its prototype
      if (!attributes.hasOwnProperty(attr)) continue;
      // else
      attrs += attr + '="' + attributes[attr] + '" ';
    }
  }
  innerHtml = getStringOf(innerHtml);

  return `<${tag} ${classNames !== null ? classNames : null} ${attrs}>${innerHtml}` + (closeTag ? `</${tag}>` : '');
}

function getStringOf(listItems) {
  return listItems != undefined ? (Array.isArray(listItems) ? listItems.join(' ') : listItems) : '';
}

function selectElement(element) {
  return document.querySelector(element);
}

function selectElementAll(element) {
  return document.querySelectorAll(element);
}

// function / change marked menu link
function menuPointer(hash, parent) {
  // get HTML Element References of parent
  let allLink = parent.querySelectorAll('a');
  let target = parent.querySelector(`a[href="${hash}"`);

  // remove class active from all menu link
  allLink.forEach(link => {
    link.classList.remove('active');
  });

  // add class active for clicked link / target click
  target.classList.add('active');
  // console.log(parent.querySelector(`a[href="${hash}"`));
}

// function / marking choosed menu filter project list
// function setMarkedMenu(selectedMenu) {

// }

function LineThrought(element) {
  this.element = element
  // get last child of element
  this.lastChild = this.element.lastElementChild;
  // console.log(this.lastChild);

  // get number of list item on education list
  // let totalFormal = formalEducation.childElementCount;
  // console.log(this.lastChild.offsetTop);

  // add line in education list
  this.lineThroughtHtml = document.createElement('DIV');
  // console.log(this.lineThroughtHtml);
}
// add style to timeLineHtml
LineThrought.prototype.basicStyle = function () {
  // let style = this.lineThroughtHtml.style;
  this.lineThroughtHtml.style.position = 'absolute';
  this.lineThroughtHtml.style.top = '4px';
  this.lineThroughtHtml.style.left = '6px';
  this.lineThroughtHtml.style.width = '0';
  this.lineThroughtHtml.style.border = '1px solid';
  this.lineThroughtHtml.style.borderColor = '#62646a';
  this.lineThroughtHtml.style.height = '21px';
  this.lineThroughtHtml.style.height = this.lastChild.offsetTop + 'px';
  // console.log(this.lineThroughtHtml);
  this.element.insertAdjacentElement('afterbegin', this.lineThroughtHtml);
}

// re-set line height
LineThrought.prototype.resetLineHeight = function () {
  this.lineThroughtHtml.style.height = this.lastChild.offsetTop + 'px';
  // console.log(this.lineThroughtHtml);
  this.element.insertAdjacentElement('afterbegin', this.lineThroughtHtml);
}

function renderHtml(htmlElementList, container, isOveride = true) {
  // get string of all htmlElementList
  let stringHtml = getStringOf(htmlElementList);

  // overide or just adding new element
  if (isOveride) container.innerHTML = stringHtml;
  else container.innerHTML += stringHtml;
}