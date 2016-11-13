$(document).ready(function() {
	$( ":button" ).addClass( "mdl-button mdl-js-button" );
	$('#calendar').fullCalendar({
		header: {
			left: 'prev,next today',
			center: 'title',
			right: 'month,agendaWeek,agendaDay,listMonth'
		},
		defaultDate: Date.today,
		navLinks: true, // can click day/week names to navigate views
		businessHours: true, // display business hours
		editable: true,
		events: [
			{
				title: 'Business Lunch',
				start: '2016-09-03T13:00:00',
				constraint: 'businessHours'
			},
			{
				title: 'Meeting',
				start: '2016-11-12T11:00:00',
				constraint: 'availableForMeeting', // defined below
				color: '#257e4a'
			},
			{
				title: 'Conference',
				start: '2016-11-12',
				end: '2016-09-20'
			},
			{
				title: 'Party',
				start: '2016-09-29T20:00:00'
			},

			// areas where "Meeting" must be dropped
			{
				id: 'availableForMeeting',
				start: '2016-09-11T10:00:00',
				end: '2016-09-11T16:00:00',
				rendering: 'background'
			},
			{
				id: 'businessHours',
				start: '2016-11-12T10:00:00',
				end: '2016-11-12T16:00:00',
				rendering: 'background'
			},

			// red areas where no events can be dropped
			{
				start: '2016-09-24',
				end: '2016-09-28',
				overlap: false,
				rendering: 'background',
				color: '#ff9f89'
			},
			{
				title: "Test from ",
				start: '2016-11-12',
				end: '2016-11-14',
				overlap: false,
				rendering: 'background',
				color: '#ff9f89'
			}
		]
	});
	
});

$( ":button" ).addClass( "mdl-button mdl-js-button" );
