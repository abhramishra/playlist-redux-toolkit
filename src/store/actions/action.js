// Create a global reset action that can reset multiple slices
import { createAction } from "@reduxjs/toolkit"
export const reset = createAction("app/reset")