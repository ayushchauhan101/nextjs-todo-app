// catches all /api/auth/[...auth0] routes
import { handleAuth } from "@auth0/nextjs-auth0";

export default handleAuth()