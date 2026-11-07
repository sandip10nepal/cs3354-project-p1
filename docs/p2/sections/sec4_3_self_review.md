# 4.3 Self-review log

Owner: Gabriel Suarez (GXS220049), as assigned in the responsibility matrix. Review basis: the Lesson 13 rules reproduced in the P2 template. The separate Lesson 13 handout was not available locally.

| Use case | Check from the Lesson 13 review checklist | Defect found | How it was fixed |
| --- | --- | --- | --- |
| UC-05 | Step (0) states what the actor sees first. | The P1 expansion began with the Server choosing a table, with no initial information. | Added (0), identifying occupied Tables before the Server acts. |
| UC-05 | One actor or system turn per row. | P1 bundled validation, recording, kitchen placement, and confirmation into a numbered narrative without the two-column turn structure. | Rewrote 4.2 as alternating numbered Actor/System turns; internal collaboration is expanded separately in 5.2.2. |
| UC-05 | End with a perceptible acknowledgment and explicit TUCEW. | P1 had a final confirmation but no explicit TUCEW or stated cancellation outcome. | Defined TUCEW; (6) acknowledges the Order and queued status, A6 acknowledges cancellation, A7 reports failure. |
| UC-05 | Treat normally variable conditions as alternate flows. | P1 assumed the party was seated without handling a table that becomes unoccupied during ordering. | Added A1/A2 and a table-occupancy recheck in (6), messages M13/M14. |
| UC-05 | Keep the analysis free of technology/UI details and background processing. | P1 narrated invisible internal recording and kitchen placement as separate use-case steps. | Used business terms and visible responses in 4.2; placed internal responsibilities in 5.2.2. Preparation remains in UC-07. |
| UC-05 | Give alternate flows an outcome or explicit rejoin point. | P1 failure descriptions did not consistently identify a return step or cancellation acknowledgment. | Added A1–A7 with conditions, actor-visible outcomes, and explicit end/rejoin points. |
| UC-01 | Step (0), turn structure, acknowledgment, technology, and alternate-flow handling. | The carried-forward P1 text lacks Step (0), the required two-column turn structure, and explicit TUCEW; it includes “reservation interface.” No completed P2 expansion is present on main. | Findings recorded for Mehak. Review of the revised P2 expansion remains open; no teammate revision is claimed here. |
| UC-04 | Step (0), turn structure, acknowledgment, technology, and alternate-flow handling. | Only the actor-goal use case exists in the available P1 material; no completed P2 expansion is present on main. | Review is awaiting Vasudha's expansion. Check table assignment/release, invalid assignments, and the final acknowledgment when that draft exists. |

UC-05 has been reviewed against the template's listed rules. Cross-author reviews of UC-01 and UC-04 remain open until their P2 drafts are available. Domain attribute coverage and cross-model consistency belong to the Section 5.3 checks and cannot be marked passed until Section 5.1 exists.
