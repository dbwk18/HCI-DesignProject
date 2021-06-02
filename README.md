### Introduction ###
Hi, We're team Colics.
We have designed a web app for those who **often have trouble remembering and managing both work and family schedules**, Especially **working mom and dad**. 
So, you are going to experience managing your schedules in a single platform through our website.



### File Structure ###

- src/Components 
  : Here contains codes for reusable Components used in Colics Service. There are Components such as Calendar, Header, Menubar, Timeline, Subtask etc. We imported these components to compose each pages. Every components is made with .js and .css file. 
- src/Icons
 : This file contains icon images that we used in designing UI. 
- src/Pages
 : Here consists several pages that user actually view. There are 'Main Page' that user first sees when we access to the url, and 'Project Page' and 'Subtask Page' that user can see when clicks Project Manager button.
- src/Routes.js
 : Here we define each path for pages, and implement page-routing for page navigation using 'react-router-dom'.




### Updated after DP4 ###

**View Project Manager**
- We changed this part to **Priority Manager**!!
- Priority Manager helps user to choose their priority works from massive schedules.
- Users can remeber important schedules more simply, and easily remember what was important things to do this week.
- Since we target working moms & dads who have various type of schedules and their goal is to manage schedule without forgetting, 
  we tried to help them more conveniently.




### Key Function ###

**Main page Calendar**
- You can add your schedule w/ Categories (Work, Family, Private, Other)
- You can see your detail schedule by hovering
- You can leave feedbacks to your past schedule
- You can receive request from your parter
- You can also send request to your partner
- You can revise you schedule by + button that appears when you hover on

**Priority Manager**
- You can view your weekly schedules by Timeline
- You can choose schedules that you want to put in priority (can add priority by double-clicking schedule)
- You can assign order of priority schedules (available by drag-drop)




### Before Start ###

- **You cannot add more than one schedule for each day**. For example, You cannot add two schedules where one is from 5/16 to 5/19, and another one is from 5/18 to 5/20 because 5/18 and 5/19 are overlapped. If you add such schedules, two schedules will be overlapped. We couldn't fix this because of complexity of task and design issue. Since we place feedback icon on the right top of the schedule, we cannot stack two schedules in one day(if then, feedback icon of one schedule will be placed on other schedule). We will discuss about it and fix it.
- **You cannot add a schedule that starting month and ending month are different**. For example, you cannot add a schedule that starts at 5/30 and ends at 6/2 because and 5 and 6 are different. Since our design is discrete(Not continuously connected between months), it is hard to leave feedback, or set schedule in such cases. 
- **Drag-Drop** in Prioirty Manager might be not working interactively depending on what device you are using (mouse, trackpad, etc). Still, it works!


