// prepare dummy data
// const tagsList = [
//   'HTML',
//   'CSS',
//   'JavaScript',
//   'PHP',
//   'MySQL',
//   'NodeJS'
// ];

// const projectsList = [{
//     title: 'Web E-Commerce',
//     tags: [
//       'HTML',
//       'CSS',
//       'PHP'
//     ],
//     image: './assets/images/projects/E-commerce-admin-panel.png',
//     link: 'link on click'
//   },
//   {
//     title: 'Web E-Commerce',
//     tags: [
//       'HTML',
//       'CSS',
//       'JavaScript'
//     ],
//     image: './assets/images/projects/RetailShopz-Dashboard.png',
//     link: 'link on click'
//   },
//   {
//     title: 'Web E-Commerce',
//     tags: [
//       'HTML',
//       'MySQL',
//       'PHP'
//     ],
//     image: './assets/images/projects/pos.jpg',
//     link: 'link on click'
//   },
//   {
//     title: 'Web E-Commerce',
//     tags: [
//       'HTML',
//       'MySQL',
//       'PHP'
//     ],
//     image: './assets/images/projects/super-admin-design.png',
//     link: 'link on click'
//   },
// ]

// const contactsList = {
//   image: './assets/images/avatars/Profile_Bg_Transparent_mini.png',
//   fullName: 'Mohamad Albie',
//   occupation: [
//     'Web Developer',
//     'Tech Enthusiast',
//     'Student of Informatics Engineering'
//   ],
//   address: 'Jl. Mahoni, Kel. Sungai Andai, Kota Banjarmasin, Indonesia, 70122.',
//   email: 'mohamad9albie@gmail.com',
//   phone: '+62 821 4925 9826',
//   github: 'alHasan99dev',
//   aboutMe: 'Hello my name is Mohamad Albie, i am a web developer, currently in college, can collaborate in web development related part time job or remote project. Knowledge and experience in HTML5, CSS3, JavaScript, PHP, MySQL, CodeIgniter, Laravel, and Bootstrap 3/4. Contact me if you are interested in my work.'
// };

// const educationsList = [{
//     schoolName: 'SD Negeri 1 Tabukan',
//     schoolDetail: 'Barito Kuala, South Kalimantan.',
//     graduatedYear: '2010',
//     type: 'formal'
//   },
//   {
//     schoolName: 'SMP Negeri 1 Tabukan',
//     schoolDetail: 'Barito Kuala, South Kalimantan.',
//     graduatedYear: '2013',
//     type: 'formal'
//   },
//   {
//     schoolName: 'SMK Negeri 5 Banjarmasin',
//     schoolDetail: 'Computer Network Engineering, Banjarmasin City, South Kalimantan.',
//     graduatedYear: '2016',
//     type: 'formal'
//   },
//   {
//     schoolName: 'Universitas Islam Kalimantan',
//     schoolDetail: 'S1 - Informatics Engineering, Banjarmasin City, South Kalimantan.',
//     graduatedYear: 'Currently',
//     type: 'formal'
//   },
//   {
//     schoolName: 'SKKNI Kominfo Banjarbaru',
//     schoolDetail: 'Junior Programming, Banjarbaru City, South Kalimantan.',
//     graduatedYear: '2019',
//     type: 'informal'
//   },
//   {
//     schoolName: 'VSGA Digitalent Kominfo',
//     schoolDetail: 'Junior Web Developer, Poliban, South Kalimantan.',
//     graduatedYear: '2019',
//     type: 'informal'
//   },
// ];

// const skillsList = {
//   programming: [
//     'HTML',
//     'CSS',
//     'JavaScript',
//     'PHP',
//     'MySQL',
//     'Bootstrap',
//     'CodeIgniter',
//     'Laravel'
//   ],
//   officeTool: [
//     'SketchUp',
//     'MS Office',
//     'Photoshop CS6',
//     'Adobe XD',
//     'Pencils'
//   ],
//   languages: [{
//       language: 'English',
//       fluency: 'passive'
//     },
//     {
//       language: 'Indonesia',
//       fluency: 'active'
//     }
//   ]
// }

