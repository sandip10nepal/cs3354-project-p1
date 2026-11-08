# Section 0: Revision History, Contribution Record, and Changes Since P1

## 0. Revision History
| Version | Date | Author | Summary of change |
| :--- | :--- | :--- | :--- |
| 0.8 | Oct 18, 2026 | Team 07 (Integrated by Sandip Nepal) | P1 baseline: Proposal, stakeholder requirements, initial use cases, and traceability matrix. |
| 1.0 | Nov 8, 2026 | Team 07 (Sandip, Arpita, Mehak, Vasudha, Gabriel, Jarir, Manideep) | P2 baseline: Remediated P1 feedback (CH-01 to CH-07), added analysis models, high-level design, ADRs, spike S-01, and extended traceability; integrated and tagged p2 by Sandip Nepal. |

## 0.2 Changes Since the P1 Baseline
| Change ID | What changed (IDs affected) | Why (P1 feedback, new finding, spike result) | Knock-on effect | Agreed on |
| :--- | :--- | :--- | :--- | :--- |
| CH-01 | Added `/docs/elicitation/interviews.md` and updated Sec 2.2 & Sec 3.1 (`FR-01`–`FR-14`) Source column to cite `[R3]` instead of "pending validation". | P1 Feedback (C1): Stakeholder needs rested on assumptions and `/docs/elicitation/interviews.md` was missing from repo. | `FR-01`–`FR-14` now trace to documented elicitation sessions `E-01`–`E-04`. | Nov 5, 2026 |
| CH-02 | Updated Sec 2.1 Context Diagram to remove out-of-scope payment processing and third-party delivery app arrows. | P1 Feedback (C1): Context diagram included items excluded in Sec 1.2 Scope. | Aligns Sec 2.1 with Sec 1.2 Scope and Sec 6.3 Component View. | Nov 5, 2026 |
| CH-03 | Updated Sec 2.6 Feasibility Summary with concrete evidence and corrected team size from "4-5 members" to 7 members. | P1 Feedback (C1): Feasibility verdicts needed evidence and accurate team size. | Aligns Sec 2.6 with the 7-member P3 schedule in Sec 10.2. | Nov 5, 2026 |
| CH-04 | Updated Sec 3.1 (`FR-01`–`FR-14`) Priorities across MUST (`FR-01`–`03`, `FR-06`–`11`), SHOULD (`FR-04`, `FR-05`, `FR-12`, `FR-13`), and COULD (`FR-14`). | P1 Feedback (C2): All 14 FRs were marked MUST; needed full MoSCoW range. | Guides P3 implementation order in Sec 9.1 and Sec 10.2. | Nov 6, 2026 |
| CH-05 | Split `QR-03` into `QR-03` (99% uptime availability) and `QR-05` (100% data retention across 5 restarts). | P1 Feedback (C2): `QR-03` combined availability and data retention. | `QR-05` drives `QAS-03` in Sec 6.1 and database persistence design. | Nov 6, 2026 |
| CH-06 | Moved expanded use cases from Sec 3.4 to Sec 4.2 turn-by-turn tables and replaced Sec 3.5 table with pointer to Sec 9.1. | P2 Template & Feedback (C3): Avoid duplicate tables and extend traceability in Sec 9.1. | Keeps Sec 3.4 at actor-goal level and centralizes traceability in Sec 9.1. | Nov 6, 2026 |
| CH-07 | Added root `README.md` documenting repo layout and added team communication cadence to Sec 10.1 & 10.4. | P1 Feedback (C4): Main branch needed README/docs structure and communication frequency. | Clarifies repository structure and PR workflow for grading. | Nov 6, 2026 |

## 10.4 Repository
The project repository is hosted publicly at `https://github.com/sandip10nepal/cs3354-project-p1`. It is organized into `/docs/p1` (P1 baseline), `/docs/p2` (P2 baseline PDF and section files), `/docs/p2/diagrams` (editable diagram sources), `/docs/elicitation/interviews.md` (stakeholder interview transcripts), and `/spikes` (architecture spike S-01 code and measured results). Every team member commits their owned sections and diagram sources on a dedicated feature branch from their own GitHub account and merges to `main` via a peer-reviewed pull request. The Git tag `p2` points directly to the commit containing the final submitted PDF.
