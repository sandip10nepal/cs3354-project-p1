Stakeholder Interview Notes
Project: Restaurant Reservation and Management System
Interview 1: Restaurant Customer (Participant 1)
Date: October 18, 2026
We talked to a customer who eats out a lot with her family on weekends. She books almost everything through OpenTable now, because she can see the actual grid of open times instead of guessing. If she is trying to book for friday night for six people, she picks a time, and she knows right away if a big table is even available, instead of requesting a time and waiting to hear back. She also checks the ratings and how many times a place got booked that day before she picks somewhere, the last time she tried calling a restaurant instead she was on hold for a while then they said someone would call her back and nobody ever did so she ended up booking somewhere else on OpenTable. Once she books, she gets a confirmation email and a text which she screenshots, so she is not walking in wondering if they even have her down. She checks the app again the day of, just to make sure it still says confirmed. She has even changed a booking in the app before, moved it from 6:30 to 7:00 in like two taps, no phone call needed.
Key findings:
Customers want to book a table online instead of calling the restaurant.
They want to see which times are open before they pick one.
They want a confirmation after booking, something they can pull up later.
They want to change or cancel a booking themselves when plans change.
They want to check their reservation status on their own without calling.
Related requirements: online reservations, showing available time slots, reservation confirmation, updating a reservation, cancelling a reservation, checking reservation status.
Interview 2: Restaurant Host (Participant 2)
Date: October 20, 2026
We talked to a host who works the front of BJ's on weekends. He said friday and saturday nights are just chaos, people coming in, some with reservations, some just walking in. He works off an iPad at the host stand running OpenTable GuestCenter, which shows the whole floor map, every table color coded, like green for open, red for seated, yellow for dessert, gray for dirty. Reservations come in through OpenTable, and the waitlist lives in the same app, with times and text alerts that go out to guests when their table is ready.
Trying to remember everything is tough, and GuestCenter only helps if the floor map is actually up to date. He told us about times when two parties got told the same table was theirs because someone forgot to mark a table as seated, or someone waited way longer than what they were told because the quoted time in the app did not keep up with how backed up the kitchen was. He said on busy nights the OpenTable reservation turn into a waitlist, people show up with a 7 PM booking and still wait twenty minutes, and then they end up losing customers, for check ins when a party walks in he taps them as arrived in GuestCenter so the servers know they are seated and not still waiting. And assigning tables is not just first come first served, he has to think about it. For example, you cannot put a party of two at a six person table on a packed night, and keeping the sections even so one server does not end up with all the big tables at once. Regulars make it harder, some of them ask for the same booth every time, and he has to remember that while also keeping the wait fair for everyone else. And the phone never stops ringing while he is trying to seat people, so he is taking a reservation over the phone while someone is standing right in front of him.
Key findings:
Hosts need to see all the current reservations in one place.
They need to know which tables are free and which are taken, right now, not from memory.
They need a waitlist they can actually manage, with names, party sizes, and phone numbers.
They need a simple way to check people in when they arrive.
They need help assigning tables so sections stay balanced and big tables do not get wasted.
Related requirements: reservation management, table tracking, waitlist management, customer check in support, table assignment.
Interview 3: Restaurant Server (Participant 3)
Date: October 20, 2026
We talked to a server who has been working dinner shifts at BJ's for a while. She said the hardest part is keeping track of everything once it gets busy. She rings orders on a handheld running NCR Aloha, and the order fires straight to the kitchen screens. She needs to know which tables are hers, especially when she takes over a section from someone else, and she needs to see what each table ordered without having to go ask around.
As for order status, the kitchen runs ConnectSmart Kitchen screens, so when food is ready the ticket bumps and she gets a ping on her handheld, instead of finding out by walking past the kitchen or having a guest ask her where their food is. But when the screens freeze, which happens sometimes on a Friday, she is right back to walking over to the kitchen to check. Same with the kitchen, if something is 86'd, it shows up on her handheld so she stops selling it, and if a guest changes their order after it already went in, update has to reach the kitchen fast and she needs to know the kitchen actually got it.
Key findings:
Servers need to see their assigned tables clearly.
They need to see what each table ordered and what is still waiting.
They need updates when an order is ready, delayed, or changed.
They need a way to communicate with the kitchen quickly.
Related requirements: table assignment visibility, order tracking, order update notifications, staff communication support.
Interview 4: Kitchen Staff (Participant 4)
Date: October 20, 2026
We talked to someone who works the line at BJ's during the dinner rush. He said the tickets have to be readable in like two seconds, and at his place they come up on ConnectSmart Kitchen screens instead of paper, hanging above the line where everyone can see them. Each ticket has a timer on it showing how long it has been up, and the modifiers sit in their own box, so he can quickly see what is cooking, what is waiting, and what is late.
New orders need to stand out somehow. On the screens a new ticket pops to the top and chimes, because if a ticket just sits there unnoticed, the table waits and nobody knows why. Dietary stuff is the serious one for him. An allergy note is supposed to show up big and red at the top of the ticket, because getting that wrong is actually dangerous. He told us about a celiac ticket that came through with the note typed into the wrong field, so it just looked like a normal comment, and the only reason it got caught was the server came back and said it out loud.
Prioritization: a table that has been waiting twenty minutes should come before a brand new order + big party's tickets need to be timed so all the food comes out together. The screens help with that because you can see the timers, but when a screen freezes mid-rush, which has happened, everyone is stuck guessing. And when a server changes an order, the kitchen needs to see the update on the screen right away, not find out when the wrong plate is already going out. The 86 list is on the screen too, so when they run out of something it is supposed to update everywhere, but if nobody taps it in, servers keep selling it and tickets keep coming back.
Key findings:
Kitchen staff need order tickets that are clear and easy to read fast.
They need to be told right away when a new order comes in.
Dietary restrictions and allergies need to stand out on the ticket.
They need to prioritize orders, like long-waiting tables first.
They need to see order updates immediately when something changes.
Related requirements: order management, dietary requirement tracking, priority handling of orders, order update notifications.
Interview 5: Restaurant Manager (Participant 5)
Date: October 20, 2026
We talked to a manager at a full-service restaurant in Dallas, and she is the one looking at the bigger picture. She said she is always trying to figure out how the restaurant is actually doing, not just whether tonight feels busy. How many reservations came in, how many people just did not show up, those no-shows leave tables sitting empty that could have been booked by someone else. Last Saturday they did about 240 covers and had 14 no-shows, which is almost a full section of tables just sitting there.
The system they run now is Toast for the point of sale and OpenTable for reservations, and she lives in both of them. Toast gives her the back-office reporting, hourly sales, what the top sellers were, average ticket times, labor cost against sales, voids and comps, and she checks it on her phone from home after close. OpenTable gives her the reservation side, covers per night, no-show rate, booking pace, which nights are the busiest, and the party-size mix. Friday and Saturday at 7 PM are the peak, Tuesday lunch is dead, and she plans around that.
The problem is Toast and OpenTable do not really talk to each other, so every Sunday night she exports both and pieces the numbers together in a spreadsheet by hand, she wants one place where she can see all of it like if no-shows are up on Fridays is it because people are booking on OpenTable and forgetting or is it something else. That is how she decides staffing and promos and all of it, like adding an extra server on Fridays, cutting a lunch shift on Tuesdays, or running a happy hour to fill the slow nights, but right now she is mostly going by feel because the numbers are not in one place. She also wants the system to fight no-shows for her, like automatic confirmation texts the day before, or taking a card hold for parties of eight or more, because right now all she can do is call the big parties herself.
Key findings:
Managers need reports on reservations, including no-shows.
They need to see how full the restaurant is and how tables are turning over.
They need to track how long people actually wait.
They need numbers on how orders are performing, like ticket times.
They need to spot peak times so they can plan staffing.
Related requirements: reservation reporting, occupancy monitoring, wait-time analytics, performance reporting.
Interview 6: Restaurant Customer (Participant 6)
Date: October 19, 2026
We talked to a customer in his thirties who eats out a lot, mostly date nights with his wife and family dinners with his two kids. He books almost everything online, usually on OpenTable, and for nicer places around Dallas he uses Resy. He said the difference between a real booking and a "request" drives him crazy. For their anniversary he requested a table for 7 PM, and at 5 PM the restaurant called him back to say they had nothing, so he spent an hour scrambling for somewhere else with his wife already dressed up.
Party size changes are his other big thing. He booked for four once, then his brother's family decided to join last minute, so now it is seven, and there was no way to change it online. He called and the host said they would "try" to fit them together, and when they got there they were split across two tables on opposite sides of the room. His kids were at one table, he was at the other.
He has also had a reservation just disappear on him. He walked in for a 7 PM booking and the host said they had nothing down for him at 7, and they ended up waiting 25 minutes for a table anyway. He said it kind of ruined the whole night because his wife was annoyed before they even sat down. That is why he wants a confirmation he can actually show, a text or an email, not just a screen that says "thanks, see you soon."
Cancelling is the same problem as the first customer. His daughter got sick at 4 PM and he tried to cancel online, but there was no cancel button anywhere, so he called, got put on hold, and eventually just did not show up. He felt bad about it and he was worried they would flag him as a no-show. He also likes checking his booking the morning of, just to see that it still says confirmed and not pending.
Key findings:
Customers want a real confirmed booking, not a request that might get turned down later.
They want to change the party size after booking without having to call.
They want a confirmation they can show at the door if the restaurant loses their booking.
They want to cancel online, especially on short notice when a kid gets sick or plans fall through.
They want to check the morning of that their reservation still says confirmed.
Related requirements: online reservations, confirmed vs requested booking status, showing available time slots, reservation confirmation, updating party size, cancelling a reservation, checking reservation status.
Interview 7: Restaurant Host (Participant 7)
Date: October 21, 2026
We talked to a host who works Friday and Saturday dinners at Olive Garden, usually 5 to 9 PM. She works off a tablet at the stand running ConnectSmart Hostess, which is the system Darden uses for the waitlist. It shows the whole waitlist, the quoted times, and it texts guests when their table is ready. People can also join the waitlist from home through the Olive Garden app, so half the names on the list are already there before they even walk in, with their party size and a phone number.
She said the system is great until it crashes, and it crashes at least once or twice a month, always on a busy night. When it goes down it is straight back to paper, and that is when the mistakes happen, like quoting someone 30 minutes when it is really going to be an hour. The quoted times are a constant headache for her. She tells a party 30 to 45 minutes, then the kitchen gets backed up, and suddenly it is 60, and the people are standing right by the door asking her every five minutes if their table is ready yet. She said you can feel them getting annoyed and there is not much you can do except apologize.
Regulars make it trickier too. Some guests ask for a specific server or a booth every time, and she has to remember that while also trying to keep the wait fair for everyone else. And then a party of twelve will just walk in on a Saturday with no reservation, and she has to push three tables together, which messes up the whole floor plan for the rest of the night.
The phone is the other thing. It rings constantly while she is trying to seat people, so she is taking a reservation over the phone while someone is standing right in front of her waiting to be seated. And check-in is easy to mess up, if she forgets to mark a party as arrived in ConnectSmart, the server has no idea they are seated, and the food timing gets all thrown off.
She said the new servers get overwhelmed if they get three big tables at once, so she has to watch who is ready for another table and who is already drowning.
Key findings:
Hosts need a waitlist system that does not fall apart when the tablet crashes.
They need quoted wait times that update when the kitchen gets backed up, so they are not guessing.
They need to handle special requests, like regulars who want a specific server or booth.
They need a way to seat big walk-in parties without wrecking the floor plan.
They need to mark parties as arrived so servers know they are seated.
They need to rotate table assignments so servers get fair sections.
Related requirements: reservation management, table availability tracking, waitlist management, waittime estimates, customer check-in, table assignment, special request notes.
Interview 8: Restaurant Host (Participant 8)
Date: October 22, 2026
We talked to a host who does the weekday lunch shifts at BJ's, and lunch is a totally different kind of busy than dinner. The rush is shorter, like 11:30 to 1:00, but it is intense, because most of the people are on their lunch break from work and they need to be in and out in 45 minutes. If seating is slow, they just leave, and that is a table that stays empty. He works off the same OpenTable GuestCenter setup as the dinner hosts, floor map on the iPad, reservations and waitlist in one place, but at lunch the waitlist moves so fast the quoted times go stale in like ten minutes.
Call-ahead is the thing that trips people up the most. People call ahead, get put on a list in OpenTable, and then show up 20 minutes later expecting a table to be waiting for them, but the list is not a reservation, it is just a heads up that they are coming. He said he spends half his shift explaining that to people who are already annoyed. A lot of them also join the waitlist from the BJ's app on their phone while they are still driving over, which is great when it works, but then they show up and the table is not ready yet and they act like the app promised them something it did not.
The to-go counter is right next to the host stand, which makes everything more confusing. Delivery drivers crowd around waiting for orders, and he has to figure out who is waiting for a table and who is just picking up food. He said a driver will stand there for ten minutes and then it turns out their order was not even ready yet.
Training new hosts is part of his job too, and that is where a lot of the seating mistakes come from. A new host will seat a party of eight at two four-tops that cannot even be pushed together, or seat people in a section where the server just got three tables at once. He said you have to know the floor plan by heart, like which tables actually move and which ones do not, and that takes a few weeks to learn. GuestCenter shows the floor map, but a new host does not know yet that the two four-tops by the bar do not push together because of the pillar.
He said the worst is when the phone rings, someone is standing in front of you, and another party is waving from the waiting area, all at the same time.
Key findings:
Hosts need to handle lunch rushes where fast turnover matters more than dinner.
They need call-ahead lists that are clearly separate from real reservations.
They need to tell apart to-go and delivery pickups from people waiting for a table.
They need a floor plan view that shows which tables can be pushed together.
They need help training new hosts on seating rules and section balance.
They need to manage the phone and the front door at the same time.
Related requirements: reservation management, call-ahead waitlist, table availability tracking, floor plan view, customer check-in support, table assignment.
Interview 9: Kitchen Staff (Participant 9)
Date: October 21, 2026
We talked to someone who works the line at BJ's on dinner shifts, usually on sauté and grill from 5 to 10 PM. She said the ticket rail is the whole job, and on a Friday at 7 PM there can be fifteen tickets hanging there at once. The hard part is that servers fire appetizers and entrees separately, so she is trying to time everything so a table's food all comes out together, and if one ticket is late the whole table waits. There is a kitchen display screen above the line too, but it freezes sometimes, and when it does everyone goes back to shouting across the line.
Modifiers are where the mistakes happen. She gets tickets that say stuff like "no onions, extra sauce, cook it medium not medium-well" and the modifiers print in small text or in the wrong spot on the ticket. She has to stop and ask the expo what it actually says, and during a rush that slows the whole line down.
Allergies scare her the most. She had a celiac ticket come through once with no flag on it at all, and she only caught it because the server came back to the kitchen and mentioned it out loud. She said if the server had not said anything, that food would have gone out and someone could have gotten really sick. That is why she wants allergy notes to be impossible to miss, like big and red at the top of the ticket, not buried at the bottom.
The 86 board is another problem. They will run out of a popular item in the middle of the rush, like the ribs or a certain appetizer, and the 86 list is on a whiteboard that nobody updates. So servers keep selling it, the tickets keep coming in, and she has to send them back, which wastes time and makes the servers mad.
She said when a server changes an order, like a guest decides they want chicken instead of steak after the ticket is already in, she needs to see that update immediately. If she finds out when the wrong plate is already going out, that food is wasted and the table waits even longer.
Key findings:
Kitchen staff need tickets that show modifiers clearly so they do not have to stop and ask.
They need allergy and dietary notes to stand out at the top of the ticket, not buried.
They need an 86 list that updates in real time so servers stop selling items that are gone.
They need to time tickets so a whole table's food comes out together.
They need order updates immediately when a guest changes their mind.
They need a kitchen display that does not freeze during the rush.
Related requirements: order management, dietary requirement tracking, allergy alerts, priority handling of orders, order update notifications, 86'd item tracking, kitchen display system.