// const statsList = [{
//     statName: 'HTML',
//     statValue: 100,
//   },
//   {
//     statName: 'CSS',
//     statValue: 85,
//   },
//   {
//     statName: 'JavaScript',
//     statValue: 80,
//   },
//   {
//     statName: 'PHP',
//     statValue: 75,
//   },
//   {
//     statName: 'MySQL',
//     statValue: 56,
//   },
//   {
//     statName: 'NodeJS',
//     statValue: 20,
//   },
//   {
//     statName: 'Java Netbean',
//     statValue: 40,
//   },
//   {
//     statName: 'Codeigniter',
//     statValue: 62,
//   },
//   {
//     statName: 'Laravel',
//     statValue: 47,
//   }
// ]

// virtual DOM

const anchor = (href, text, addAttr) => {
  addAttr = addAttr ? addAttr : {};
  return htmltag({
    tag: 'a',
    attributes: {
      href,
      ...addAttr,
    },
    innerHtml: text,
  });
}

const image = (src) => htmltag({
  tag: 'img',
  attributes: {
    src: src
  }
}, false);

const tag = (text, filterTags) => {
  let classes = ['tag'];

  // set filter tags to lowercase
  filterTags = filterTags.map(tag => tag.toLowerCase());

  // f tag include filter tags then add class searched
  if (filterTags.includes(text.toLowerCase())) classes.push('searched');

  return htmltag({
    tag: 'span',
    classNames: classes,
    innerHtml: text
  });
}

const projectCard = (imgSrc, tags, filterTags) => {
  tags = tags.map(text => tag(text, filterTags));

  return htmltag({
    tag: 'div',
    classNames: [
      'card',
      'mini',
    ],
    innerHtml: [
      htmltag({
        tag: 'div',
        classNames: [
          'card-image'
        ],
        innerHtml: image(imgSrc)
      }),
      htmltag({
        tag: 'div',
        classNames: [
          'card-desc'
        ],
        innerHtml: tags
      })
    ]
  })
}

const title = (tag, text, pre = '') => {
  return htmltag({
    tag,
    classNames: pre + 'title',
    innerHtml: text
  });

}

const cardSet = (pos, innerHtml) => {
  return htmltag({
    tag: 'div',
    classNames: pos,
    innerHtml: innerHtml
  });
}

const rowLine = () => htmltag({
  tag: 'hr',
  innerHtml: ''
}, false);

const button = (type, text, classes = '') => {
  let utilClass = Array.isArray(classes) ? classes.join(' ') : classes;
  return htmltag({
    tag: 'button',
    classNames: [
      'btn',
      'btn-' + type,
      utilClass
    ],
    innerHtml: text
  });
}

const info = (infoName, infoValue) => {
  return htmltag({
    tag: 'div',
    classNames: 'info',
    innerHtml: [
      htmltag({
        tag: 'div',
        classNames: 'info-name',
        innerHtml: infoName
      }),
      htmltag({
        tag: 'div',
        classNames: 'info-value',
        innerHtml: infoValue
      }),
    ],
  })
}

const contactCard = (profileImage, fullName, occupation, contact) => {
  return cardSet('card-header', [
      htmltag({
        tag: 'div',
        classNames: 'image-avatar',
        innerHtml: image(profileImage)
      }),
      title('h2', fullName),
      title('p', occupation.join(', '), 'sub-'),
      anchor('https://wa.me/6282149259826', 'Contact Me', {
        class: 'btn btn-primary w-100',
        target: '_blank',
      }),
    ]) +
    rowLine() +
    cardSet('card-body', [
      info('Address', contact.address),
      info('Email', contact.email),
      info('Phone', contact.phone),
      info('Github', contact.github),
    ]) +
    cardSet('card-footer', '');
}

const list = (classes, arrayList) => {
  let list = arrayList.map(list => '<li>' + list + '</li>');
  return htmltag({
    tag: 'ul',
    classNames: classes,
    innerHtml: list
  });
}

const input = (type, name, classes, attributes) => {
  return htmltag({
    tag: 'input',
    classNames: classes,
    attributes: {
      type: type,
      name: name,
      ...attributes
    }
  }, false)
}

const label = (forId, text) => {
  return htmltag({
    tag: 'label',
    attributes: {
      for: forId
    },
    innerHtml: text
  })
}

