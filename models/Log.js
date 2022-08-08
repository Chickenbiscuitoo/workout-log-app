const mongoose = require('mongoose')
const Schema = mongoose.Schema

const LogSchema = new Schema(
	{
		host: {
			type: Schema.Types.ObjectId,
		},
		exercise: {
			type: String,
			required: true,
		},
		sets: [
			{
				weight: {
					type: Number,
				},
				reps: {
					type: Number,
				},
			},
		],
	},
	{
		timestamps: true,
	}
)

module.exports = mongoose.model('log', LogSchema)
