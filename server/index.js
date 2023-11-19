const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
const User = require("./models/user.js"); // schema file
// const mentor = require("./models/mentor.js");
// const application = require("./models/application.js");
// const blog = require("./models/blog.js");
// const chart = require("./models/chart.js");
// const contact = require("./models/contact.js");
// const faq = require("./models/faq.js");
// const feature = require("./models/feature.js");

const port = process.env.PORT || 4000;
const userRoute = require("./routes/userRoutes.js");
const mentorRoute = require("./routes/mentorRoutes.js");
const applicationRoute = require("./routes/applicationRoutes.js");
const blogRoute = require("./routes/blogRoutes.js");
const chartRoute = require("./routes/chartsRoutes.js");
const contactRoute = require("./routes/contactRoutes.js");
const faqRoute = require("./routes/faqRoutes.js");
const featureRoute = require("./routes/featuresRoutes.js");

app.use(express.json());
app.use(cors());

// DB config
mongoose.set("strictQuery", false);
mongoose.connect(
	"mongodb+srv://bennurdarshan:chaiTrade404@cluster0.psgtpad.mongodb.net/?retryWrites=true&w=majority"
);

// bodyparser gets the req.body
app.use(express.urlencoded({ extended: false }));

// app.get("/checkWalletAddress/:walletAddress", async (req, res) => {
// 	const { walletAddress } = req.params;
// 	const document = await User.findOne({ walletAddress });
// 	const exists = !!document;
// 	res.json({ exists });
// });

// app.post("/insert", async (req, res) => {
// 	const walletAddress = req.body.walletAddress;

// 	const formData = new User({
// 		walletAddress,
// 	});

// 	try {
// 		await formData.save();
// 		res.send("inserted data..");
// 	} catch (err) {
// 		console.log(err);
// 	}
// });

app.use(
	cors({
		origin: "http://localhost:3001",
		credentials: true,
	})
);

app.use("/api/user", userRoute);
app.use("/api/mentor", mentorRoute);
app.use("/api/application", applicationRoute);
app.use("/api/blogs", blogRoute);
app.use("/api/charts", chartRoute);
app.use("/api/contact", contactRoute);
app.use("/api/faqs", faqRoute);
app.use("/api/features", featureRoute);

app.listen(port, () => {
	console.log(`Server started on port ${port}`);
});