const schoolDesc = (schoolInfo, schoolDetail) => {
  return htmltag({
    tag: 'div',
    classNames: 'school-desc',
    innerHtml: [
      htmltag({
        tag: 'div',
        classNames: 'school-info',
        innerHtml: schoolInfo
      }),
      htmltag({
        tag: 'div',
        classNames: 'school-detail',
        innerHtml: schoolDetail
      })
    ]
  })
}

const eduInfo = (educations) => {
  let eduLen = educations.length;
  let result = educations.map((edu, index) => {

    let checkEdu = input('radio', edu.type, 'edu-check', {
      id: edu.type + '-' + index
    });

    if (eduLen === index + 1) {
      checkEdu = input('radio', edu.type, 'edu-check', {
        id: edu.type + '-' + index,
        checked: 'checked'
      });
    }

    return htmltag({
      tag: 'li',
      innerHtml: [
        checkEdu,
        label(edu.type + '-' + index, [
          htmltag({
            tag: 'span',
            classNames: 'graduated-year',
            innerHtml: edu.graduatedYear
          }),
          schoolDesc(edu.schoolName, edu.schoolDetail)
        ])
      ]
    });
  })

  return result;

}

const eduCard = (aboutMe, formalEdu, informalEdu) => {
  return cardSet('card-body about-me', [
      title('h3', 'About Me'),
      htmltag({
        tag: 'p',
        innerHtml: aboutMe
      }),
    ]) +
    rowLine() +
    cardSet('card-footer', [
      title('h3', 'Educations'),
      htmltag({
        tag: 'div',
        classNames: 'formal',
        innerHtml: [
          htmltag({
            tag: 'h4',
            classNames: [
              'sub-title',
              'edu-title',
              'clicked'
            ],
            innerHtml: 'Formal',
          }),
          htmltag({
            tag: 'ul',
            classNames: 'educations-list',
            innerHtml: eduInfo(formalEdu)
          })
        ]
      }),
      htmltag({
        tag: 'div',
        classNames: 'informal',
        innerHtml: [
          htmltag({
            tag: 'h4',
            classNames: [
              'sub-title',
              'edu-title'
            ],
            innerHtml: 'informal',
          }),
          htmltag({
            tag: 'ul',
            classNames: 'educations-list',
            innerHtml: eduInfo(informalEdu)
          })
        ]
      })
    ]);
}

const langs = (language) => {
  return htmltag({
    tag: 'li',
    innerHtml: [
      htmltag({
        tag: 'span',
        classNames: 'language',
        innerHtml: language.language
      }),
      htmltag({
        tag: 'span',
        classNames: 'fluency',
        innerHtml: '- ' + language.fluency
      })
    ]
  })
}

const skillsCard = (programmingSkills, officeSkills, languages) => {
  return cardSet('card-body', [
      title('h3', 'Skills'),
      list('skills-list', programmingSkills),
      list('skills-list', officeSkills)
    ]) +
    rowLine() +
    cardSet('card-footer', [
      title('h3', 'Languages'),
      htmltag({
        tag: 'ul',
        innerHtml: languages.map(langs)
      })
    ]);
}

const statBar = (statValue) => {
  return htmltag({
    tag: 'div',
    classNames: [
      'stat-bar'
    ],
    innerHtml: htmltag({
      tag: 'div',
      classNames: [
        'bar-border'
      ],
      innerHtml: htmltag({
        tag: 'div',
        classNames: [
          'bar-length'
        ],
        attributes: {
          style: `width: ${statValue}%; border-color: rgba(29, 191, 115, ${statValue/100})`
        },
        innerHtml: ''
      })
    })
  })
}

const statCard = (statName, statValue) => {
  return htmltag({
    tag: 'li',
    innerHtml: [
      htmltag({
        tag: 'div',
        classNames: [
          'stat-name'
        ],
        innerHtml: statName
      }),
      htmltag({
        tag: 'div',
        classNames: [
          'stat-value'
        ],
        innerHtml: statValue
      }),
      statBar(statValue)
    ]
  })
}

