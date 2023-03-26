# Work Day Scheduler

This is a Work Day Scheduler, a simple calendar application that allows a user to save events for each working hour of the day (9AM - 5PM). 


## Description

- Work Day Scheduler can save user's events/tasks/notes after typing them in the text box and clicking save


## Table of Contents 
- [Usage](#usage)
- [Links](#links)
- [Features](#features)
- [User Story](#user-story)
- [Acceptance Criteria](#acceptance-criteria)

## Usage

![Screenshot](./Assets/img/Screenshot%202023-03-26%20120949.png)


## Links

- Github page: https://github.com/teddysm/WorkDayScheduler
- Deployed page: https://teddysm.github.io/WorkDayScheduler/


## Features

- When the page is loaded, there will be live date and time, time changes every second
- The time blocks are color coded according to current time, grey for past, red for present, green for future
- User can write notes on each time block, and when they hit save, the notes are saved in local storage
- On page reload, if there already are notes in each time block, those notes are loaded from local storage
- User can delete the note by deleting the current note and hit save


## User Story

```md
AS AN employee with a busy schedule
I WANT to add important events to a daily planner
SO THAT I can manage my time effectively
```

## Acceptance Criteria

```md
GIVEN I am using a daily planner to create a schedule
WHEN I open the planner
THEN the current day is displayed at the top of the calendar
WHEN I scroll down
THEN I am presented with timeblocks for standard business hours
WHEN I view the timeblocks for that day
THEN each timeblock is color coded to indicate whether it is in the past, present, or future
WHEN I click into a timeblock
THEN I can enter an event
WHEN I click the save button for that timeblock
THEN the text for that event is saved in local storage
WHEN I refresh the page
THEN the saved events persist
```

















