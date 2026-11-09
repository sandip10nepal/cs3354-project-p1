UC-01 Reserve Table
Primary actor
Customer

Supporting actors and external systems
None

TUCBW (this use case begins when)
This use case begins when a customer wants to book a table for a certain date and time.

TUCEW (this use case ends when)
This use case ends when the customer gets a confirmation that their reservation went through.

Preconditions
The restaurant’s rules, hours, and table size are already set up in the system
A table is free at the time the customer wants.
Postconditions
A reservation is saved for a set date and time.
The table fits the party size.
Booking has it’s own confirmation number
The table is blocked off for overlapping times
Traces to requirements
FR-01, FR-02, FR-03, QR-02, QR-03, CON-01

Actor input / action / System response
(0) The system requests the reservation information that is needed to check if there is availability.

(1) The customer provides information about the date, time, and party-size for their reservation.

(2) The system finds reservation options using the customers information.

(3) The customer selects the reservation option they want.

(4) The system requests contact information needed for completing the reservation.

(5) The customer provides the contact information and confirms the reservation.

(6) The system creates the reservation and hands back a confirmation number.

Alternate flows
A1
At step: (2)

Condition:
There is no table free that matches the date, time, and party size the customer asked for.

What happens:
The system tells the customer there is no table available that matches the requested date, time, and party size. And asks them to pick a different date, time, or party size

Ends or rejoins at:
(1)

A2
At step: (5)

Condition:
The customer left out some of the required information to complete the reservation, or they typed in something wrong.

What happens:
The system points out what needs to be fixed and asks the customers to fill the information in again.

Ends or rejoins at:
(5)