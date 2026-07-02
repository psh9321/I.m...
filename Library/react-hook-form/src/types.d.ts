import type z from "zod"

import { PeopleShema, HobbyShema, AreaShema } from "./model"

declare global {
    type PEOPLE_ITEM = z.infer<typeof PeopleShema>;

    type HOBBY_ITEM = z.infer<typeof HobbyShema>;

    type AREA_ITEM = z.infer<typeof AreaShema>
}

export {}