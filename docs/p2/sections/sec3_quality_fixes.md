# Section 3.2 and 3.3 Fixes (P1 feedback to v1.0)

## 3.2 Quality requirements (revised)

- **QR-01** (MUST, source: Kitchen staff need)
  - Requirement: Toulene shall display a submitted order on the KDS within 5 seconds for 95% of orders, with 20 active tables on the restaurant WiFi.
  - Verification: Submit 50 test orders and compare submission and display timestamps.

- **QR-02** (MUST, source: Customer need)
  - Requirement: Toulene shall load any customer-facing page within 3 seconds for 95% of requests with 100 concurrent users.
  - Verification: Load test with 100 simulated users.

- **QR-03** (MUST, source: Restaurant manager need)
  - Requirement: Toulene shall be available at least 99% of the time during operating hours.
  - Verification: Uptime monitoring over a multi-day test period with simulated operating hours; availability = (time up / operating time) x 100.

- **QR-04** (SHOULD, source: Kitchen staff need)
  - Requirement: Kitchen staff shall change an order's status in 2 taps or fewer, using touch targets of at least 44x44 pixels.
  - Verification: Task walkthrough with kitchen-role testers and a design inspection of the KDS.

- **QR-05** (MUST, source: Restaurant manager need), NEW in v1.0
  - Requirement: Toulene shall retain 100% of confirmed reservations and submitted orders across a system restart.
  - Verification: Restart test: create 20 confirmed reservations and 20 submitted orders, restart the system 5 times, and confirm all records are intact after each restart.

QR-05 was split out of QR-03, whose P1 text combined availability and data retention in one requirement. QR-03 keeps its ID and now covers availability only.

## 3.3 Constraint requirements

No P1 feedback applied to Section 3.3, so CON-01 and CON-02 are unchanged from P1.
