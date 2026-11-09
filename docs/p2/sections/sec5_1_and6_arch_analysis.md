# 5.1 Domain Model Specification

## Domain Class Definitions

| Class | What it represents (one line) | Key attributes | Associations (with multiplicity) |
| :--- | :--- | :--- | :--- |
| **Customer** | A person who books a table at the restaurant | `customerId`, `contactInfo` | `Customer 1 — 0..* Reservation`<br>`Customer 1 — 0..* Notification` |
| **Reservation** | A customer’s request to hold a table for a party at a specific time | `reservationId`, `reservationTime`, `partySize`, `status` | `Reservation * — 1 Customer`<br>`Reservation * — 1 Table`<br>`Reservation 0..1 — 1 SeatingSession` |
| **SeatingSession** | One party's time from beginning of seating to end of seating | `sessionId`, `seatedTime`, `departureTime`, `status` | `SeatingSession * — 1 Table`<br>`SeatingSession 0..1 — 1 WaitlistEntry`<br>`SeatingSession 0..1 — 1 Reservation`<br>`SeatingSession 1 — 0..* Order` |
| **Table** | A physical table with a fixed capacity | `tableNumber`, `capacity` | `Table 1 — 0..* Reservation`<br>`Table 1 — 0..* SeatingSession` |
| **WaitlistEntry** | A walk-in party waiting for a table | `waitlistId`, `partySize`, `timeAdded`, `status` | `WaitlistEntry 0..1 — 1 SeatingSession` |
| **Staff** | A host, server, or kitchen worker who uses system | `staffId`, `name`, `role` | `Staff 1 — 0..* SeatingSession` *(host)*<br>`Staff 1 — 0..* Order` *(server)* |
| **Order** | A set of items a server sends to the kitchen for a seating | `orderId`, `orderTimestamp`, `status` (`pending`, `preparing`, `ready`, `served`) | `Order * — 1 SeatingSession`<br>`Order 1 — 1..* OrderItem` |
| **OrderItem** | One menu item with an order | `orderItemId`, `quantity`, `specialRequests`, `status` | `OrderItem * — 1 Order`<br>`OrderItem * — 1 MenuItem` |
| **MenuItem** | A dish or drink from the restaurant menu | `itemId`, `name`, `price`, `isAvailable` | `MenuItem 1 — 0..* OrderItem` |
| **Notification** | A message sent to a customer about their table or food | `notificationId`, `type`, `sentAt`, `channel` (`phone`, `email`, etc.) | `Notification * — 1 Customer` |

---

## Explanation

The domain model captures the main entities and relationships governing table reservations, floor management, and food order dispatching. To decouple scheduled bookings from real-time floor occupancy, the diagram differentiates between Reservation and SeatingSession. A Reservation records intent for a specific time and party size, holding a reference to a candidate Table to prevent overlapping double-bookings. Upon customer arrival, the host transitions the reservation (or assigns a walk-in WaitlistEntry) into an active SeatingSession, changing the physical Table status to Occupied.Once seated, an active SeatingSession serves as the operational parent for dining room activities, anchoring one or more Order records submitted by Staff (servers). Each Order is composed of discrete OrderItem line instances referencing items in the active MenuItem catalog. This structure allows the kitchen to track line-item availability, custom preparations, and ticket status progression (pending -> preparing -> ready -> served) independently per table visit, ensuring clean lifecycle termination when the party departs and the table returns to available inventory.

# 6.0

### Core Architectural Decisions

1.  **3-Tier Layered Foundation:** Decouples the presentation layer (SPAs) from business services and data storage, ensuring fast customer page loads (<3s) while isolating the database from public traffic.
    
2.  **Event-Driven Kitchen Pipeline:** Submitted orders trigger an immediate event from the Order Service through the Kitchen Dispatch Engine, broadcasting tickets to the KDS via WebSockets in <1s without database polling bottlenecks.
    
3.  **Local-First On-Premises Deployment:** Core business logic and the PostgreSQL database reside on local restaurant hardware, allowing order placement and kitchen operations to continue uninterrupted even during external internet outages.
    
4.  **Crash-Resilient State:** State mutations write synchronously to disk via PostgreSQL Write-Ahead Logging (WAL) before confirming transactions, preventing lost reservations or orders upon system reboots.