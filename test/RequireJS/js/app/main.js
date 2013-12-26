define(["jquery", "jquery.switchable"], function($) {

    $(function() {
	  var Accordion = $('#accordion');

	  Accordion.switchable({
	    triggers: Accordion.find('b'),
	    triggerType: 'click',
	    effect: 'horizAccordion',
	    easing: 'cubic-bezier(.1, .5, .1, 1)',
	    customProps: {
	      width: '40px'
	    },
	    autoplay: true,
	    beforeSwitch: function(event, toIndex) {
	      // if beforeSwitch() returns 'false', the switch event stops
	      return this.index !== toIndex;
	    }
	  });
	});

});