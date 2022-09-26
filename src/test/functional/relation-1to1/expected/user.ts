import * as z from "zod"
import { RelatedKeychainModel } from "./index"
import type { CompleteKeychain } from "./index"

export const UserModel = z.object({
  id: z.string(),
})

export interface CompleteUser extends z.infer<typeof UserModel> {
  keychain?: CompleteKeychain | null
}

/**
 * RelatedUserModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const RelatedUserModel: z.ZodSchema<CompleteUser> = z.lazy(() => UserModel.extend({
  keychain: RelatedKeychainModel.nullish(),
}))
