select "addresses"."line1", "cities"."name" as "city", "addresses"."district", "countries"."name" as "country"
from "addresses"
join "cities" using ("cityId")
join "countries" on "cities"."countryId" = "countries"."countryId";
