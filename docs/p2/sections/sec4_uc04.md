Section 4.2 (Part B): UC-04 Manage Table Seating

- Identifier and name: - UC-04 Manage Table Seating
- Primary actor: - Host
- Supporting actors: - None
- Goal: Seat an arriving party at a suitable table, and later release that table for the next party.

Preconditions
- The restaurant has defined its tables and their capacities.
- At least one confirmed reservation or walk-in party exists.
- Seatings last 90 minutes, followed by a 15-minute cleaning buffer.

Trigger
A party arrives at the restaurant and asks to be seated.

Main success scenario (turn by turn)

Part 1: Seat the party (FR-06) -
1. The party arrives and gives the host the name on the reservation.
2. The host asks for the party's reservation.
3. The system finds the confirmed reservation and gives the host its party size, time, and reserved table, if any.
4. The host confirms that the party has arrived.
5. The system suggests the smallest available table that fits the party size.
6. The host accepts the suggested table.
7. The system records the table assignment, marks the reservation as seated, and marks the table as occupied.
8. The host guides the party to the table.

Part 2: Release the table (FR-13) -
9. The party finishes dining, leaves, and the table is cleared.
10. The host tells the system that the party has left the table.
11. The system marks the table as available and keeps all future reservations for that table unchanged.

Alternative and exception flows
- 3a. if no reservation is found: The host treats the party as a walk-in, asks for the party size, and continues at step 5.
- 3b. the party is more than 15 minutes late: The system has already marked the reservation as a no-show and released its table. The host treats the party as a walk-in and continues at step 5.
- 5a. No suitable table is available: The host tells the party the expected wait. When a suitable table becomes available, the host returns to step 5. If the party leaves, the host ends the use case with no seating recorded.
- 6a. The host prefers a different table: The host picks another available table that fits the party. The system accepts the choice and the flow continues at step 7.
- 6b. The chosen table is not available or would overlap another reservation: - The system rejects the choice and states why. The host returns to step 5.
- 7a. The assignment cannot be saved: The system reports the failure. The reservation stays confirmed, the table stays available, and no partial assignment is kept. The host may retry from step 6.
- 10a. The table is not currently occupied: - The system tells the host that there is nothing to release, and no change is made.

Postconditions
-  After steps 1 to 8: - The party's reservation is marked seated, linked to exactly one table, and that table is marked occupied.
-  After steps 9 to 11: - The table is available, and all of its future reservations are preserved.
