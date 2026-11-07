# UC-05 Use Case and Object Interaction

## 4.2 UC-05 Place Table Order

| Field | Content |
| --- | --- |
| Primary actor | Server |
| Supporting actors and external systems | None; kitchen preparation belongs to UC-07. |
| TUCBW | The Server needs to place an order for a dining party. |
| TUCEW | The Server receives submission confirmation, cancellation confirmation, or a failure message. |
| Preconditions | The Server is authorized. Table and menu information exists. |
| Success postconditions | One table-linked Order appears once in KitchenQueue with matching details and queued status. The Server receives confirmation. |
| Minimal guarantee | A rejected or canceled attempt creates no submitted Order or kitchen entry. |
| Traces to requirements | FR-07, FR-08, FR-09; QR-01 (kitchen delivery time). |

### Main success scenario

| Actor input / action | System response |
| --- | --- |
| — | **(0)** Lists occupied Tables by table number for a new Order. |
| **(1)** The Server chooses a Table and requests a new Order. | — |
| — | **(2)** Lists MenuItems and their availability. |
| **(3)** The Server gives MenuItems, quantities, and optional preparation notes. | — |
| — | **(4)** Shows the draft: table number, MenuItems, quantities, and notes. Requests confirmation or changes. |
| **(5)** The Server confirms the Order. | — |
| — | **(6)** Confirms kitchen submission with order number, table number, items, quantities, notes, submission time, and queued status. |

### Alternate flows

| Alternate flow | At step | Condition | What happens | Ends or rejoins at |
| --- | --- | --- | --- | --- |
| A1 | (0) | No occupied Table exists. | The system reports no occupied Table. Seating must be completed through UC-04. | Ends; restart at (0) after seating. |
| A2 | (2) or (6) | The chosen Table is no longer occupied. | The system rejects the Table. The Server chooses another or cancels. | Rejoins (2) after a new (1), or ends through A6. |
| A3 | (4) | Unavailable item, empty Order, or invalid quantity (not a positive whole number). | The system identifies the problem and leaves the Order unsubmitted. The Server corrects it or cancels. | Rejoins (4) after a corrected (3), or ends through A6. |
| A4 | (5) | The Server finds an error in the summary. | The Server revises the items, quantities, or notes. The system shows the updated draft. | Rejoins (4), then (5). |
| A5 | (6) | A MenuItem became unavailable after the summary was presented. | The system identifies the item and reports no submission. The Server revises or cancels. | Rejoins (4) after a corrected (3), or ends through A6. |
| A6 | (1), (3), or (5) | The Server abandons the attempt before submission. | The Server cancels. The system confirms that no Order was submitted. | Ends without submission. |
| A7 | (6) | The Order cannot be accepted for kitchen preparation. | The system reports failure: no submitted Order or kitchen entry. The Server retries or cancels. | Rejoins (5) for a new confirmation, or ends through A6. |


## 5.2.2 UC-05 Place Table Order

### (a) Non-trivial steps

| Section 4.2 step | Why the step needs objects |
| --- | --- |
| (0) | Table occupancy determines which table numbers can be offered. |
| (2) | MenuItem availability must be obtained for the chosen Table. |
| (4) | Order composes OrderLines and supplies a complete, table-linked draft for review. |
| (6) | Table occupancy and MenuItem availability must be rechecked, the Order finalized, and kitchen acceptance established before acknowledgment. |

Steps (1), (3), and (5) are simple inputs: Table choice, Order details, and confirmation. The table and diagram cover the main success flow.

**Objects:** OrderPlacement is the interaction controller; Server is the external actor. Proposed domain classes: Table, MenuItem, Order, OrderLine, KitchenQueue. Order contains OrderLines. Final names must match Section 5.1.

### (b) Scenario table

M01–M21 match the diagram; parentheses identify Section 4.2 steps.

| Step | Subject | Subject action | Other data / objects | Object acted upon |
| --- | --- | --- | --- | --- |
| M01 (0) | OrderPlacement | asks for occupied tables | table occupancy | Table |
| M02 (0) | Table | provides occupied table numbers | table numbers | OrderPlacement |
| M03 (0) | OrderPlacement | presents occupied tables | table numbers | Server |
| M04 (1) | Server | identifies table and requests order | table number | OrderPlacement |
| M05 (2) | OrderPlacement | asks for menu availability | selected Table | MenuItem |
| M06 (2) | MenuItem | provides items and availability | item names, availability | OrderPlacement |
| M07 (2) | OrderPlacement | presents items and availability | item names, availability | Server |
| M08 (3) | Server | supplies order contents | MenuItems, quantities, preparation notes | OrderPlacement |
| M09 (4) | OrderPlacement | composes draft order | Table, OrderLines with MenuItems, quantities, preparation notes | Order |
| M10 (4) | Order | provides draft summary | table number, item names, quantities, preparation notes | OrderPlacement |
| M11 (4) | OrderPlacement | presents draft for confirmation | complete draft summary | Server |
| M12 (5) | Server | confirms draft order | reviewed draft | OrderPlacement |
| M13 (6) | OrderPlacement | rechecks table occupancy | chosen Table | Table |
| M14 (6) | Table | confirms table is occupied | table number, occupancy | OrderPlacement |
| M15 (6) | OrderPlacement | rechecks item availability | all MenuItems in Order | MenuItem |
| M16 (6) | MenuItem | confirms all items available | current availability | OrderPlacement |
| M17 (6) | OrderPlacement | finalizes submitted order | reviewed draft, unique order number, submission time, queued status | Order |
| M18 (6) | Order | provides submitted order details | order number, Table, OrderLines, submission time, queued status | OrderPlacement |
| M19 (6) | OrderPlacement | places order in kitchen queue | submitted Order and matching details | KitchenQueue |
| M20 (6) | KitchenQueue | acknowledges one queued order | order number, queued status | OrderPlacement |
| M21 (6) | OrderPlacement | acknowledges submitted order | order number, table number, items, quantities, notes, submission time, queued status | Server |

A7 requires that failed kitchen acceptance leave no submitted Order or kitchen entry.

### (c) Analysis sequence diagram

![UC-05 analysis sequence diagram](../diagrams/seq-uc05.png)

Figure 5.2.2. UC-05 main success flow. Source: `docs/p2/diagrams/seq-uc05.drawio`.
