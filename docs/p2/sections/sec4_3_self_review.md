# 4.3 Self-review log

I used the Lesson 13 rules listed in the P2 template. I reviewed UC-01 from PR #4 at commit cd6a5a7, UC-04 from PR #5 at commit 68b8da3, and the local UC-05 draft. The separate Lesson 13 handout was not available locally.

| Use case | Check from the Lesson 13 review checklist | Defect found | How it was fixed |
| --- | --- | --- | --- |
| UC-05 | Step (0) and separate turns | P1 started with the Server choosing a table and did not use the required two-column format. | Added the initial occupied-table information and separate Actor/System turns. |
| UC-05 | Visible ending, alternate flows, and no background steps | Cancellation and failure endings were not fully defined; internal order recording was mixed into the actor's steps. | Added TUCEW and A1–A7 with clear outcomes/rejoin points. Moved internal messages to Section 5.2.2. |
| UC-01 | Step (0), turns, and visible ending | Step (0) and a final confirmation are present, but the Markdown draft combines the Actor/System headings and uses a single list. Step (2) says the system finds options without saying it presents them. | Open: use the two-column table and make (2) present the available options to the Customer. |
| UC-01 | Precondition or alternate flow | “A table is free” is a precondition, but A1 handles no free table. There is no flow for a slot becoming unavailable before confirmation. | Open: remove the free-table precondition and add a recheck/failure flow before confirming the reservation. |
| UC-01 | Clear alternate-flow turns | A2 is attached to actor step (5), but does not identify the system validation response that finds the error. | Open: place validation at system step (6), give the correction response, and return to (5). |
| UC-04 | Step (0) and separate turns | Step (0) is the arrival trigger, not what the Host sees first. The draft is a numbered list and includes party/Host actions outside the system interaction. | Open: add initial information for the Host, use the two-column format, and keep the numbered turns between Host and System. |
| UC-04 | TUCBW, TUCEW, and visible ending | No explicit TUCBW/TUCEW fields. Steps (7) and (11) describe state changes without a clear confirmation to the Host. | Open: add the fields and visible seating/release confirmations; show release as a separate part with its own trigger and ending. |
| UC-04 | Preconditions and alternate-flow assumptions | A confirmed reservation is required, but flow 3a handles a missing reservation. The 15-minute no-show rule and smallest-table choice need an agreed source. | Open: treat finding a reservation as a flow and cite or confirm the seating rules with the team. |

No UI widgets or implementation technology were found in the reviewed UC-01/UC-04 prose. Their open findings are proposed fixes for the section owners; those drafts have not been changed here. This local review does not count as a submitted GitHub PR review. Domain checks remain open until Section 5.1 is available.
