const mongoose = require("mongoose");
const projectSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },

    clientName: {
      type: String,
      required: [true, "client name is required"],
      trim: true,
    },

    hourlyRate: {
      type: Number,
      required: true,
      min: 0,
    },

    description: String,

    status: {
      type: String,
      enum: ["active", "paused", "completed"],
      default: "active",
    },

    isArchived: {
      type: Boolean,
      default: false,
      index: true,
    },

    archivedAt: {
      type: Date,
    },

    owner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Developer",
      required: true,
      index: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  },
);
projectSchema.index({ name: 1, owner: 1 }, { unique: true });

module.exports = mongoose.model("Project", projectSchema);
