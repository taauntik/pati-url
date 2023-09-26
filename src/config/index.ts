import { config } from 'dotenv';
import path from 'path';

config({ path : path.join(process.cwd(), '.env') });

const { env : { PORT, DB_URL, NODE_ENV } } = process;

export default {
    port : PORT as string,
    db_Url : DB_URL as string,
    node_env : NODE_ENV as string
}

