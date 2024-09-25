import { express, cors, morgan, dotenv } from './imports';
import authRoutes from './routes/routes';
import expenseRouter from './routes/expense'
const app = express()
dotenv.config()
app.use(cors());
app.use(morgan('dev')); // Logs requests to the console
app.use(express.json()); // For parsing JSON requests
app.use('/auth', authRoutes);
app.use('/', expenseRouter)

app.listen(5000, ()=>{
    console.log("listening")
})