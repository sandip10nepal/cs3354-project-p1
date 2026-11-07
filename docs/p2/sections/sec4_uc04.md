 - Section 4.2 (Part B): UC-04 Manage Table Seating

- **Identifier and name:** UC-04 Manage Table Seating
- **Primary actor:** Host
- **Supporting actors:** None
- **Goal:** Seat an arriving party that has a confirmed reservation at a suitable table, and later release that table for the next party.

 - - Preconditions
- The restaurant has defined its tables and their capacities.
- For seating: a confirmed reservation exists for the arriving party.
- For release: a table is occupied by a seated party.
- Seatings last 90 minutes, followed by a 15-minute cleaning buffer.

  - Main success scenario (turn by turn)

**Part 1: Seat the party (FR-06)**
0. Trigger: a party with a confirmed reservation arrives and asks to be seated.
1. The party gives the host the name on the reservation.
2. The host asks the system for that reservation.
3. The system finds the confirmed reservation and tells the host its party size, time, and allocated table.
4. The host confirms that the party has arrived.
5. The system confirms that the allocated table is free and prxoposes it.
6. The host accepts the proposed table.
7. The system records the table assignment, marks the reservation as seated, and marks the table as occupied.
8. The host guides the party to the table.

**Part 2: Release the table (FR-13)**
9. The party finishes dining and leaves, and the table is cleared.
10. The host tells the system that the party has left the table.
11. The system marks the table as available and keeps all future reservations for that table unchanged.

 - - Alternative and exception flows
- **3a. No confirmed reservation is found:** The host asks the party to recheck the name or contact details and returns to step 1. If none is found, the use case ends, and the party may make a new reservation (UC-01).
- **3b. The party is more than 15 minutes late:** The reservation has already become a no-show and its table is released. The use case ends, and the party may make a new reservation (UC-01).
- **5a. The allocated table is not free:** The system proposes the smallest available table that fits the party size, and the flow continues at step 6. If no such table exists, follow 5b.
- **5b. No suitable table is available:** The host tells the party the expected wait. When a suitable table becomes available, the host returns to step 5. If the party leaves, the use case ends with no seating recorded.
- **6a. The host prefers a different table:** The host picks another available table that fits the party. The system accepts it, and the flow continues at step 7.
- **6b. The chosen table is not available or would overlap another reservation:** The system rejects the choice and states why. The host returns to step 6.
- **7a. The assignment cannot be saved:** The system reports the failure. The reservation stays confirmed, the table stays available, and no partial assignment is kept. The host may retry from step 6.
- **10a. The table is not currently occupied:** The system tells the host there is nothing to release, and no change is made.

  - Postconditions
- **After steps 0 to 8:** The reservation is marked seated and linked to exactly one table, and that table is marked occupied.
- **After steps 9 to 11:** The table is marked available, and all of its future reservations are preserved.

  - Scope note
Walk-in parties without a reservation are not covered. No v1.0 requirement covers walk-in seating, and the waitlist is a stretch goal (Q10).

