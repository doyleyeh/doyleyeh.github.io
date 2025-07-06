import React, { useState } from "react";

const API_URL =
  "https://glevcn4me7.execute-api.us-east-2.amazonaws.com/predict";
const BATCH_API_URL =
  "https://glevcn4me7.execute-api.us-east-2.amazonaws.com/predict_batch";

interface SpamApiResponse {
  prediction: string;
  confidence: number;
  text?: string;
}

interface BatchPrediction {
  text: string;
  prediction: string;
  confidence: number;
}

export default function SpamApiDemo() {
  const [batchMode, setBatchMode] = useState(false);
  const [input, setInput] = useState("");
  const [batchInputs, setBatchInputs] = useState<string[]>([""]);
  const [result, setResult] = useState<SpamApiResponse | null>(null);
  const [batchResult, setBatchResult] = useState<BatchPrediction[] | null>(
    null
  );
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSingleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setResult(null);
    setBatchResult(null);
    try {
      const res = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text: input }),
      });
      if (!res.ok) throw new Error("API error");
      const data = await res.json();
      setResult(data);
    } catch (err) {
      setError("Failed to get prediction. Please try again.");
    }
    setLoading(false);
  };

  const handleBatchSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setResult(null);
    setBatchResult(null);
    try {
      const messages = batchInputs.filter((msg) => msg.trim() !== "");
      if (messages.length === 0)
        throw new Error("Please enter at least one message.");
      const res = await fetch(BATCH_API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(messages),
      });
      if (!res.ok) throw new Error("API error");
      const data = await res.json();
      setBatchResult(data.predictions);
    } catch (err) {
      setError("Failed to get batch prediction. Please try again.");
    }
    setLoading(false);
  };

  const handleBatchInputChange = (idx: number, value: string) => {
    setBatchInputs((prev) => prev.map((msg, i) => (i === idx ? value : msg)));
  };

  const addBatchInput = () => {
    setBatchInputs((prev) => [...prev, ""]);
  };

  const removeBatchInput = (idx: number) => {
    setBatchInputs((prev) =>
      prev.length > 1 ? prev.filter((_, i) => i !== idx) : prev
    );
  };

  return (
    <div className="rounded-lg border p-4 mt-4 bg-gray-50 dark:bg-gray-800">
      <div className="flex items-center mb-2 gap-2">
        <h4 className="font-semibold">Try the Spam Classifier Demo</h4>
        <button
          className={`text-xs px-2 py-1 rounded ${
            batchMode ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-700"
          }`}
          onClick={() => {
            setBatchMode((prev) => !prev);
            setError("");
            setResult(null);
            setBatchResult(null);
          }}
          type="button"
        >
          {batchMode ? "Batch Mode" : "Single Mode"}
        </button>
      </div>
      {!batchMode ? (
        <form onSubmit={handleSingleSubmit} className="flex flex-col gap-2">
          <input
            type="text"
            className="border rounded px-2 py-1 text-black"
            placeholder="Enter an email to classify..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            required
          />
          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-1 rounded hover:bg-blue-700"
            disabled={loading}
          >
            {loading ? "Classifying..." : "Classify"}
          </button>
        </form>
      ) : (
        <form onSubmit={handleBatchSubmit} className="flex flex-col gap-2">
          {batchInputs.map((msg, idx) => (
            <div key={idx} className="flex gap-2 items-center">
              <input
                type="text"
                className="border rounded px-2 py-1 text-black flex-1"
                placeholder={`Email #${idx + 1}`}
                value={msg}
                onChange={(e) => handleBatchInputChange(idx, e.target.value)}
                required
              />
              <button
                type="button"
                className="text-red-500 px-2 py-1 rounded hover:bg-red-100"
                onClick={() => removeBatchInput(idx)}
                disabled={batchInputs.length === 1}
                title="Remove"
              >
                &minus;
              </button>
            </div>
          ))}
          <button
            type="button"
            className="bg-gray-300 text-gray-700 px-2 py-1 rounded hover:bg-gray-400 w-fit"
            onClick={addBatchInput}
          >
            + Add Email
          </button>
          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-1 rounded hover:bg-blue-700"
            disabled={loading}
          >
            {loading ? "Classifying..." : "Classify Batch"}
          </button>
        </form>
      )}
      {result && (
        <div className="mt-3">
          <div>
            <strong>Prediction:</strong> {result.prediction}
          </div>
          <div>
            <strong>Confidence:</strong> {(result.confidence * 100).toFixed(2)}%
          </div>
        </div>
      )}
      {batchResult && (
        <div className="mt-3">
          <h5 className="font-semibold mb-1">Batch Results:</h5>
          <ul className="space-y-1">
            {batchResult.map((res, idx) => (
              <li
                key={idx}
                className="border rounded px-2 py-1 bg-white/80 dark:bg-gray-900/40"
              >
                <div>
                  <strong>Message:</strong> {res.text}
                </div>
                <div>
                  <strong>Prediction:</strong> {res.prediction}
                </div>
                <div>
                  <strong>Confidence:</strong>{" "}
                  {(res.confidence * 100).toFixed(2)}%
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
      {error && <div className="text-red-600 mt-2">{error}</div>}
    </div>
  );
}
