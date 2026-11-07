 Section 6.1 Quality-Attribute Scenarios

 QAS-01: Order reaches the kitchen quickly (realises QR-01)
- Source: A server submitting an order
- Stimulus: The server submits a valid table order.
- Artifact: Order submission service (Node.js) and the KDS display (React)
- Environment: Normal operation during service, 20 active tables, restaurant WiFi
- Response: The system saves the order and shows it in the kitchen queue with its order ID, table number, items, quantities, notes, and submission time.
- Response measure: The order appears on the KDS within 5 seconds for 95% of orders, measured over 50 test orders by comparing submission and display timestamps.

 QAS-02: Customer pages stay fast under load (realises QR-02)
- Source: Customers browsing and booking from their own devices
- Stimulus: 100 customers load customer-facing pages (availability search, booking form, confirmation) at the same time.
- Artifact: Customer web portal (React front end, Node.js back end, MySQL database)
- Environment: Normal operation during the evening peak, 100 concurrent users
- Response: The system serves each requested page and completes availability searches without errors.
- Response measure: 95% of page loads complete within 3 seconds, measured by a load test with 100 simulated users.

 QAS-03: No data lost across a restart (realises QR-05)
- Source: A server crash or a planned restart by restaurant staff
- Stimulus: The system is restarted while confirmed reservations and submitted orders exist.
- Artifact: Application server and MySQL database
- Environment: Operating hours, with open reservations and orders in the system
- Response: On startup, the system reloads all saved reservations and orders from the database, and kitchen queue entries and table assignments are unchanged.
- Response measure: 100% of 20 confirmed reservations and 20 submitted orders are intact after each of 5 restarts. The system accepts new requests again within 60 seconds of each restart.
