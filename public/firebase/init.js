// Initialize Firebase
const myFirebase = firebase.initializeApp(firebaseConfig);

const myFireStore = myFirebase.firestore();
// let myStorage = myFirebase.storage();

const dataTagLists = myFireStore.collection('tagsList');
const dataProjectsList = myFireStore.collection('projectsList');
const dataContactList = myFireStore.collection('contactList');
const dataEducationsList = myFireStore.collection('educationsList');
const dataSkillsList = myFireStore.collection('skillsList');
const dataStatsList = myFireStore.collection('statsList');

// let tagLists;
// console.log('1');
// console.log(tagLists);

// dataTagLists.get().then((data) => {
//   if (data.docs.length > 0) {
//     tagLists = data.docs.map(data => data.data().tag);
//     console.log('2');
//     console.log(tagLists);
//   } else {
//     console.log('Document doesnt\' exist!');
//   }
//   // console.log(doc)
// }).catch(err => console.log('Error getting document ', err));

// dataProjectsList.get().then((data) => {
//   console.log(data.docs.map(data => data.data()));
// }).catch(err => console.log('Error : ', err));

async function getDataProjects(dataSource) {
  return await dataSource.get().then(data => data.docs.map(doc => doc.data()));
}

// tambahkan data taglist
// tagsList.forEach(tag => {
//   console.log(tag);

// tagsList.forEach(tag => {
//   myFireStore.collection('tagsList').doc(tag).set({
//       tag: tag,
//       type: 'programming'
//     })
//     .then(() => console.log('successfully'))
//     .catch(error => console.log(error));
//   // });
// })

// tambahkan data projects list
// projectsList.forEach(project => {
//   dataProjectsList.add(project)
//     .then(doc => console.log('Project added: ', doc.id))
//     .catch(err => console.log('error: ', err));
// });

// tambahkan data contact list
// for (contact in contactsList) {
//   dataContactList.doc(contact)
//     .set({
//       value: contactsList[contact]
//     })
//     .then(() => console.log('Successfully added contact list: ' + contact))
//     .catch(err => console.log(err))
// }

// educationsList.forEach((edu, index) => {
//   dataEducationsList.doc(edu.type + index)
//     .set(edu)
//     .then(() => console.log('Educations List added: ', edu.type + index))
//     .catch(err => console.log('Error: ', err));
// });

// for (skill in skillsList) {
//   dataSkillsList.doc(skill)
//     .set({
//       list: skillsList[skill]
//     })
//     .then(() => console.log('Skill added: ', skillsList[skill]))
//     .catch(err => console.log('Error: ', err));
// }

// statsList.forEach(stat => {
//   dataStatsList.doc(stat.statName)
//     .set(stat)
//     .then(statName => console.log('Stat added : ', statName))
//     .catch(err => console.log('Error : ', err));
// })