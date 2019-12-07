"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _firebaseAdmin = _interopRequireDefault(require("firebase-admin"));

var functions = _interopRequireWildcard(require("firebase-functions"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

//import functions from 'firebase-functions'
//import * as firebase from 'firebase';
//import serviceAccount from './screens-ab773-firebase-adminsdk-n3ogm-c90150d546.json'
_firebaseAdmin["default"].initializeApp(functions.config().firebase); ///const firesrote = admin.firestore()


function FSStorage() {
  function getDivs(props) {
    console.log("in DB getDivs", props); // Update the search index every time a blog post is written.
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
    console.log("in DB");
  }
}

var _default = FSStorage;
exports["default"] = _default;