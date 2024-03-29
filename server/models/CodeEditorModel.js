const mongoose = require("mongoose");

const codeEditorSchema = new mongoose.Schema(
    {
        code: { type: String },
        language: { type: String, required: true, default: "javascript" },
        createdBy: { type: String, required: true },
        islive: { type: Booolean, required: true },
    },
    { timestamps: true }
);

const codeEditorModel = mongoose.model("codeEditor", codeEditorSchema);

module.exports = { codeEditorModel };
