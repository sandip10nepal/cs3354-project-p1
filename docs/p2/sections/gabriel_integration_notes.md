# Gabriel P2 Integration and Approval Notes

## Local deliverables

- `sec3_functional_and_use_cases.md`: replacement Section 3.1 and Section 3.4 content.
- `sec4_uc05_and_5_2.md`: Section 4.2 UC-05, Section 5.2.2, and domain vocabulary handoff.
- `sec4_3_self_review.md`: Section 4.3 review log, including the unavailable teammate drafts.
- `../diagrams/seq-uc05.drawio` and `seq-uc05.png`: editable sequence diagram and image.
- `../diagrams/use-cases.drawio` and `use-cases.png`: carried-forward P1 use-case diagram source/image, placed in the required P2 directory.

The shared DOCX is intentionally left for the integrator to assemble from member-owned section files, matching the responsibility matrix's artifact paths. This is not a compiled or approved P2 baseline.

## Items requiring team evidence or coordination

1. The fetched `docs/elicitation/interviews.md` is empty. Populate it with genuine elicitation evidence and confirm FR source citations before baseline approval. [R2] is named in the report but its contents were not available. No interviews or source verification are claimed.
2. Jarir's domain model is absent from main. Reconcile Table, MenuItem, Order, OrderLine, KitchenQueue, and the declared interaction controller OrderPlacement with Section 5.1 before final K1/K2 checks.
3. Mehak's UC-01 and Vasudha's UC-04 P2 expansions are absent from main. Complete the remaining cross-author self-review after those drafts arrive.
4. The newer matrix assigns the Section 3.5 pointer to Arpita. Suggested replacement: “See Section 9.1 for the extended requirements traceability matrix.” Coordinate integration rather than duplicating her artifact.
5. Review Jarir's PR before it is merged. No PR, approval, teammate comment, or review evidence has been fabricated or submitted by this work.
6. Source and diagram changes should be logged in Section 0.2 under the lead's agreed CH IDs; do not invent agreement dates or assign conflicting IDs.

## Suggested Section 0.2 change descriptions

| Change | Why | Knock-on effect |
| --- | --- | --- |
| FR-01–FR-14 source labels cite [R2]/[R3]; FR-04/05/08/12 become SHOULD and FR-14 becomes COULD. | P1 source and MoSCoW feedback. | 9 MUST, 4 SHOULD, 1 COULD; confirm genuine source evidence and update Section 9.1. |
| Section 3.4 retains the diagram and actor-goal list; UC-05 detail moves to Section 4.2. | P2 analysis structure. | Section 5.2.2 uses the new UC-05 step numbers. |
| UC-05 gains Step (0), turn structure, explicit outcomes, scenario table, sequence diagram, and self-review findings. | P2 template and Lesson 13 rules reproduced there. | Domain vocabulary handoff to 5.1; K1–K6 and traceability checks required after integration. |

## Suggested Section 10.5 AI disclosure

Codex assisted Gabriel Suarez with P1 requirement-source and priority edits, UC-05 analysis, scenario-table and diagram drafting, and review/integration notes. Local checks compared all 14 requirement statements and acceptance criteria with the fetched team document, checked 21 scenario-to-diagram message mappings, inspected exported diagrams, and checked repository diffs. Gabriel must review the work before approving a push. Stakeholder validation, teammate review, and model agreement are not claimed.

## GitHub evidence and push approval

The local branch is `feature/gabriel-uc05-and-seq`, based on fetched main commit `2a6d5d1`. No push is authorized until Gabriel approves. Record actual commit hashes and PR/review numbers in Section 0.1 after they exist; local drafting alone is not GitHub contribution evidence. Suggested contribution description: “Sections 3.1 and 3.4 fixes; UC-05 Section 4.2; Section 4.3 review log; Section 5.2.2 scenario table and sequence source/image.”
