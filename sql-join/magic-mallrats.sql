select "customers"."firstName", "customers"."lastName"
from "rentals"
join "inventory" using ("inventoryId")
join "customers" using ("customerId")
join "films" on "inventory"."filmId" = "films"."filmId"
where "films"."title" = 'Magic Mallrats';
