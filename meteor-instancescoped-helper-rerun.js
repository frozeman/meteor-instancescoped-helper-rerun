if (Meteor.isClient) {


  Template.exampleTemplate.sessionHelper = function(){ //guid){
    return Session.get('setHelper');
  };


  Template.exampleTemplate.sessionHelperGuid = function(guid){

    // getting the session with the templates guid, which we got as parameter of the helper.
    return Session.get('setHelper'+ guid);
  };



  Template.exampleTemplate.events({
    'click button.session': function(e, template){
      // just setting the session
      Session.set('setHelper', Math.random(0,99));
    },
    'click button.guid': function(e, template){
      // setting the sessiona and adding the GUID to the session key
      Session.set('setHelper'+ template.__component__.guid, Math.random(0,99));
    }
  });
}
