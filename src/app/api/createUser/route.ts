import { getServerSession } from "next-auth";
import { authoptions } from "../../../../lib/authOptions";

export async function POST() {
    const session =await getServerSession(authoptions);
    
}