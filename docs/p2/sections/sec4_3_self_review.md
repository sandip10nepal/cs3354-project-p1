# 4.3 Self-review log

Criteria: Lesson 13 rules in the P2 template. Drafts: UC-01 PR #4 (cd6a5a7), UC-04 PR #5 (68b8da3), and current UC-05.

| Use case | Check from the Lesson 13 review checklist | Defect found | How it was fixed |
| --- | --- | --- | --- |
| UC-05 | Step (0) and separate turns | Missing initial information and two-column turns. | Added Step (0) and Actor/System turns. |
| UC-05 | Visible ending, alternate flows, and no background steps | Unclear failure/cancellation endings; internal recording mixed with actor steps. | Added TUCEW and A1–A7; moved internal messages to 5.2.2. |
| UC-01 | Step (0), turns, and visible ending | Single list instead of two columns; (2) finds options without presenting them. | Open: use two columns; present options at (2). |
| UC-01 | Precondition or alternate flow | Free-table precondition conflicts with A1; no last-minute availability flow. | Open: remove that precondition; add an availability recheck/failure flow. |
| UC-01 | Clear alternate-flow turns | A2 starts at actor step (5), without a system validation response. | Open: validate at (6), explain corrections, return to (5). |
| UC-04 | Step (0) and separate turns | Step (0) is a trigger; single list includes actions outside Host/System turns. | Open: add initial information and two-column Host/System turns. |
| UC-04 | TUCBW, TUCEW, and visible ending | Missing TUCBW/TUCEW; (7)/(11) lack visible confirmation. | Open: add fields and seating/release confirmations, each with a trigger and ending. |
| UC-04 | Preconditions and alternate-flow assumptions | Reservation precondition conflicts with 3a; seating rules need a source. | Open: handle reservation lookup as a flow; confirm seating rules. |

UC-01/UC-04 have no UI or implementation terms. Open fixes remain with their owners. This log is not a submitted GitHub review. Domain checks await Section 5.1.
