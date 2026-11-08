# Stakeholder Elicitation & Workflow Observation Notes [R3]

**Project:** Toulene — Integrated Restaurant Reservation and Kitchen Order Management System  
**Team:** Team 07, Section 005  

## 1. Elicitation Summary
To validate functional (`FR-01` to `FR-14`) and quality (`QR-01` to `QR-05`) requirements, Team 07 conducted structured workflow interviews and observational walk-throughs covering four primary stakeholder groups: Restaurant Guests (Customers), Front-of-House (FOH) Hosts, Dining Room Servers, and Back-of-House (BOH) Kitchen/Management Staff.

## 2. Stakeholder Session Records
* **Session E-01 (FOH Host & Seating Workflow — Oct 12 & Nov 3, 2026):** Confirmed need for real-time table status, party-size matching, double-booking prevention, and 90-minute standard turn times with 15-minute buffers (`FR-03`, `FR-06`, `FR-13`, `UC-04`).
* **Session E-02 (Dining Room Server Workflow — Oct 13 & Nov 3, 2026):** Confirmed need to block unavailable (86'd) menu items prior to order submission and receive instant `ready` status alerts (`FR-07`, `FR-08`, `FR-11`, `FR-12`, `FR-14`, `UC-05`, `UC-06`).
* **Session E-03 (BOH Kitchen Line & Shift Manager — Oct 14 & Nov 4, 2026):** Confirmed need for touch-only KDS targets (`>= 44x44 px`, `<= 2 taps`), `< 5s` order display latency with 20 active tables, 99% uptime, and 100% order/reservation retention across restarts (`FR-09`, `FR-10`, `QR-01`, `QR-03`, `QR-04`, `QR-05`, `CON-02`).
* **Session E-04 (Restaurant Customers — Oct 15 & Nov 4, 2026):** Confirmed preference for zero-install mobile web booking, `< 3s` page load under 100 concurrent users, instant confirmation codes, and self-service modification/cancellation (`FR-01`, `FR-02`, `FR-04`, `FR-05`, `QR-02`, `CON-01`, `UC-01`–`UC-03`).
