function meetingsScheduler(meetings) {
    let scheduledMeetings = {};

    for (let i = 0; i < meetings.length; i++) {
        let [day, name] = meetings[i].split(" ");

        if (scheduledMeetings[day]) {
            console.log(`Conflict on ${day}!`);
        } else {
            scheduledMeetings[day] = name;
            console.log(`Scheduled for ${day}`);
        }
    }
    for (let day in scheduledMeetings) {
        console.log(`${day} -> ${scheduledMeetings[day]}`);
    }
}
