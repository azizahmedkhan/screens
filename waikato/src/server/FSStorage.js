import React from 'react';
import admin from 'firebase-admin'
//import functions from 'firebase-functions'
import * as functions from 'firebase-functions'
//import * as firebase from 'firebase';


//import serviceAccount from './screens-ab773-firebase-adminsdk-n3ogm-c90150d546.json'

admin.initializeApp(functions.config().firebase)

///const firesrote = admin.firestore()

function FSStorage() {
 function getDivs(props) {
    console.log("in DB getDivs", props)


    // Update the search index every time a blog post is written.
//exports.onNoteCreated = functions.firestore.document('notes/{noteId}').onCreate((snap, context) => {
  // Get the note document
 // const note = snap.data();

  // Add an 'objectID' field which Algolia requires
 // note.objectID = context.params.noteId;

  // Write to the algolia index
 // const index = client.initIndex(ALGOLIA_INDEX_NAME);
  //return index.saveObject(note);
//});
// [END update_index_function]
 }

 function updateDivs(props) {
    console.log("in DB")
}
}

 

 export default FSStorage;