const filterList = (tag) => {
  return htmltag({
    tag: 'li',
    innerHtml: htmltag({
      tag: 'a',
      classNames: 'tag-filter',
      attributes: {
        'data-tag': tag.toLowerCase()
      },
      innerHtml: tag
    })
  });
}

// create mutable virtual data object
function Project(projecstList, tagsList) {
  this.tagsList = tagsList;
  this.projectsList = projecstList;
  this.filterTags = [];
}

// set renderHtml method
Project.prototype.renderHtml = renderHtml

// set prototype method of Project
Project.prototype.addFilterTag = function (tag) {
  this.filterTags.push(tag);
};

Project.prototype.removeFilterTag = function (choosedTag) {
  this.filterTags = this.filterTags.filter(tag => tag.toLowerCase() !== choosedTag.toLowerCase());
}

Project.prototype.addFiltersTags = function (tags) {
  this.filterTags.push(...tags);
}

Project.prototype.filterByTags = function () {
  return this.projectsList.filter(project => {

    // get the lowercase project tags & filter tags
    let tags = project.tags.map(tag => tag.toLowerCase());
    let filterTags = this.filterTags.map(tag => tag.toLowerCase());

    // get matches project tags with filter tags
    let matches = tags.filter(tag => filterTags.includes(tag));

    // get total number of filter tags and matches project tags
    let totalFilter = filterTags.length;
    let totalMatches = matches.length;

    // check if total matches tags greater or equal than total filter tags
    // if (totalMatches >= totalFilter) return true;
    // else return false;
    return (totalMatches >= totalFilter);
  });
}

// render filtered project to html container
Project.prototype.renderFilteredProject = function (container) {
  this.renderHtml(getProjectCards(this.filterByTags(), this.filterTags), container);
}

Project.prototype.renderFilterMenu = function (container) {
  this.renderHtml(getMenuFilter(this.tagsList), container, false);
}

// Profile Class
function Profile(contactsList, educationsList, skillsList, statsList, totalProjects) {
  this.profileImage = contactsList.image;
  this.aboutMe = contactsList.aboutMe;
  this.fullName = contactsList.fullName;
  this.occupation = contactsList.occupation;
  this.contact = {
    address,
    email,
    phone,
    github
  } = contactsList;
  this.formalEducations = this.getBy(educationsList, {
    name: 'type',
    value: 'formal'
  });
  this.informalEducations = this.getBy(educationsList, {
    name: 'type',
    value: 'informal'
  });
  this.programmingSkills = skillsList.programming;
  this.officeSkills = skillsList.officeTool;
  this.languages = skillsList.languages;
  this.statsList = statsList;
  this.totalProjects = totalProjects;
}

Profile.prototype.getBy = (array, filter, limit) => {
  return array.filter(arr => arr[filter.name] == filter.value);
}

Profile.prototype.renderHtml = renderHtml

Profile.prototype.renderContacstCard = function (container) {
  this.renderHtml(contactCard(this.profileImage, this.fullName, this.occupation, this.contact), container);
}

Profile.prototype.renderEduCard = function (container, callback) {
  this.renderHtml(eduCard(this.aboutMe, this.formalEducations, this.informalEducations), container);
  callback();
}

Profile.prototype.renderSkillsCard = function (container) {
  this.renderHtml(skillsCard(this.programmingSkills, this.officeSkills, this.languages), container);
}

Profile.prototype.renderStatsCard = function (container) {
  this.renderHtml(getStatCards(this.statsList), container);
  selectElement('#total-project').innerHTML = this.totalProjects;
}

// library / functions
// function createElement(object) {
//   htmltag()
// }

// initiate new Project
// const project = new Project(projectsList, tagsList); 
// const profile = new Profile(contactsList, educationsList, skillsList, statsList, 150);

function getProjectCards(projectsList, filterTags) {
  return projectsList.map(project => projectCard('./assets/images/projects/' + project.image, project.tags, filterTags));
}

function getStatCards(statsList) {
  return statsList.map(stat => statCard(stat.statName, stat.statValue));
}

// practice
function getEduCard(profile) {
  return eduCard(profile.aboutMe, profile.formalEducations, profile.informalEducations);
}

function getMenuFilter(tagsList) {
  return tagsList.map(tag => filterList(tag));
}