# Section 4.2 (Part B): UC-04 Manage Table Seating

- **Identifier and name:** UC-04 Manage Table Seating
- **Primary actor:** Host
- **Supporting actors:** None
- **Goal:** Seat an arriving party that has a confirmed reservation at a suitable table, and later release that table for the next party.

## Preconditions

- The restaurant has defined its tables and their capacities.
- For seating: a confirmed reservation exists for the arriving party.
- For release: a table is occupied by a seated party.
- Seatings last 90 minutes, followed by a 15-minute cleaning buffer.

## Main success scenario (turn by turn)

**Part 1: Seat the party (FR-06)**

0. The system presents confirmed reservations due now, their allocated tables, and current occupancy. This is what the host sees before taking action.
1. The host identifies the arriving party's confirmed reservation.
2. The system confirms the reservation and gives the host its party size, time, and allocated table.
3. The host confirms arrival and asks to seat the party.
4. The system checks that the allocated table is available for this party and confirms the proposed assignment.
5. The host accepts the proposed table.
6. The system marks the reservation seated and the table occupied, then confirms the assignment to the host.

**Part 2: Release the table (FR-13)**

7. After the party leaves and the table is cleared, the host asks to release that table.
8. The system identifies the occupied table and its current party, then asks the host to confirm the release.
9. The host confirms that the party has left and the table is clear.
10. The system marks the table available, preserves future reservations, and confirms the release to the host.

## Alternative and exception flows

- **2a. No confirmed reservation is found or it was marked no-show:** The system tells the host that the party cannot be seated under that reservation. The host may help the party start a new reservation (UC-01); this use case ends.
- **4a. The allocated table is not free:** The system proposes the smallest available table that fits the party without conflicting with another reservation. The host continues at step 5.
- **4b. No suitable table is available:** The system tells the host seating cannot yet be confirmed. The host tells the party the expected wait and returns to step 3 when a table becomes available, or ends the use case if the party leaves.
- **5a. The host prefers another table:** The host chooses a table that fits the party. The system checks availability and reservation conflicts, then accepts the choice and continues at step 6 or explains why it cannot be used and returns to step 5.
- **6a. The assignment cannot be saved:** The system reports failure and keeps the reservation confirmed and the table available; no partial seating is recorded. The host may retry from step 5.
- **8a. The selected table is not occupied:** The system tells the host there is nothing to release, makes no change, and ends the use case.
- **10a. The release cannot be saved:** The system reports failure and leaves the table occupied. The host may retry from step 7.

## Postconditions

- **After steps 0 to 6:** The reservation is marked seated and linked to exactly one table, and that table is marked occupied.
- **After steps 7 to 10:** The table is marked available, and all of its future reservations are preserved.

## Scope note

Walk-in parties without a reservation are not covered. No v1.0 requirement covers walk-in seating, and the waitlist is a stretch goal (Q10).

## Requirements realised

FR-06, FR-13
