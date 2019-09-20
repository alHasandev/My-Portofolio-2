// var swiper = new Swiper('.swiper-container', {
//   pagination: {
//     el: '.swiper-pagination',
//     dynamicBullets: true,
//   },
// });

// prepare global variables
let formalLine, informalLine;


// function // program to exucuted when initialize
function init() {


  const swiper = new Swiper('.swiper-container', {
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },
    hashNavigation: {
      watchState: true,
    },
    speed: 600,
    effect: 'cube',
    grabCursor: true,
    cubeEffect: {
      shadow: false,
      slideShadows: true,
      shadowOffset: 20,
      shadowScale: 0.94,
    },
    pagination: {
      el: '.swiper-pagination',
      dynamicBullets: true
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });


  const swiperContainer = selectElement('.swiper-container');

  // prepare HTML Element References
  const menuFilterProject = selectElement('#project > nav > ul');
  const projectContainer = selectElement('#projects-list');

  // prepare HTML References 
  const profileSection = selectElement('#profile');
  const statistic = selectElement('.statistic');
  const contact = selectElement('[data-hash="contact"]');
  const skill = selectElement('[data-hash="skill"]');
  const edu = selectElement('[data-hash="education"]');


  // profile cards handler

  // render html contact card to contact card
  // profile.renderContacstCard(contact);
  // console.log(contact);

  // render html statistic card to .statistic
  // profile.renderEduCard(edu, setLineThrought);

  // render html statistic card to .statistic
  // profile.renderStatsCard(statistic);

  // render html skills card to .skill card
  // profile.renderSkillsCard(skill);

  // console.log(formalEducation);

  // render html menu filter
  // project.renderFilterMenu(menuFilterProject);

  let newProject, dataContact, dataEdu, dataSkill, dataStat, totalProject;

  getDataProjects(dataTagLists).then(dataTag => {
    let tagList = dataTag.map(data => data.tag);
    getDataProjects(dataProjectsList).then(dataProject => {
      newProject = new Project(dataProject, tagList);
      // console.log(newProject);
      newProject.renderFilterMenu(menuFilterProject);

      // render project list to html
      newProject.renderFilteredProject(projectContainer);
    })
  })

  getDataProjects(dataContactList).then(contacts => {
    // contacts = contacts.map(contact => {
    //   let obj = {};
    //   obj[contact.field] = contact.value;
    //   return obj;
    // });

    dataContact = {};
    contacts.forEach(contact => {
      dataContact[contact.field] = contact.value;
    })

    // console.log(dataContact);
  });

  getDataProjects(dataEducationsList).then(edus => {
    // console.log(edus);
    dataEdu = edus;
  });

  getDataProjects(dataSkillsList).then(skills => {
    dataSkill = {
      ...skills[0],
      ...skills[1],
      ...skills[2]
    }

    // console.log(dataSkill);
  });

  let newProfile;

  getDataProjects(dataStatsList).then(stats => {
    // console.log(stats);
    dataStat = stats;

    newProfile = new Profile(dataContact, dataEdu, dataSkill, dataStat, 8);

    // // render html contact card to contact card
    newProfile.renderContacstCard(contact);
    // console.log(contact);

    // // render html statistic card to .statistic
    newProfile.renderEduCard(edu, setLineThrought);

    // // render html statistic card to .statistic
    newProfile.renderStatsCard(statistic);

    // // render html skills card to .skill card
    newProfile.renderSkillsCard(skill);

  });


  // listen to event

  swiperContainer.addEventListener('mouseover', (ev) => {
    if (swiper.autoplay.running) {
      // stop autoplay
      swiper.autoplay.stop();
    }
  });

  // mouse hover event on swiper container
  swiperContainer.addEventListener('mouseleave', (ev) => {
    if (!swiper.autoplay.running) {
      swiper.autoplay.start();
      // console.log(ev);
    }
  });

  // swiper.autoplay.stop();

  menuFilterProject.addEventListener('click', (ev) => {
    // prepare Html References
    const filterNone = menuFilterProject.querySelector('[data-tag="all"]');
    let target = ev.target;
    // console.log(parent);

    if (target.matches('.tag-filter')) {
      ev.preventDefault();

      // get dataset tag
      let tag = ev.target.dataset.tag;

      // if dataset tag === 'all' then remove all filter tags
      if (tag === 'all') {
        newProject.filterTags = [];

      } else {
        // remove class active if already have / vise versa
        if (target.classList.contains('active')) {
          // remove filter tag to newProject filter tags
          newProject.removeFilterTag(tag);

          // remove class active of selected element
          target.classList.remove('active');
        } else {
          // add filter tag to newProject filter tags
          newProject.addFilterTag(tag);

          // add class active of selected element
          target.classList.add('active');
        }
      }

      // get active marked tags
      let activeMarkeds = menuFilterProject.querySelectorAll('a.tag-filter.active');

      // get total filter tags and total active marked tag
      let countFilter = newProject.filterTags.length;
      let countActive = activeMarkeds.length;

      // if there is no filter tags then mark active menu 'all' and remove else menu mark active
      if (countFilter === 0) {
        filterNone.classList.add('active');
        for (let i = 0; i < countActive; i++) {
          activeMarkeds[i].classList.remove('active');
        }
      } else {
        filterNone.classList.remove('active');
      }

      // console.log(project.filterByTags());
      // re-render project list
      // render to html
      newProject.renderFilteredProject(projectContainer);
    }
  });

  // hash change event on global context
  window.onhashchange = ev => hashChanged(ev);




  if (location.hash) {
    hashChanged();
  }

  // list to event click on profile section
  profileSection.addEventListener('click', function (ev) {
    if (ev.target.matches('.educations-list input')) {
      // console.log(ev.target);
      // reset height of line 
      formalLine.resetLineHeight();
      informalLine.resetLineHeight();
    }

    if (ev.target.matches('.edu-title')) {
      selectElementAll('.edu-title').forEach(el => el.classList.remove('clicked'));
      ev.target.classList.add('clicked');
    }
  });

}

// function / hashChanged
function hashChanged(ev) {
  let hash = location.hash;

  const menuProfile = selectElement('#profile > nav > ul');

  // call menuPointer function
  menuPointer(hash, menuProfile);
}

function setLineThrought() {
  let formalEducation = selectElement('.formal > .educations-list');
  let informalEducation = selectElement('.informal > .educations-list');
  formalLine = new LineThrought(formalEducation);
  informalLine = new LineThrought(informalEducation);

  // initiate basic style form formal line
  formalLine.basicStyle();
  informalLine.basicStyle();
  // console.log(formalLine);
}


document.addEventListener('DOMContentLoaded', () => {
  // initialize program
  init();
})